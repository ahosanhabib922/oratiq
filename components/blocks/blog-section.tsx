import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const POSTS = [
  { tag: "Engineering", title: "How Oratiq mirrors a whole page with zero conditionals", minutes: 7 },
  { tag: "Design", title: "Designing one system for two reading directions", minutes: 5 },
  { tag: "Release", title: "81 components: the registry is complete", minutes: 3 },
];

/** Blog teaser grid with gradient thumbnails (swap for real covers). */
export function BlogSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <a key={post.title} href="#" className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Card padding="none" className="h-full gap-0 overflow-hidden">
              <div
                aria-hidden="true"
                className="aspect-video w-full"
                style={{
                  background: `linear-gradient(135deg, color-mix(in oklab, var(--color-primary) ${25 + i * 20}%, var(--color-muted)), var(--color-card))`,
                }}
              />
              <CardContent className="flex flex-col gap-2 p-5">
                <Badge variant="muted" size="sm" className="w-fit">{post.tag}</Badge>
                <h3 className="text-base font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1 text-sm text-muted-foreground">
                  {post.minutes} min read
                  <ArrowRight className="size-3.5 rtl-flip transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
