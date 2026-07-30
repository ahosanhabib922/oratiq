import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/** Dense roster list — for orgs, not portraits. */
export function TeamSection03() {
  const rows = [
    ["Ahosan Habib", "Founder", "AH"], ["Layla Haddad", "Design lead", "LH"],
    ["Tomás Rivera", "Engineering", "TR"], ["Amina Chowdhury", "DevRel", "AC"],
    ["Noa Peretz", "Frontend", "NP"], ["Jonas Weber", "Platform", "JW"],
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {rows.map(([name, role, initials]) => (
          <li key={name} className="flex items-center gap-3 border-b border-border py-3.5">
            <Avatar size="sm"><AvatarFallback>{initials}</AvatarFallback></Avatar>
            <span className="min-w-0 flex-1 truncate text-sm font-medium">{name}</span>
            <span className="shrink-0 text-sm text-muted-foreground">{role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
