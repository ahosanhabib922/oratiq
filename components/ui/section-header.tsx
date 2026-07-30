import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** End-edge slot for buttons or filters. */
  actions?: React.ReactNode;
  size?: "sm" | "default";
  /** Draw a divider underneath. */
  divider?: boolean;
}

/** Heading row for a section within a page. */
export function SectionHeader({
  title,
  description,
  actions,
  size = "default",
  divider = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-start justify-between gap-3",
        divider && "border-b border-border pb-4",
        className,
      )}
      {...props}
    >
      <div className="min-w-0">
        <h2
          className={cn(
            "font-medium tracking-tight",
            size === "sm" ? "text-base" : "text-lg",
          )}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  );
}
