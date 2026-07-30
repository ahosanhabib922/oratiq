"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Layout shell for a filtering row: search + filter controls at the start,
 * view controls pushed to the end. Wraps on small screens.
 */
export function FilterBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="toolbar"
      aria-label="Filters"
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

/** Pushes everything after it to the end edge. */
export function FilterBarSpacer() {
  return <div className="ms-auto" />;
}

export interface FilterChipProps {
  /** e.g. "Status". */
  label: string;
  /** e.g. "Active". */
  value: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}

/** An applied filter, shown as label: value with a remove button. */
export function FilterChip({ label, value, onRemove, className }: FilterChipProps) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-card ps-2.5 text-sm",
        onRemove ? "pe-1" : "pe-2.5",
        className,
      )}
    >
      <span className="text-muted-foreground">{label}:</span>
      <span dir="auto" className="font-medium">
        {value}
      </span>
      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${label} filter`}
          onClick={onRemove}
          className={cn(
            "inline-flex size-5 items-center justify-center rounded-md",
            "text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  );
}
