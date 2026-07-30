"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const TIERS = [
  {
    name: "Free",
    monthly: 0,
    blurb: "The full component library.",
    features: ["81 components", "MIT license", "Community support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    monthly: 29,
    blurb: "Everything, plus the blocks.",
    features: ["All marketing sections", "App shells & dashboards", "Figma kit", "Priority support"],
    cta: "Get Pro",
    featured: true,
  },
  {
    name: "Team",
    monthly: 79,
    blurb: "For product organisations.",
    features: ["Everything in Pro", "Unlimited seats", "Private registry", "Invoice billing"],
    cta: "Contact sales",
    featured: false,
  },
];

/** Three tiers with a monthly/yearly toggle (yearly = 2 months free). */
export function PricingSection() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex items-center justify-center gap-3">
        <Label htmlFor="billing">Monthly</Label>
        <Switch
          id="billing"
          checked={yearly}
          onCheckedChange={setYearly}
          aria-label="Bill yearly"
        />
        <Label htmlFor="billing" className="gap-2">
          Yearly
          <Badge size="sm" variant="success">2 months free</Badge>
        </Label>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TIERS.map((tier) => {
          const price = yearly ? Math.round((tier.monthly * 10) / 12) : tier.monthly;
          return (
            <Card
              key={tier.name}
              padding="default"
              className={cn("gap-5", tier.featured && "border-primary ring-1 ring-primary")}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                {tier.featured && <Badge size="sm">Popular</Badge>}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight tnum">
                  ${price}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">{tier.blurb}</p>
              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button fullWidth variant={tier.featured ? "default" : "outline"}>
                {tier.cta}
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
