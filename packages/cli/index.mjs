#!/usr/bin/env node
/**
 * oratiq — add components from the registry into a project.
 *
 * Usage:
 *   npx @oratiq-js/ui init
 *   npx @oratiq-js/ui add button input field
 *   npx @oratiq-js/ui add --all
 *   npx @oratiq-js/ui list
 *
 * Components are copied into the consumer's repo, not imported from a package.
 * They own the code after this runs; upgrades are a re-run plus a diff.
 */

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const CONFIG_FILE = "components.json";
const DEFAULT_REGISTRY = process.env.ORATIQ_REGISTRY ?? "https://ui.oratiq.com/r";

const c = {
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
};

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function loadConfig() {
  if (!existsSync(CONFIG_FILE)) {
    console.error(
      c.red(`No ${CONFIG_FILE} found.`) + ` Run ${c.bold("oratiq init")} first.`,
    );
    process.exit(1);
  }
  return JSON.parse(await readFile(CONFIG_FILE, "utf8"));
}

async function fetchItem(registry, name) {
  const url = `${registry.replace(/\/$/, "")}/${name}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${name}: registry returned ${response.status} for ${url}`);
  }
  return response.json();
}

/** The index sits one level above the item directory. */
function indexUrl(registry) {
  return new URL("registry.json", registry.replace(/\/?$/, "/")).toString();
}

async function fetchIndex(registry) {
  const url = indexUrl(registry);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Registry index returned ${response.status} for ${url}`);
  }
  return response.json();
}

/** Walks registryDependencies so `add button` also pulls in what it needs. */
async function resolveGraph(registry, names) {
  const seen = new Map();
  const queue = [...names];

  while (queue.length) {
    const name = queue.shift();
    if (seen.has(name)) continue;
    const item = await fetchItem(registry, name);
    seen.set(name, item);
    for (const dep of item.registryDependencies ?? []) {
      if (!seen.has(dep)) queue.push(dep);
    }
  }

  return [...seen.values()];
}

/**
 * Rewrites a registry path onto the consumer's directory layout.
 *
 * Prefixes are matched longest-first, and everything after the prefix is
 * preserved — so components/providers/direction-provider.tsx keeps its
 * subdirectory instead of being flattened into the components root.
 */
function targetPath(config, file) {
  const aliases = config.aliases ?? {};
  // The token layer lands wherever this project keeps its Tailwind CSS.
  if (file.type === "registry:style" && config.tailwind?.css) {
    return config.tailwind.css;
  }
  const rewrites = [
    ["components/ui/", aliases.ui ?? "components/ui"],
    ["components/", aliases.components ?? "components"],
    ["lib/", aliases.lib ?? "lib"],
  ];

  for (const [prefix, replacement] of rewrites) {
    if (file.target.startsWith(prefix)) {
      return path.join(replacement, file.target.slice(prefix.length));
    }
  }
  return file.target;
}

async function commandInit(flags) {
  // Zero questions. The project layout is detectable, and a prompt is just an
  // opportunity to typo it — flags override when detection is wrong.
  const hasSrc = existsSync("src");

  const uiDir = flags.ui ?? (hasSrc ? "src/components/ui" : "components/ui");
  const libDir = flags.lib ?? (hasSrc ? "src/lib" : "lib");
  const registry = flags.registry ?? DEFAULT_REGISTRY;

  const cssCandidates = [
    "app/globals.css",
    "src/app/globals.css",
    "styles/globals.css",
    "src/styles/globals.css",
  ];
  const cssPath =
    flags.css ??
    cssCandidates.find((p) => existsSync(p)) ??
    (hasSrc ? "src/app/globals.css" : "app/globals.css");

  console.log(c.dim("Detected layout:"));
  console.log(c.dim(`  components → ${uiDir}`));
  console.log(c.dim(`  utils      → ${libDir}`));
  console.log(c.dim(`  css        → ${cssPath}`));

  const config = {
    $schema: "https://ui.oratiq.com/schema.json",
    style: "default",
    tsx: true,
    tailwind: { css: cssPath, baseColor: "neutral" },
    aliases: { ui: uiDir, lib: libDir },
    registry,
  };

  await writeFile(CONFIG_FILE, JSON.stringify(config, null, 2) + "\n");
  console.log(c.green(`\n✓ Wrote ${CONFIG_FILE}`));

  // Deliver the token layer. Nothing in the system renders correctly
  // without it, so init writes it rather than pointing at the docs.
  try {
    const theme = await fetchItem(registry, "theme");
    const content = theme.files?.[0]?.content;
    if (content) {
      if (await exists(cssPath)) {
        const side = path.join(path.dirname(cssPath), "oratiq-theme.css");
        await writeFile(side, content);
        console.log(c.green(`✓ Wrote ${side}`));
        console.log(
          c.dim(
            `  ${cssPath} already exists — merge the token layer from ${side} into it.`,
          ),
        );
      } else {
        await mkdir(path.dirname(cssPath), { recursive: true });
        await writeFile(cssPath, content);
        console.log(c.green(`✓ Wrote ${cssPath} (token layer)`));
      }
    }
  } catch {
    console.log(
      c.yellow(
        `\nCouldn't reach the registry for the token layer — run ${c.bold("oratiq add theme")} later.`,
      ),
    );
  }

  console.log(c.dim(`\nNext: ${c.bold("oratiq add button")}\n`));
}

