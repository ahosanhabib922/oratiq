import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Full-bleed dark hero with announcement pill and grid texture. */
export function HeroSection04() {
  return (
    <section className="relative overflow-hidden dark bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 40%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 40%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(40rem 20rem at 50% 0%, black, transparent)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-4 py-1.5 text-sm backdrop-blur transition-colors hover:bg-accent"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          v0.2 is out
          <ArrowRight className="size-3.5 rtl-flip" />
        </a>
        <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-7xl">
          Interfaces without borders
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          98 components and sections that render beautifully in every language
          your users speak — including the ones that read right-to-left.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button size="lg">Start free</Button>
          <Button size="lg" variant="outline">
            Live demo
          </Button>
        </div>
      </div>
    </section>
  );
}
