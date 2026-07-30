#!/usr/bin/env node
/**
 * Generates the public registry from source.
 *
 * Reads every component in components/ui, resolves its internal imports into
 * a dependency graph, and emits one JSON item per component under public/r/.
 * The CLI fetches those files; nothing is hand-maintained.
 *
 * Run with: npm run registry
 */

import { readFile, readdir, mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UI_DIR = path.join(ROOT, "components", "ui");
const OUT_DIR = path.join(ROOT, "public", "r");

/** Packages that are always required, so they're not repeated per item. */
const BASE_DEPENDENCIES = ["clsx", "tailwind-merge", "class-variance-authority"];

/** Maps an internal import to the registry item that provides it. */
function resolveInternal(specifier, fromFile) {
  if (specifier.startsWith("./")) {
    return path.basename(specifier, ".tsx").replace(/\.ts$/, "");
  }
  if (specifier.startsWith("@/components/ui/")) {
    return specifier.replace("@/components/ui/", "");
  }
  // These are real registry items, not app-only files — every component needs
  // cn(), and the direction-aware ones need the providers.
  if (specifier === "@/lib/utils") return "utils";
  if (specifier.startsWith("@/components/providers")) return "providers";
  if (specifier.startsWith("@/")) {
    console.warn(`  ! ${fromFile}: unmapped internal import "${specifier}"`);
  }
  return null;
}

function parseImports(source) {
  const npm = new Set();
  const internal = new Set();

  // Matches both `import x from "y"` and `export * from "y"`.
  const re = /(?:^|\n)\s*(?:import|export)[\s\S]*?from\s+["']([^"']+)["']/g;
  let match;
  while ((match = re.exec(source)) !== null) {
    const spec = match[1];
    if (spec.startsWith(".") || spec.startsWith("@/")) {
      const resolved = resolveInternal(spec, "");
      if (resolved) internal.add(resolved);
    } else if (spec !== "react" && spec !== "react-dom") {
      // Scoped packages keep two segments; the rest keep one.
      const parts = spec.split("/");
      npm.add(spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]);
    }
  }

  return { npm: [...npm], internal: [...internal] };
}

