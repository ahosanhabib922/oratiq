import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COUNTS } from "@/lib/registry";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
        O
      </span>

      <Badge variant="outline" size="sm">
        {COUNTS.ready} of {COUNTS.total} components ready
      </Badge>

      <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance">
        Oratiq Design System
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        An RTL-first, token-driven component library for Next.js and Tailwind CSS.
      </p>

      <Link
        href="/design-library"
        className="mt-4 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        Open the library
        <ArrowRight className="size-4 rtl-flip" />
      </Link>
    </main>
  );
}
