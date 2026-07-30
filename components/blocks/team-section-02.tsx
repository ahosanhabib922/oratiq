import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const PEOPLE = [
  { name: "Ahosan Habib", role: "Founder", bio: "Building the RTL-first web from Dhaka.", initials: "AH", tag: "Product" },
  { name: "Layla Haddad", role: "Design lead", bio: "Systems thinker; four launches in Arabic.", initials: "LH", tag: "Design" },
  { name: "Tomás Rivera", role: "Engineering", bio: "Radix contributor; keyboard-nav zealot.", initials: "TR", tag: "Core" },
];

/** Bio cards for a smaller, story-driven team page. */
export function TeamSection02() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {PEOPLE.map((p) => (
          <Card key={p.name} padding="default" className="gap-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg"><AvatarFallback>{p.initials}</AvatarFallback></Avatar>
              <div className="min-w-0">
                <p className="truncate font-medium">{p.name}</p>
                <p className="truncate text-sm text-muted-foreground">{p.role}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{p.bio}</p>
            <Badge variant="muted" size="sm" className="w-fit">{p.tag}</Badge>
          </Card>
        ))}
      </div>
    </section>
  );
}
