import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  ["All 98 components & blocks", true, true],
  ["Commercial use", true, true],
  ["Figma kit", false, true],
  ["Priority support", false, true],
  ["Private registry", false, true],
] as const;

/** Two plans, feature-by-feature comparison. */
export function PricingSection02() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="grid grid-cols-[1.4fr_1fr_1fr]">
          <div className="border-b border-border bg-card/50 p-5" />
          {[["Free", "$0"], ["Pro", "$29"]].map(([name, price]) => (
            <div key={name} className="border-b border-border bg-card/50 p-5 text-center">
              <p className="text-sm font-medium">{name}</p>
              <p className="mt-1 text-2xl font-semibold tnum">{price}<span className="text-xs text-muted-foreground">/mo</span></p>
            </div>
          ))}
          {FEATURES.map(([label, free, pro]) => (
            <div key={label} className="contents">
              <div className="border-b border-border p-4 text-sm">{label}</div>
              {[free, pro].map((has, i) => (
                <div key={i} className="flex items-center justify-center border-b border-border p-4">
                  {has ? (
                    <Check className="size-4 text-success" strokeWidth={3} />
                  ) : (
                    <Minus className="size-4 text-muted-foreground/40" />
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="p-4" />
          <div className="p-4"><Button fullWidth variant="outline" size="sm">Start free</Button></div>
          <div className="p-4"><Button fullWidth size="sm">Get Pro</Button></div>
        </div>
      </div>
    </section>
  );
}
