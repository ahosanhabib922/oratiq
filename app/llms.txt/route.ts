import { COUNTS, FOUNDATIONS, GROUPS } from "@/lib/registry";

export const dynamic = "force-static";

/**
 * Machine-readable index for coding agents.
 *
 * Agents write most of the code that will consume this library, so the
 * conventions they need — logical properties, semantic tokens, bidi isolation
 * — are stated here rather than left to be inferred from examples.
 */
export function GET() {
  const lines: string[] = [
    "# Oratiq Design System",
    "",
    "> An RTL-first, token-driven component library for Next.js 16, React 19, and Tailwind CSS v4.",
    `> ${COUNTS.ready} components, built on Radix primitives.`,
    "",
    "## Rules",
    "",
    "- Components read semantic tokens only (--primary, --muted, --destructive). Never reference a primitive ramp (--brand-500, --neutral-800) or a hex value in application code.",
    "- Use CSS logical properties everywhere: ms-/me-, ps-/pe-, start-/end-, text-start/text-end, rounded-s-/rounded-e-, border-s/border-e. Never ml-, pr-, left-, right-, text-left, or text-right.",
    "- Mirror directional glyphs under RTL with the .rtl-flip utility: chevrons, arrows, trend lines. Never mirror clocks, checkmarks, logos, magnifiers, media controls, or anything containing numerals.",
    "- Wrap inherently-LTR strings in <bdi dir=\"ltr\">: phone numbers, IDs, URLs, version strings, keyboard shortcuts, one-time codes.",
    "- Merge classes with cn() from lib/utils. It registers the custom scales with tailwind-merge; using twMerge directly silently drops colours.",
    "- Wrap the app in <Providers> from components/providers. It supplies theme, writing direction, tooltip, and toast context.",
    "- Icon-only controls require an aria-label describing the action, not the glyph.",
    "",
    "## Theming",
    "",
    "Override the semantic roles in :root and .dark. Never edit a component to change a colour.",
    "All radii derive from --radius via calc(), so one value sets the corner language.",
    "",
    "## Foundations",
    "",
  ];

  for (const item of FOUNDATIONS.items) {
    lines.push(
      `- [${item.name}](/design-library/foundations/${item.slug}): ${item.description}`,
    );
  }

  for (const group of GROUPS) {
    lines.push("", `## ${group.name}`, "");
    for (const item of group.items) {
      const deps = item.dependencies?.length
        ? ` Requires: ${item.dependencies.join(", ")}.`
        : "";
      lines.push(
        `- [${item.name}](/design-library/components/${item.slug}): ${item.description}${deps}`,
      );
    }
  }

  lines.push(
    "",
    "## Install",
    "",
    "```",
    "npx @oratiq/ui init",
    "npx @oratiq/ui add button input field",
    "```",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
