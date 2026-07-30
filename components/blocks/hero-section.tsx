import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Centred hero with eyebrow badge, headline, sub, and CTA pair. */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(48rem 24rem at 50% -4rem, color-mix(in oklab, var(--color-primary) 13%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <Badge variant="outline" size="sm" className="gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          Now with RTL, out of the box
        </Badge>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Launch pages that read <span className="text-primary">both ways</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Production-ready marketing sections on Oratiq — copy in, wire your
          content, ship to every locale you serve.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg">
            Get started
            <ArrowRight className="rtl-flip" />
          </Button>
          <Button size="lg" variant="outline">
            <Play />
            Watch demo
          </Button>
        </div>
      </div>
    </section>
  );
}
