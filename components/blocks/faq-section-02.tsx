const ITEMS = [
  ["Is it really free?", "Yes — MIT. Components and blocks, commercial use included."],
  ["What about updates?", "Re-run add with --overwrite and review the diff. You stay in control."],
  ["Does RTL cost extra work?", "No. Flip dir on <html>; logical properties do the rest."],
  ["Can my agency use it for clients?", "Yes, unlimited projects. Attribution appreciated, never required."],
  ["Which frameworks?", "Next.js first-class today; the components are React + Tailwind."],
  ["Where do I report bugs?", "GitHub issues — templates ask for theme and direction up front."],
] as const;

/** All questions visible at once — for shorter answers. */
export function FaqSection02() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {ITEMS.map(([q, a]) => (
          <div key={q}>
            <h3 className="text-sm font-semibold">{q}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
