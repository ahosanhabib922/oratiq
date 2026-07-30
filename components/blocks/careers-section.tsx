import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ROLES = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Dhaka / Remote", type: "Full-time" },
  { title: "Developer Advocate", team: "Community", location: "Remote", type: "Contract" },
];

/** Open-roles list with team/location metadata. */
export function CareersSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <ul className="divide-y divide-border rounded-xl border border-border">
        {ROLES.map((role) => (
          <li key={role.title}>
            <a
              href="#"
              className="group flex flex-wrap items-center gap-x-4 gap-y-2 p-5 transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring outline-none"
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-medium group-hover:underline group-hover:underline-offset-4">
                  {role.title}
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <Badge variant="muted" size="sm">{role.team}</Badge>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {role.location}
                  </span>
                  <span>{role.type}</span>
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground rtl-flip transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
