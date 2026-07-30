"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonGroupVariants = cva("flex isolate", {
  variants: {
    orientation: {
      horizontal: [
        "flex-row",
        // Logical radii: the first child rounds on the start edge, the last on
        // the end edge — so the group flips correctly under RTL with no
        // direction-specific CSS.
        "[&>*]:rounded-none",
        "[&>*:first-child]:rounded-s-lg",
        "[&>*:last-child]:rounded-e-lg",
        // Collapse the shared border between neighbours.
        "[&>*+*]:-ms-px",
      ],
      vertical: [
        "flex-col",
        "[&>*]:rounded-none",
        "[&>*:first-child]:rounded-t-lg",
        "[&>*:last-child]:rounded-b-lg",
        "[&>*+*]:-mt-px",
      ],
    },
    attached: {
      false: "gap-2 [&>*]:rounded-lg [&>*+*]:ms-0 [&>*+*]:mt-0",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /** Accessible name for the group. */
  label?: string;
}

/**
 * Joins related buttons into a single control. Raises the focused/hovered
 * child so its ring and border aren't clipped by its neighbour.
 */
export function ButtonGroup({
  className,
  orientation,
  attached = true,
  label,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        buttonGroupVariants({ orientation, attached }),
        attached && "[&>*:focus-visible]:z-10 [&>*:hover]:z-10",
        className,
      )}
      {...props}
    />
  );
}

/** Non-interactive segment — a label or count inside the group. */
export function ButtonGroupText({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // See InputGroupAddon — the same bidi isolation applies to group labels.
      dir="auto"
      className={cn(
        "inline-flex h-10 items-center border border-input bg-muted px-4 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

/** Thin divider for use inside an attached group. */
export function ButtonGroupSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn("w-px self-stretch bg-border", className)}
      {...props}
    />
  );
}

export { buttonGroupVariants };
