import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/** Hero with a browser-framed product shot underneath. */
export function HeroSection05() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" size="sm">Product tour</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          See the whole system at a glance
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Docs, registry, and CLI — one pipeline from install to production.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button size="lg">Open the docs</Button>
        </div>
      </div>

      <div className="mt-14 overflow-hidden rounded-t-2xl border border-b-0 border-border shadow-2xl">
        <div dir="ltr" className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-warning/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
          <span className="ms-3 rounded-md bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            ui.oratiq.com
          </span>
        </div>
        <div
          aria-hidden="true"
          className="h-72"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in oklab, var(--color-primary) 18%, var(--color-card)), var(--color-card) 60%)",
          }}
        />
      </div>
    </section>
  );
}
