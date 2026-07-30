import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The strip at the top of a page: back/breadcrumb slot, title + meta,
 * actions on the end edge, optional tab row underneath.
 */
export function PageHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn("flex flex-col gap-4 border-b border-border pb-5", className)}
      {...props}
    />
  );
}

export function PageHeaderTop({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-wrap items-start justify-between gap-3", className)}
      {...props}
    />
  );
}

export function PageHeaderContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex min-w-0 flex-col gap-1", className)} {...props} />;
}

export function PageHeaderTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("truncate text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

/** Sits on the end edge — flips under RTL. */
export function PageHeaderActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex shrink-0 items-center gap-2", className)} {...props} />
  );
}
