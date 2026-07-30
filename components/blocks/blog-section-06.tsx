import { Badge } from "@/components/ui/badge";

/** Topic-first archive: pill rail over a title grid. */
export function BlogSection06() {
  const topics = ["All", "Engineering", "Design", "Releases", "Guides"];
  const posts = [
    "Bidi isolation in 90 seconds", "Surface lift beats shadows in dark mode",
    "What the CLI actually writes", "A field guide to logical properties",
    "Reading order is UX", "Typedown: tabular numerals everywhere",
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, i) => (
          <Badge key={topic} variant={i === 0 ? "default" : "outline"} className="cursor-pointer">
            {topic}
          </Badge>
        ))}
      </div>
      <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {posts.map((title) => (
          <li key={title}>
            <a href="#" className="group flex items-baseline justify-between gap-4 border-b border-border py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="text-base font-medium group-hover:underline group-hover:underline-offset-4">{title}</span>
              <span className="shrink-0 text-xs text-muted-foreground">4 min</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
