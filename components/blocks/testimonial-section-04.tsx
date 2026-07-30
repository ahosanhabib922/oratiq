import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

/** Split feature-quote: person panel beside a long-form endorsement. */
export function TestimonialSection04() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid overflow-hidden rounded-3xl border border-border lg:grid-cols-[1fr_1.6fr]">
        <div
          className="flex flex-col items-start justify-end gap-3 p-8"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in oklab, var(--color-primary) 22%, var(--color-card)), var(--color-card))",
          }}
        >
          <Avatar size="xl"><AvatarFallback>NP</AvatarFallback></Avatar>
          <div>
            <p className="font-medium">Noa Peretz</p>
            <p className="text-sm text-muted-foreground">Frontend lead, Umbra</p>
          </div>
          <Badge variant="muted" size="sm">Hebrew + English product</Badge>
        </div>
        <blockquote dir="auto" className="flex items-center p-8 text-xl font-medium leading-relaxed tracking-tight lg:p-12">
          “We maintain one codebase for a bidirectional product used in nine
          countries. Before Oratiq that meant a parallel stylesheet and a
          prayer. Now it means a dir attribute.”
        </blockquote>
      </div>
    </section>
  );
}
