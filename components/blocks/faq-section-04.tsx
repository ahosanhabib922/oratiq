import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

/** Centred single column ending in a support CTA. */
export function FaqSection04() {
  const items = [
    ["What exactly do I get?", "The complete registry — 81 components and every block style — installed into your repo as code you own."],
    ["Can I self-host the registry?", "Yes: point --registry at your fork. The CLI treats any compatible URL the same."],
    ["Do you support older Next.js?", "Next 15+ with the App Router. Pages Router isn't supported."],
  ];
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-semibold tracking-tight">Frequently asked</h2>
      <Accordion type="single" collapsible className="mt-8 w-full">
        {items.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 text-center">
        <p className="text-sm font-medium">Still stuck?</p>
        <p className="text-sm text-muted-foreground">We answer every question within a business day.</p>
        <Button size="sm" variant="outline">Contact support</Button>
      </div>
    </section>
  );
}
