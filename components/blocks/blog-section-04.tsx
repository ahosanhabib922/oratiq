import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/** Two-up cards with author bylines. */
export function BlogSection04() {
  const posts = [
    { tag: "Engineering", title: "Anatomy of a direction-aware carousel", author: "Tomás Rivera", i: "TR", date: "29 Jul" },
    { tag: "Design", title: "Choosing type that works in four scripts", author: "Layla Haddad", i: "LH", date: "24 Jul" },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post, idx) => (
          <a key={post.title} href="#" className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Card padding="none" className="h-full gap-0 overflow-hidden">
              <div
                aria-hidden="true"
                className="aspect-[2/1] w-full"
                style={{ background: `linear-gradient(${120 + idx * 60}deg, color-mix(in oklab, var(--color-primary) ${30 + idx * 25}%, var(--color-muted)), var(--color-card))` }}
              />
              <CardContent className="flex flex-col gap-3 p-5">
                <Badge variant="muted" size="sm" className="w-fit">{post.tag}</Badge>
                <h3 className="text-lg font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center gap-2.5">
                  <Avatar size="sm"><AvatarFallback>{post.i}</AvatarFallback></Avatar>
                  <span className="text-xs text-muted-foreground">
                    {post.author} · {post.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
