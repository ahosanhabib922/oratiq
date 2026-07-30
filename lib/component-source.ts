import { readFile } from "node:fs/promises";
import path from "node:path";

/** Docs slugs that don't match their source filename 1:1. */
const FILE_OVERRIDES: Record<string, string> = {
  "typography-component": "typography",
};

export interface ComponentSource {
  file: string;
  /** Where the source lives — ui components or composed blocks. */
  dir: "ui" | "blocks";
  source: string;
  /** Value exports, in declaration order — what a consumer can import. */
  exports: string[];
  /** npm packages this component needs, from the generated registry item. */
  dependencies: string[];
}

function parseExports(source: string): string[] {
  const names: string[] = [];

  // Direct declarations: export function X / export const X.
  const decl = /export\s+(?:async\s+)?(?:function|const)\s+(\w+)/g;
  let match;
  while ((match = decl.exec(source)) !== null) names.push(match[1]);

  // Re-export lists: export { A, B as C, type D } — types are skipped, and
  // aliased exports count under their public name.
  const lists = /export\s*\{([^}]+)\}/g;
  while ((match = lists.exec(source)) !== null) {
    for (const raw of match[1].split(",")) {
      const entry = raw.trim();
      if (!entry || entry.startsWith("type ")) continue;
      const alias = entry.split(/\s+as\s+/);
      names.push((alias[1] ?? alias[0]).trim());
    }
  }

  return [...new Set(names)].filter(Boolean);
}

/**
 * Reads a component's source and metadata for the docs page.
 *
 * Source comes straight from components/ui (never stale in dev); npm
 * dependencies come from the generated registry item, and degrade to an
 * empty list if the registry hasn't been generated yet.
 */
export async function getComponentSource(
  slug: string,
): Promise<ComponentSource | null> {
  const file = FILE_OVERRIDES[slug] ?? slug;

  let source: string | null = null;
  let dir: "ui" | "blocks" = "ui";
  for (const candidate of ["ui", "blocks"] as const) {
    try {
      source = await readFile(
        path.join(process.cwd(), "components", candidate, `${file}.tsx`),
        "utf8",
      );
      dir = candidate;
      break;
    } catch {
      /* try the next location */
    }
  }
  if (source === null) return null;

  let dependencies: string[] = [];
  try {
    const item = JSON.parse(
      await readFile(
        path.join(process.cwd(), "public", "r", `${file}.json`),
        "utf8",
      ),
    );
    dependencies = item.dependencies ?? [];
  } catch {
    // Registry not generated — the install command still works without it.
  }

  return { file, dir, source, exports: parseExports(source), dependencies };
}
