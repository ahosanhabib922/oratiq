import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Split CTA: promise + checklist on one side, actions on the other. */
export function CtaSection03() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_auto]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ship the multilingual site you keep postponing
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["60-second setup", "RTL included", "MIT licensed"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-success" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg">
            Get started
            <ArrowRight className="rtl-flip" />
          </Button>
          <Button size="lg" variant="outline">Talk to us</Button>
        </div>
      </div>
    </section>
  );
}
