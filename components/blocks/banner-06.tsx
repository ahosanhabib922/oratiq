"use client";

import * as React from "react";
import { ArrowRight, X } from "lucide-react";

/** Floating pill banner — sits inside the page flow with breathing room. */
export function Banner06() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div className="px-4 pt-4">
      <div className="relative mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-10 py-2.5 text-center text-sm">
        <p>
          <span className="font-semibold">Workshop:</span>{" "}
          <span className="text-muted-foreground">Shipping RTL right — Aug 14, live.</span>
        </p>
        <a href="#" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline hover:underline-offset-4">
          Save a seat
          <ArrowRight className="size-3.5 rtl-flip" />
        </a>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setOpen(false)}
          className="absolute end-2 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/20 hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
