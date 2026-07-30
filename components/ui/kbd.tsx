import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "default";
}

/**
 * A keyboard key. Pinned to `dir="ltr"` — shortcut notation is a technical
 * sequence and doesn't reorder with the surrounding language.
 */
export function Kbd({ className, size = "default", ...props }: KbdProps) {
  return (
    <kbd
      dir="ltr"
      className={cn(
        "inline-flex items-center justify-center rounded-sm border border-border bg-muted",
        "font-sans font-medium text-muted-foreground shadow-xs select-none",
        size === "sm"
          ? "h-4 min-w-4 px-1 text-2xs"
          : "h-5 min-w-5 px-1.5 text-xs",
        className,
      )}
      {...props}
    />
  );
}

/** Renders a chord: ⌘ + K. */
export function KbdGroup({
  keys,
  className,
  separator = "+",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  keys: string[];
  separator?: React.ReactNode;
}) {
  return (
    <span
      dir="ltr"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    >
      {keys.map((key, i) => (
        <React.Fragment key={key}>
          {i > 0 && (
            <span aria-hidden="true" className="text-2xs text-muted-foreground">
              {separator}
            </span>
          )}
          <Kbd>{key}</Kbd>
        </React.Fragment>
      ))}
    </span>
  );
}
