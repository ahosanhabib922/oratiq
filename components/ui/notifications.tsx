"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Inbox-style notification list. */
export function NotificationList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("flex flex-col divide-y divide-border", className)}
      {...props}
    />
  );
}

export interface NotificationItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "title"> {
  unread?: boolean;
  media?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: React.ReactNode;
  /** End-edge slot — accept/dismiss buttons and the like. */
  actions?: React.ReactNode;
  onSelect?: () => void;
}

export function NotificationItem({
  unread = false,
  media,
  title,
  description,
  time,
  actions,
  onSelect,
  className,
  ...props
}: NotificationItemProps) {
  return (
    <li
      onClick={onSelect}
      className={cn(
        "relative flex gap-3 px-4 py-3",
        onSelect && "cursor-pointer transition-colors hover:bg-accent/50",
        className,
      )}
      {...props}
    >
      {/* Unread markers sit on the reading edge. */}
      {unread && (
        <span
          aria-hidden="true"
          className="absolute start-1.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary"
        />
      )}
      {media && <span className="shrink-0 pt-0.5">{media}</span>}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex items-baseline justify-between gap-3">
          <p
            dir="auto"
            className={cn(
              "truncate text-sm",
              unread ? "font-semibold text-foreground" : "font-medium text-foreground",
            )}
          >
            {title}
            {unread && <span className="sr-only"> (unread)</span>}
          </p>
          {time && (
            <span className="shrink-0 text-xs tnum text-muted-foreground">
              {time}
            </span>
          )}
        </div>
        {description && (
          <p dir="auto" className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}
        {actions && <div className="mt-2 flex items-center gap-2">{actions}</div>}
      </div>
    </li>
  );
}
