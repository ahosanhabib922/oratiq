"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface MarkerProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Percent from the inline-start edge (0–100). Flips under RTL. */
  x: number;
  /** Percent from the top (0–100). */
  y: number;
  tone?: "primary" | "destructive" | "info" | "success";
  /** Adds a pulsing halo to draw the eye. */
  pulse?: boolean;
  label: string;
}

const tones = {
  primary: "bg-primary text-primary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  info: "bg-info text-info-foreground",
  success: "bg-success text-success-foreground",
};

/**
 * A point annotation on a surface — image hotspots, map pins, diagram callouts.
 * Positioned with logical inset, so an annotation "20% from the start" lands
 * on the correct side in both directions.
 */
export function Marker({
  x,
  y,
  tone = "primary",
  pulse,
  label,
  className,
  children,
  ...props
}: MarkerProps) {
  return (
    <button
      type="button"
      aria-label={label}
      style={{ insetInlineStart: `${x}%`, top: `${y}%` }}
      className={cn(
        "absolute z-10 flex size-6 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2",
        "items-center justify-center rounded-full text-2xs font-bold ring-2 ring-background",
        "transition-transform hover:scale-110",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        tones[tone],
        className,
      )}
      {...props}
    >
      {pulse && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 animate-ping rounded-full opacity-60",
            tones[tone],
          )}
        />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}

/** Relative container that markers position against. */
export function MarkerSurface({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)} {...props} />;
}

/**
 * Marker that opens a popover on click.
 *
 * `content` is omitted from MarkerProps first — HTMLAttributes already
 * declares a `content` string attribute, and the intersection would otherwise
 * collapse to `string & ReactNode`.
 */
export function MarkerWithPopover({
  content,
  ...markerProps
}: Omit<MarkerProps, "content"> & { content: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Marker {...markerProps} />
      </PopoverTrigger>
      <PopoverContent className="w-56 text-sm">{content}</PopoverContent>
    </Popover>
  );
}
