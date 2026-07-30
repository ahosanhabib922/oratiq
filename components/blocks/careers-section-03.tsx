import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/** Culture pitch beside role cards — for hiring pages with a story. */
export function CareersSection03() {
  const roles = [
    ["Senior Frontend Engineer", "Engineering", "Remote"],
    ["Product Designer", "Design", "Dhaka / Remote"],
  ];
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Build the web that reads both ways
        </h2>
        <p className="mt-3 text-muted-foreground">
          Small team, global users, unusually hard-to-fake craft. We work in
          public and ship weekly.
        </p>
        <Button variant="outline" size="sm" className="mt-5">About the team</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map(([title, team, location]) => (
          <Card key={title} padding="default" interactive className="gap-3">
            <Badge variant="muted" size="sm" className="w-fit">{team}</Badge>
            <h3 className="text-base font-medium leading-snug">{title}</h3>
            <p className="mt-auto text-xs text-muted-foreground">{location}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
