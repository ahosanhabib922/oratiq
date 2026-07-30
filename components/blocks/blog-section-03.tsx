/** Chronological archive list — dates in a tabular column. */
export function BlogSection03() {
  const posts = [
    ["31 Jul 2026", "98/98: the registry is complete"],
    ["30 Jul 2026", "Launch: Oratiq is live on npm"],
    ["28 Jul 2026", "Why your date input turns black in dark mode"],
    ["21 Jul 2026", "Logical properties, explained with tea"],
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <ul className="divide-y divide-border">
        {posts.map(([date, title]) => (
          <li key={title}>
            <a href="#" className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <time className="w-28 shrink-0 font-mono text-xs tnum text-muted-foreground">{date}</time>
              <span className="text-base font-medium group-hover:underline group-hover:underline-offset-4">{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
