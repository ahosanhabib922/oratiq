"use client";

import * as React from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Announcement bar for the very top of a page. Dismissible. */
export function Banner({
  message = "Oratiq Blocks is live — 17 sections, RTL-ready.",
  ctaLabel = "See what's new",
  ctaHref = "#",
  className,
}: {
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;

  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1",
        "bg-primary px-10 py-2.5 text-center text-sm text-primary-foreground",
        className,
      )}
    >
      <p className="font-medium">{message}</p>
      <a
        href={ctaHref}
        className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:no-underline"
      >
        {ctaLabel}
        <ArrowRight className="size-3.5 rtl-flip" />
      </a>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute end-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md transition-colors hover:bg-primary-foreground/10 outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
