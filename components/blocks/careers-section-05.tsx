import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Centred hiring pitch with a single action — for tiny teams. */
export function CareersSection05() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <Badge variant="success" size="sm" dot>Hiring</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
        We&apos;re four people shipping for a billion readers
      </h2>
      <p className="mt-3 text-muted-foreground">
        No open role that fits? Convince us anyway — the best hires so far
        did exactly that.
      </p>
      <Button size="lg" className="mt-7">See all 3 openings</Button>
    </section>
  );
}
