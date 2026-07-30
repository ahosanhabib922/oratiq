/** Numbered editorial list — for narrative feature storytelling. */
export function FeaturesSection04() {
  const steps = [
    ["Install the system", "One command writes the tokens, providers, and helpers into your repo."],
    ["Compose your pages", "Components and blocks snap together — dark mode and RTL ride along."],
    ["Ship every locale", "Flip dir per locale route. That's the whole migration."],
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <ol className="flex flex-col gap-10">
        {steps.map(([title, body], i) => (
          <li key={title} className="grid grid-cols-[auto_1fr] gap-5">
            <span className="font-mono text-4xl font-light text-primary tnum">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1.5">
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-1.5 text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
