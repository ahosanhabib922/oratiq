import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** One plan, everything included — flat-pricing spotlight. */
export function PricingSection03() {
  const included = [
    "98 components & blocks", "RTL + dark mode", "Figma kit",
    "All future updates", "Priority support", "Unlimited projects",
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="grid overflow-hidden rounded-2xl border border-primary ring-1 ring-primary lg:grid-cols-[1.2fr_1fr]">
        <div className="p-8">
          <Badge size="sm">Lifetime</Badge>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Everything, one payment</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            No seats, no renewals, no metering. Buy once, ship forever.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-card/60 p-8 text-center">
          <p className="text-5xl font-semibold tracking-tight tnum">$349</p>
          <p className="text-sm text-muted-foreground">one-time, per team</p>
          <Button size="lg" fullWidth>Buy Oratiq</Button>
          <p className="text-xs text-muted-foreground">14-day refund, no questions</p>
        </div>
      </div>
    </section>
  );
}
