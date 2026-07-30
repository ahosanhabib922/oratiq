import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Numbers on the start side, action on the end side. */
export function CtaSection06() {
  const stats = [["60s", "to first component"], ["136", "registry items"], ["$0", "to start"]];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-4 py-12 sm:px-6">
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dd className="text-3xl font-semibold tracking-tight tnum">{value}</dd>
              <dt className="mt-0.5 text-xs text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>
        <Button size="lg">
          Start building
          <ArrowRight className="rtl-flip" />
        </Button>
      </div>
    </section>
  );
}
