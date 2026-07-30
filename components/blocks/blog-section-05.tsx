import { Badge } from "@/components/ui/badge";

/** Magazine spread: dominant feature + stacked side stories. */
export function BlogSection05() {
  const side = [
    ["Release", "Blocks now ship in 3 styles per category"],
    ["Guide", "Theming a whole product in one file"],
  ];
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
      <a href="#" className="group rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div
          aria-hidden="true"
          className="aspect-[16/8] rounded-2xl"
          style={{ background: "linear-gradient(150deg, color-mix(in oklab, var(--color-primary) 40%, var(--color-muted)), var(--color-card))" }}
        />
        <Badge size="sm" className="mt-5">Featured</Badge>
        <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight group-hover:underline group-hover:underline-offset-4">
          The billion-reader blind spot in component libraries
        </h3>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Why RTL support keeps failing as an afterthought — and what building
          it first actually changes.
        </p>
      </a>
      <div className="flex flex-col gap-6 lg:border-s lg:border-border lg:ps-8">
        {side.map(([tag, title]) => (
          <a key={title} href="#" className="group border-b border-border pb-6 outline-none last:border-0 focus-visible:ring-2 focus-visible:ring-ring">
            <Badge variant="muted" size="sm">{tag}</Badge>
            <h4 className="mt-2 text-lg font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
              {title}
            </h4>
          </a>
        ))}
      </div>
    </section>
  );
}
