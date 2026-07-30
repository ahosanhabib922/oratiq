import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ITEMS = [
  ["How do blocks differ from components?", "Components are primitives (Button, Dialog). Blocks are whole sections composed from them — copy in, replace the content, ship."],
  ["Do I need TypeScript?", "The files ship typed, but plain JS projects work — strip the types or keep allowJs on."],
  ["Is there a Figma kit?", "On the roadmap. The docs' live previews are the source of truth today."],
] as const;

/** Sticky heading on the start side, accordion on the end side. */
export function FaqSection03() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 className="text-3xl font-semibold tracking-tight">Questions, answered</h2>
        <p className="mt-3 text-muted-foreground">
          Can&apos;t find yours? We reply within a business day.
        </p>
        <Button variant="outline" size="sm" className="mt-5">Contact support</Button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {ITEMS.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
