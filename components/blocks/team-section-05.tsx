import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/** Two-founder spotlight with longer bios. */
export function TeamSection05() {
  const founders = [
    { name: "Ahosan Habib", role: "Founder & product", bio: "Started Oratiq after shipping four bidirectional products the hard way. Believes reading order is a user right, not a feature flag.", i: "AH" },
    { name: "Layla Haddad", role: "Founding designer", bio: "Type systems across Latin, Arabic, and Hebrew. Draws every glyph decision back to one question: does it read?", i: "LH" },
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        {founders.map((f) => (
          <div key={f.name} className="flex flex-col gap-4">
            <Avatar size="2xl"><AvatarFallback>{f.i}</AvatarFallback></Avatar>
            <div>
              <h3 className="text-lg font-medium">{f.name}</h3>
              <p className="text-sm text-primary">{f.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
