"use client";

import * as React from "react";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Promo banner on a brand gradient, with a strong inline CTA. */
export function Banner02({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;

  return (
    <div
      className={cn("relative px-10 py-3 text-center", className)}
      style={{
        background:
          "linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 30%, var(--color-background)), var(--color-background) 55%, color-mix(in oklab, var(--color-primary) 30%, var(--color-background)))",
      }}
    >
      <p className="inline-flex flex-wrap items-center justify-center gap-2 text-sm">
        <Sparkles className="size-4 text-primary" aria-hidden="true" />
        <span className="font-medium">Launch week:</span>
        <span className="text-muted-foreground">every block is free, forever.</span>
        <a href="#" className="font-semibold text-primary underline underline-offset-4 hover:no-underline">
          Read the announcement
        </a>
      </p>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute end-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
