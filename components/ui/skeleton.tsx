import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `shimmer` sweeps a highlight; `pulse` fades. Shimmer reads faster. */
  animation?: "shimmer" | "pulse" | "none";
}

/**
 * Loading placeholder. Always `aria-hidden` — the loading state itself should
 * be announced once by the region's own `aria-busy`, not by every bone.
 */
export function Skeleton({
  className,
  animation = "shimmer",
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-md bg-muted",
        animation === "pulse" && "animate-pulse",
        animation === "shimmer" && [
          "relative overflow-hidden",
          "after:absolute after:inset-0 after:-translate-x-full",
          "after:bg-linear-to-r after:from-transparent after:via-foreground/10 after:to-transparent",
          "after:animate-[shimmer_1.6s_infinite]",
          "rtl:after:translate-x-full rtl:after:bg-linear-to-l",
        ],
        className,
      )}
      {...props}
    />
  );
}

/** Convenience: N lines of text, last one short. */
export function SkeletonText({
  lines = 3,
  className,
  ...props
}: SkeletonProps & { lines?: number }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 && "w-3/5")}
        />
      ))}
    </div>
  );
}
