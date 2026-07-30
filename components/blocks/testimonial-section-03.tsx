import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const WALL = [
  { q: "The CLI pulled seven files for combobox and every one compiled. That's when I trusted it.", n: "Amina Chowdhury", r: "Design systems, Globex", i: "AC" },
  { q: "Dark mode without a single dark: class in our own code.", n: "Jonas Weber", r: "Staff engineer, Initech", i: "JW" },
  { q: "Our Hebrew launch was a dir attribute. I still think about that.", n: "Noa Peretz", r: "Frontend, Umbra", i: "NP" },
  { q: "Blocks got our landing page live before lunch.", n: "Sam Whitaker", r: "Founder, Aperture", i: "SW" },
];

/** Two-column quote wall for volume of voices. */
export function TestimonialSection03() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {WALL.map((t) => (
          <Card key={t.n} padding="default" className="gap-4">
            <blockquote dir="auto" className="text-sm leading-relaxed">“{t.q}”</blockquote>
            <figcaption className="flex items-center gap-3">
              <Avatar size="sm"><AvatarFallback>{t.i}</AvatarFallback></Avatar>
              <span className="min-w-0 text-sm">
                <span className="block truncate font-medium">{t.n}</span>
                <span className="block truncate text-xs text-muted-foreground">{t.r}</span>
              </span>
            </figcaption>
          </Card>
        ))}
      </div>
    </section>
  );
}
