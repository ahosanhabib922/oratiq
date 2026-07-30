import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/** Grouped FAQ — for products with distinct question areas. */
export function FaqSection05() {
  const groups = [
    {
      heading: "Licensing",
      items: [
        ["Commercial projects?", "Yes — MIT covers commercial use, client work, and redistribution."],
        ["Attribution?", "Appreciated, never required."],
      ],
    },
    {
      heading: "Technical",
      items: [
        ["Tailwind v3?", "No — the token layer is built on v4's @theme."],
        ["Server components?", "Static components are RSC-safe; interactive ones are client, marked as such."],
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.heading}
            </h3>
            <Accordion type="single" collapsible className="mt-2 w-full">
              {group.items.map(([q, a]) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
