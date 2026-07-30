import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COUNTS, FOUNDATIONS, GROUPS } from "@/lib/registry";
import { StatusBadge } from "@/components/docs/docs-primitives";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function OverviewPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-10">
      <header className="mb-14">
        <Badge variant="outline" size="sm">
          Next.js 16 · Tailwind CSS v4 · Radix
        </Badge>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-balance">
          An RTL-first component library.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Built on semantic tokens, so re-theming never touches a component.
          Every component uses CSS logical properties and is verified in both
          writing directions — flip the toggle in the header on any page.
        </p>

        <dl className="mt-10 flex flex-wrap gap-10">
          <div>
            <dt className="text-sm text-muted-foreground">Components ready</dt>
            <dd className="mt-1 text-3xl font-medium tnum">
              {COUNTS.ready}
              <span className="text-lg text-muted-foreground">
                /{COUNTS.total}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Foundations</dt>
            <dd className="mt-1 text-3xl font-medium tnum">
              {FOUNDATIONS.items.length}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Directions supported</dt>
            <dd className="mt-1 text-3xl font-medium tnum">2</dd>
          </div>
        </dl>
      </header>

      <section className="mb-14">
        <h2 className="mb-5 text-xl font-medium tracking-tight">Foundations</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDATIONS.items.map((item) => (
            <Link
              key={item.slug}
              href={`/design-library/foundations/${item.slug}`}
              className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card padding="sm" interactive className="h-full">
                <CardTitle className="text-base">{item.name}</CardTitle>
                <CardDescription className="text-xs">
                  {item.description}
                </CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {GROUPS.map((group) => (
        <section key={group.name} className="mb-14">
          <h2 className="mb-5 text-xl font-medium tracking-tight">
            {group.name}
          </h2>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {group.items.map((item) => (
              <Link
                key={item.slug}
                href={`/design-library/components/${item.slug}`}
                className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.name}</span>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-1 truncate text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 rtl-flip" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
