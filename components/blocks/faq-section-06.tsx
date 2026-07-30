import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/** Compact multi-open FAQ inside a bordered panel. */
export function FaqSection06() {
  const items = [
    ["Refund policy?", "14 days, no questions asked."],
    ["Team seats?", "Unlimited on Team; per-seat elsewhere."],
    ["Invoices?", "Yes — automatic, with VAT fields."],
    ["Educational discount?", "50% for students and educators — write in."],
  ];
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-border px-6 py-2">
        <Accordion type="multiple" defaultValue={[items[0][0]]} className="w-full">
          {items.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