async function commandAdd(names, flags) {
  const config = await loadConfig();
  const registry = config.registry ?? DEFAULT_REGISTRY;

  if (flags.all) {
    const index = await fetchIndex(registry);
    names = index.items.map((i) => i.name);
  }

  if (!names.length) {
    console.error(c.red("Specify at least one component, or pass --all."));
    process.exit(1);
  }

  console.log(c.dim(`Resolving from ${registry}…`));
  const items = await resolveGraph(registry, names);

  const npmDeps = new Set();
  let written = 0;
  let skipped = 0;

  for (const item of items) {
    for (const dep of item.dependencies ?? []) npmDeps.add(dep);

    for (const file of item.files ?? []) {
      const dest = targetPath(config, file);
      await mkdir(path.dirname(dest), { recursive: true });

      if ((await exists(dest)) && !flags.overwrite) {
        console.log(c.yellow(`  ~ ${dest} exists, skipped`));
        skipped++;
        continue;
      }

      await writeFile(dest, file.content);
      console.log(c.green(`  + ${dest}`));
      written++;
    }
  }

  console.log(`\n${written} written, ${skipped} skipped.`);

  if (npmDeps.size) {
    console.log(c.dim("\nInstall the required packages:\n"));
    console.log(`  npm install ${[...npmDeps].sort().join(" ")}\n`);
  }
  if (skipped) {
    console.log(c.dim("Re-run with --overwrite to replace existing files.\n"));
  }
}

async function commandList() {
  const config = existsSync(CONFIG_FILE)
    ? JSON.parse(await readFile(CONFIG_FILE, "utf8"))
    : {};
  const registry = config.registry ?? DEFAULT_REGISTRY;
  const index = await fetchIndex(registry);

  console.log(c.bold(`\n${index.items.length} components\n`));
  for (const item of index.items) {
    console.log(`  ${item.name}`);
  }
  console.log();
}

function usage() {
  console.log(`
${c.bold("oratiq")} — RTL-first component registry

  ${c.bold("init")}                 Create ${CONFIG_FILE} and the token layer
  ${c.bold("add")} <names…>         Copy components into your project
  ${c.bold("add")} --all            Copy every component
  ${c.bold("list")}                 List available components

Flags:
  --overwrite            Replace files that already exist
  --registry <url>       init: registry URL
  --css <path>           init: Tailwind CSS file
  --ui <dir>             init: components directory
  --lib <dir>            init: utils directory
`);
}

async function main() {
  const argv = process.argv.slice(2);
  const valueOf = (name) => {
    const i = argv.indexOf(name);
    return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : undefined;
  };
  const flags = {
    all: argv.includes("--all"),
    overwrite: argv.includes("--overwrite"),
    yes: argv.includes("-y") || argv.includes("--yes"),
    registry: valueOf("--registry"),
    css: valueOf("--css"),
    ui: valueOf("--ui"),
    lib: valueOf("--lib"),
  };
  const flagValues = new Set([flags.registry, flags.css, flags.ui, flags.lib].filter(Boolean));
  const positional = argv.filter(
    (a) => !a.startsWith("-") && !flagValues.has(a),
  );
  const [command, ...names] = positional;

  try {
    switch (command) {
      case "init":
        return await commandInit(flags);
      case "add":
        return await commandAdd(names, flags);
      case "list":
        return await commandList();
      default:
        return usage();
    }
  } catch (error) {
    console.error(c.red(`\n${error.message}\n`));
    process.exit(1);
  }
}

main();
