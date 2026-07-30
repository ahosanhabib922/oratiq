import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/** One featured post beside a compact list of recent ones. */
export function BlogSection02() {
  const recent = [
    ["Design", "Designing one system for two reading directions", "5 min"],
    ["Release", "98/98: components and blocks, complete", "3 min"],
    ["Engineering", "What tabular figures fix in live UIs", "4 min"],
  ];
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <a href="#" className="group rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div
          aria-hidden="true"
          className="aspect-video w-full rounded-2xl"
          style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 45%, var(--color-muted)), var(--color-card))" }}
        />
        <Badge variant="muted" size="sm" className="mt-4">Engineering</Badge>
        <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
          Mirroring a whole product with zero conditionals
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          The architecture behind Oratiq&apos;s RTL story — logical properties,
          bidi isolation, and the three glyphs you must never flip.
        </p>
      </a>
      <div className="flex flex-col divide-y divide-border">
        {recent.map(([tag, title, mins]) => (
          <a key={title} href="#" className="group flex items-center gap-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="min-w-0 flex-1">
              <Badge variant="muted" size="sm">{tag}</Badge>
              <span className="mt-1.5 block text-base font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                {title}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{mins} read</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground rtl-flip" />
          </a>
        ))}
      </div>
    </section>
  );
}
