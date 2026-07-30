import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const PEOPLE = [
  { name: "Ahosan Habib", role: "Founder", initials: "AH" },
  { name: "Layla Haddad", role: "Design", initials: "LH" },
  { name: "Tomás Rivera", role: "Engineering", initials: "TR" },
  { name: "Amina Chowdhury", role: "Developer relations", initials: "AC" },
];

/** People grid with avatars. */
export function TeamSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {PEOPLE.map((person) => (
          <figure key={person.name} className="flex flex-col items-center gap-3 text-center">
            <Avatar size="xl">
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <figcaption>
              <p className="text-sm font-medium">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
