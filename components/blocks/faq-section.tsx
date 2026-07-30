import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  ["Do blocks work in RTL?", "Every block uses logical properties and direction-aware components — flip dir on <html> and the whole page mirrors."],
  ["Can I use my own brand?", "Yes. Blocks read the same semantic tokens as the components — override --primary and friends once."],
  ["Do I need the paid tier for the components?", "No — all 81 components are free and MIT. The paid tier is these composed sections and page templates."],
  ["How do updates work?", "Blocks are copy-in, like components: re-add, review the diff, keep your edits."],
] as const;

/** Two-column FAQ on desktop, accordion everywhere. */
export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
