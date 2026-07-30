import { Button } from "@/components/ui/button";
import { KbdGroup } from "@/components/ui/kbd";

/** Dark gradient CTA with a keyboard-hint flourish. */
export function CtaSection04() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(38rem 20rem at 50% 120%, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-balance">
          Stop translating layouts by hand
        </h2>
        <p className="mt-3 max-w-md text-white/60">
          The system does the mirroring. You do the product.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">Get started free</Button>
          <span className="inline-flex items-center gap-2 text-sm text-white/50">
            or press <KbdGroup keys={["⌘", "K"]} /> in the docs
          </span>
        </div>
      </div>
    </section>
  );
}
