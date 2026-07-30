import { AtSign, Globe, Link2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/** Cards with contact/social actions per person. */
export function TeamSection06() {
  const people = [
    ["Tomás Rivera", "Engineering", "TR"], ["Amina Chowdhury", "DevRel", "AC"], ["Jonas Weber", "Platform", "JW"],
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {people.map(([name, role, i]) => (
          <Card key={name} padding="default" className="items-center gap-3 text-center">
            <Avatar size="xl"><AvatarFallback>{i}</AvatarFallback></Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
            <div className="mt-1 flex gap-1">
              <Button variant="ghost" size="icon-sm" aria-label={`Email ${name}`}><AtSign /></Button>
              <Button variant="ghost" size="icon-sm" aria-label={`${name}'s profile`}><Link2 /></Button>
              <Button variant="ghost" size="icon-sm" aria-label={`${name}'s website`}><Globe /></Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