async function main() {
  if (!existsSync(UI_DIR)) {
    console.error(`No components directory at ${UI_DIR}`);
    process.exit(1);
  }

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const items = [];

  // Two scanned source sets: primitives and composed blocks. Same pipeline,
  // different target directory and registry type.
  const SETS = [
    { dir: UI_DIR, rel: "components/ui", type: "registry:ui" },
    {
      dir: path.join(ROOT, "components", "blocks"),
      rel: "components/blocks",
      type: "registry:block",
    },
  ];

  for (const set of SETS) {
    if (!existsSync(set.dir)) continue;
    const files = (await readdir(set.dir)).filter(
      (f) => f.endsWith(".tsx") || f.endsWith(".ts"),
    );

    for (const file of files) {
      const name = path.basename(file).replace(/\.tsx?$/, "");
      const source = await readFile(path.join(set.dir, file), "utf8");
      const { npm, internal } = parseImports(source);

      const registryDependencies = internal.filter((d) => d !== name);
      const dependencies = [...new Set([...BASE_DEPENDENCIES, ...npm])].sort();

      const item = {
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        name,
        type: set.type,
        dependencies,
        registryDependencies: registryDependencies.sort(),
        files: [
          {
            path: `${set.rel}/${file}`,
            type: set.type,
            target: `${set.rel}/${file}`,
            content: source,
          },
        ],
      };

      await writeFile(
        path.join(OUT_DIR, `${name}.json`),
        JSON.stringify(item, null, 2) + "\n",
      );
      items.push({ name, dependencies, registryDependencies });
    }
  }

  // Shared, non-component files ship as their own items so `add` can pull
  // them in through the same dependency graph.
  const extras = [
    {
      name: "utils",
      type: "registry:lib",
      files: [{ from: ["lib", "utils.ts"], target: "lib/utils.ts" }],
    },
    {
      // The whole token layer as one item, so `init` can deliver a working
      // theme instead of pointing at the docs and hoping.
      name: "theme",
      type: "registry:style",
      files: [{ from: ["app", "globals.css"], target: "app/globals.css" }],
    },
    {
      name: "providers",
      type: "registry:lib",
      files: [
        {
          from: ["components", "providers", "index.tsx"],
          target: "components/providers/index.tsx",
        },
        {
          from: ["components", "providers", "direction-provider.tsx"],
          target: "components/providers/direction-provider.tsx",
        },
      ],
    },
  ];

  for (const extra of extras) {
    const files = [];
    const npm = new Set(BASE_DEPENDENCIES);
    const registryDependencies = new Set();

    // Files that ship inside this item satisfy their own relative imports —
    // e.g. providers/index.tsx importing ./direction-provider is internal to
    // the item, not a separate registry entry.
    const selfProvided = new Set(
      extra.files.map((f) =>
        path.basename(f.target).replace(/\.tsx?$/, ""),
      ),
    );

    for (const file of extra.files) {
      const source = await readFile(path.join(ROOT, ...file.from), "utf8");
      const parsed = parseImports(source);
      parsed.npm.forEach((d) => npm.add(d));
      parsed.internal
        .filter((d) => d !== extra.name && !selfProvided.has(d))
        .forEach((d) => registryDependencies.add(d));
      files.push({
        path: file.target,
        type: extra.type,
        target: file.target,
        content: source,
      });
    }

    await writeFile(
      path.join(OUT_DIR, `${extra.name}.json`),
      JSON.stringify(
        {
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          name: extra.name,
          type: extra.type,
          dependencies: [...npm].sort(),
          registryDependencies: [...registryDependencies].sort(),
          files,
        },
        null,
        2,
      ) + "\n",
    );
    items.push({
      name: extra.name,
      dependencies: [...npm].sort(),
      registryDependencies: [...registryDependencies],
    });
  }

  const index = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "oratiq",
    homepage: "https://ui.oratiq.com",
    items: items
      .map((i) => ({
        name: i.name,
        type: "registry:ui",
        dependencies: i.dependencies,
        registryDependencies: i.registryDependencies,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  };

  // Demo sources for the docs' Code toggle — same file that renders the
  // preview, exported as plain text. The demo index is generated too, so a
  // new demo file registers itself: drop a .tsx in, run the registry.
  const DEMOS_DIR = path.join(ROOT, "components", "demos");
  const DEMOS_OUT = path.join(ROOT, "public", "demos");
  if (existsSync(DEMOS_DIR)) {
    await rm(DEMOS_OUT, { recursive: true, force: true });
    await mkdir(DEMOS_OUT, { recursive: true });
    const demoFiles = (await readdir(DEMOS_DIR))
      .filter((f) => f.endsWith(".tsx"))
      .sort();

    const identifiers = [];
    for (const file of demoFiles) {
      const name = path.basename(file, ".tsx");
      const source = await readFile(path.join(DEMOS_DIR, file), "utf8");
      await writeFile(path.join(DEMOS_OUT, `${name}.txt`), source);
      identifiers.push({
        name,
        id: name.replace(/(^|-)(\w)/g, (_, __, ch) => ch.toUpperCase()),
      });
    }

    const indexSource = [
      "// GENERATED by scripts/build-registry.mjs — do not edit by hand.",
      "// Maps demo name → component; DemoBlock renders from this and fetches",
      "// the matching /demos/<name>.txt for the code view.",
      "",
      ...identifiers.map((d) => `import ${d.id} from "./${d.name}";`),
      "",
      "export const DEMOS: Record<string, React.ComponentType> = {",
      ...identifiers.map((d) => `  "${d.name}": ${d.id},`),
      "};",
      "",
    ].join("\n");
    await writeFile(path.join(DEMOS_DIR, "index.ts"), indexSource);
    console.log(`Wrote ${demoFiles.length} demo sources + generated index`);
  }

  const indexJson = JSON.stringify(index, null, 2) + "\n";
  await writeFile(path.join(ROOT, "registry.json"), indexJson);
  // Emitted alongside the items so the CLI can resolve the index relative to
  // the registry URL it was given, with no second base path to configure.
  await writeFile(path.join(OUT_DIR, "registry.json"), indexJson);

  console.log(`Wrote ${items.length} registry items to public/r/`);
  console.log(`Wrote registry.json index (repo root and public/r/)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
