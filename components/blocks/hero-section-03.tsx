import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/** Minimal editorial hero with an inline stats row. */
export function HeroSection03() {
  const stats = [["98", "components & blocks"], ["2", "directions"], ["0", "lock-in"]];
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
        Build once.
        <br />
        <span className="text-muted-foreground">Read everywhere.</span>
      </h1>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button size="lg">
          Get started
          <ArrowRight className="rtl-flip" />
        </Button>
        <span dir="ltr" className="font-mono text-sm text-muted-foreground">
          npx @oratiq-js/ui init
        </span>
      </div>
      <Separator className="mt-14" />
      <dl className="mt-8 flex flex-wrap gap-x-14 gap-y-6">
        {stats.map(([value, label]) => (
          <div key={label}>
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd className="mt-1 text-3xl font-semibold tnum">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
