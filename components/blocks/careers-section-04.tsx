import { ArrowRight, Globe2, HeartPulse, Laptop } from "lucide-react";
import { FeaturedIcon } from "@/components/ui/featured-icon";

/** Benefits column beside the openings list. */
export function CareersSection04() {
  const benefits = [
    { icon: <Globe2 />, text: "Remote-first, async by default" },
    { icon: <Laptop />, text: "Hardware budget, yearly refresh" },
    { icon: <HeartPulse />, text: "Health cover, wherever you are" },
  ];
  const roles = [["Senior Frontend Engineer", "Remote"], ["Developer Advocate", "Remote"]];
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Why join</h2>
        <ul className="mt-6 flex flex-col gap-4">
          {benefits.map((b) => (
            <li key={b.text} className="flex items-center gap-3">
              <FeaturedIcon variant="light" size="sm">{b.icon}</FeaturedIcon>
              <span className="text-sm">{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Open now</h3>
        <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
          {roles.map(([title, location]) => (
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
    </section>
  );
}
