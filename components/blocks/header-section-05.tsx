import { Badge } from "@/components/ui/badge";

/** Page header on a soft gradient panel. */
export function HeaderSection05() {
  return (
    <div className="px-4 pt-6 sm:px-6">
      <div
        className="mx-auto max-w-6xl rounded-3xl border border-border px-8 py-14"
        style={{
          background:
            "radial-gradient(36rem 16rem at 20% 0%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%)",
        }}
      >
        <Badge size="sm">Guides</Badge>
        <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-balance">
          Everything about theming Oratiq
        </h1>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Ramps, roles, radii, and the one rule that keeps rebrands to a
          single CSS file.
        </p>
      </div>
    </div>
  );
}
