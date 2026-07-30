import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GROUPS = [
  { team: "Engineering", roles: [["Senior Frontend Engineer", "Remote"], ["Platform Engineer", "Remote"]] },
  { team: "Design", roles: [["Product Designer", "Dhaka / Remote"]] },
  { team: "Community", roles: [["Developer Advocate", "Remote"]] },
] as const;

/** Roles grouped under team headings. */
export function CareersSection02() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-10">
        {GROUPS.map((group) => (
          <div key={group.team}>
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.team}</h3>
              <Badge variant="muted" size="sm" className="tnum">{group.roles.length}</Badge>
            </div>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
              {group.roles.map(([title, location]) => (
                <li key={title}>
                  <a href="#" className="group flex items-center gap-4 p-4 outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring">
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium group-hover:underline group-hover:underline-offset-4">{title}</span>
                      <span className="text-xs text-muted-foreground">{location}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground rtl-flip" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
