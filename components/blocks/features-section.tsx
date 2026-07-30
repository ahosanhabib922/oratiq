import { Globe2, Palette, ShieldCheck, Sparkles, Wand2, Zap } from "lucide-react";
import { FeaturedIcon } from "@/components/ui/featured-icon";

const FEATURES = [
  { icon: <Globe2 />, title: "RTL-first", body: "Logical properties end to end — layouts mirror with zero extra work." },
  { icon: <Palette />, title: "Token-driven", body: "Re-brand every section with one CSS override." },
  { icon: <Zap />, title: "Fast by default", body: "Static-friendly sections with no client JS unless needed." },
  { icon: <ShieldCheck />, title: "Accessible", body: "Landmarks, labels, and contrast handled for you." },
  { icon: <Sparkles />, title: "Dark mode", body: "Every section reads the theme — nothing to wire." },
  { icon: <Wand2 />, title: "Composable", body: "Built from Oratiq primitives you already own." },
];

/** Three-across feature grid with featured icons. */
export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3">
            <FeaturedIcon variant="light">{feature.icon}</FeaturedIcon>
            <h3 className="text-base font-medium">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
