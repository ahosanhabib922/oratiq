import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";

const QUOTES = [
  {
    quote:
      "We shipped our Arabic locale in a day. The layout just… mirrored. I kept looking for the catch.",
    name: "Layla Haddad",
    role: "Frontend lead, Vertex",
    initials: "LH",
  },
  {
    quote:
      "The first component library where dark mode and RTL aren't afterthoughts. Our design team finally stopped filing bugs.",
    name: "Tomás Rivera",
    role: "CTO, Northwind",
    initials: "TR",
  },
  {
    quote:
      "Copy-in blocks meant our brand tokens applied everywhere instantly. Rebrand took an afternoon.",
    name: "Amina Chowdhury",
    role: "Design systems, Globex",
    initials: "AC",
  },
];

/** Three-up testimonial cards with ratings. */
export function TestimonialSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {QUOTES.map((t) => (
          <Card key={t.name} padding="default" className="gap-4">
            <Rating value={5} readOnly size="sm" label={`${t.name} rated 5 of 5`} />
            <blockquote dir="auto" className="flex-1 text-sm leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{t.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </Card>
        ))}
      </div>
    </section>
  );
}
