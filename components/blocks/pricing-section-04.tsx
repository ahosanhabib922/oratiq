import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/** Flat annual pricing — three cards, no toggle, no drama. */
export function PricingSection04() {
  const tiers = [
    { name: "Solo", price: "$99", per: "/yr", features: ["1 seat", "All blocks", "Updates"], cta: "Choose Solo" },
    { name: "Studio", price: "$299", per: "/yr", features: ["5 seats", "All blocks", "Priority support"], cta: "Choose Studio" },
    { name: "Agency", price: "$799", per: "/yr", features: ["Unlimited seats", "Client projects", "Invoice billing"], cta: "Choose Agency" },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} padding="default" className="gap-4">
            <h3 className="font-medium">{tier.name}</h3>
            <p className="text-3xl font-semibold tracking-tight tnum">
              {tier.price}
              <span className="text-sm font-normal text-muted-foreground">{tier.per}</span>
            </p>
            <ul className="flex flex-1 flex-col gap-2 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-success" strokeWidth={3} />{f}
                </li>
              ))}
            </ul>
            <Button variant="outline" fullWidth>{tier.cta}</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
