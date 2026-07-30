import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

/**
 * Empty state. Composed as Empty > EmptyMedia + EmptyTitle + EmptyDescription
 * + EmptyActions, so the same shell covers "no results", "nothing yet", and
 * error states.
 */
export function Empty({ className, size = "default", ...props }: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        size === "sm" && "gap-2 p-6",
        size === "default" && "gap-3 p-10",
        size === "lg" && "gap-4 p-16",
        className,
      )}
      {...props}
    />
  );
}

export function EmptyMedia({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "mb-1 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground",
        "[&_svg]:size-6",
        className,
      )}
      {...props}
    />
  );
}

export function EmptyTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-base font-medium text-foreground", className)} {...props} />
  );
}

export function EmptyDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("max-w-sm text-sm text-balance text-muted-foreground", className)}
      {...props}
    />
  );
}

export function EmptyActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-2 flex items-center gap-2", className)} {...props} />
  );
}
