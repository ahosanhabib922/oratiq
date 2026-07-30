import { Headset, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedIcon } from "@/components/ui/featured-icon";

/** Route by intent: sales on one side, support on the other. */
export function ContactSection05() {
  const panels = [
    { icon: <Briefcase />, title: "Talk to sales", body: "Licensing, teams, procurement, invoices.", cta: "Book a call" },
    { icon: <Headset />, title: "Get support", body: "Bugs, questions, integration help.", cta: "Open a ticket" },
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-2">
        {panels.map((p) => (
          <div key={p.title} className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-8">
            <FeaturedIcon variant="light" size="lg">{p.icon}</FeaturedIcon>
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.body}</p>
            <Button variant="outline" size="sm" className="mt-2">{p.cta}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
