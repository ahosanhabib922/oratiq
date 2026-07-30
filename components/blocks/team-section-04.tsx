/** Portrait-style cards with gradient placeholders for photos. */
export function TeamSection04() {
  const people = [
    ["Ahosan Habib", "Founder"], ["Layla Haddad", "Design lead"],
    ["Tomás Rivera", "Engineering"], ["Noa Peretz", "Frontend"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {people.map(([name, role], i) => (
          <figure key={name} className="group overflow-hidden rounded-2xl border border-border">
            <div
              aria-hidden="true"
              className="aspect-[4/5] w-full transition-transform duration-300 group-hover:scale-105"
              style={{ background: `linear-gradient(${140 + i * 40}deg, color-mix(in oklab, var(--color-primary) ${20 + i * 12}%, var(--color-muted)), var(--color-card))` }}
            />
            <figcaption className="p-4">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
