import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Base plan plus priced add-ons — the unbundled model. */
export function PricingSection05() {
  const addons = [
    ["Figma kit", "$49"], ["Priority support", "$99/yr"], ["Private registry", "$199/yr"],
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <h3 className="text-lg font-medium">Oratiq Base</h3>
            <p className="text-sm text-muted-foreground">Components, blocks, updates.</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold tnum">$0</p>
            <Button>Start free</Button>
          </div>
        </div>
        <ul className="divide-y divide-border border-t border-border">
          {addons.map(([name, price]) => (
            <li key={name} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="inline-flex items-center gap-2 text-sm">
                <Plus className="size-4 text-primary" />
                {name}
              </span>
              <span className="text-sm font-medium tnum">{price}</span>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 border-t border-border px-6 py-3 text-xs text-muted-foreground">
          <Check className="size-3.5 text-success" strokeWidth={3} />
          Every add-on is one-click removable — no bundles, no lock.
        </p>
      </div>
    </section>
  );
}
