"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Offer banner with a real button — for time-boxed promotions. */
export function Banner04() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div className="relative border-b border-border bg-card px-12 py-2.5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
          -40%
        </span>
        <p className="font-medium">Launch-week pricing ends Friday.</p>
        <Button size="xs">Claim the deal</Button>
      </div>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute end-3 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
