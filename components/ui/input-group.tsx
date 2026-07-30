"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps an Input with inline affixes (icons, text, buttons).
 *
 * The group owns the border and the focus ring; the inner input is stripped
 * of both. That keeps the ring wrapped around the whole control rather than
 * around one segment of it.
 */
export function InputGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "flex w-full items-center gap-2 rounded-lg border border-input bg-transparent px-3",
        "transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
        "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:focus-within:ring-destructive/30",
        "has-[:disabled]:opacity-50",
        // Neutralise the nested input's own chrome.
        "[&_[data-slot=input]]:h-auto [&_[data-slot=input]]:flex-1 [&_[data-slot=input]]:border-0",
        "[&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:px-0",
        "[&_[data-slot=input]]:py-2.5 [&_[data-slot=input]]:shadow-none",
        "[&_[data-slot=input]]:outline-none [&_[data-slot=input]]:focus-visible:ring-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** `inline` sits inside the border; `attached` is a bordered segment. */
  variant?: "inline" | "attached";
  align?: "start" | "end";
}

export function InputGroupAddon({
  className,
  variant = "inline",
  align = "start",
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      // Affixes are usually technical fragments — "https://", "@oratiq.com",
      // "USD". Under RTL the bidi algorithm reorders their leading neutral
      // characters ("https://" renders as "//:https"). `auto` resolves
      // direction from the first strong character, so Latin affixes stay LTR
      // while a translated affix still follows the page.
      dir="auto"
      className={cn(
        "flex shrink-0 items-center gap-2 text-sm text-muted-foreground",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        variant === "attached" && [
          "-my-px self-stretch bg-muted px-3",
          align === "start"
            ? "-ms-3 rounded-s-lg border-e border-input"
            : "-me-3 rounded-e-lg border-s border-input",
        ],
        className,
      )}
      {...props}
    />
  );
}

/** A button that sits flush inside the group — e.g. a password reveal toggle. */
export function InputGroupButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "-me-1 inline-flex size-8 shrink-0 items-center justify-center rounded-md",
        "text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}
