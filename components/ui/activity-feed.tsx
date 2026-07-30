import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Timeline of events. The connecting line runs down the marker column using
 * a logical inset, so the feed mirrors correctly under RTL.
 */
export function ActivityFeed({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("flex flex-col", className)} {...props} />;
}

export interface ActivityItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Marker column content — an icon tile or an Avatar. */
  media?: React.ReactNode;
  /** Hide the connector after the final item. */
  last?: boolean;
}

export function ActivityItem({
  media,
  last = false,
  className,
  children,
  ...props
}: ActivityItemProps) {
  return (
    <li className={cn("relative flex gap-3 pb-6", last && "pb-0", className)} {...props}>
      <div className="relative flex flex-col items-center">
        <span className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground [&_svg]:size-4">
          {media}
        </span>
        {!last && (
          <span
            aria-hidden="true"
            className="absolute top-8 bottom-[-8px] w-px bg-border"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-1.5">{children}</div>
    </li>
  );
}

export function ActivityTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p dir="auto" className={cn("text-sm text-foreground", className)} {...props} />
  );
}

export function ActivityDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p dir="auto" className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function ActivityTime({
  className,
  ...props
}: React.HTMLAttributes<HTMLTimeElement>) {
  return (
    <time className={cn("text-xs tnum text-muted-foreground", className)} {...props} />
  );
}
