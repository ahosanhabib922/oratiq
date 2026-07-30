import * as React from "react";
import { cn } from "@/lib/utils";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Collapses the avatar and header for consecutive messages from one author. */
  continued?: boolean;
}

/**
 * A message with author, timestamp, and body — the threaded-conversation
 * shape, as opposed to Bubble's chat shape.
 */
export function Message({ className, continued, ...props }: MessageProps) {
  return (
    <div
      className={cn(
        "group/message flex gap-3 px-4 py-2",
        "transition-colors hover:bg-muted/40",
        continued ? "mt-0" : "mt-4 first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

export function MessageAvatar({
  className,
  hidden,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hidden?: boolean }) {
  return (
    <div className={cn("w-8 shrink-0", className)} {...props}>
      {!hidden && props.children}
    </div>
  );
}

export function MessageContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("min-w-0 flex-1", className)} {...props} />;
}

export function MessageHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-0.5 flex items-baseline gap-2", className)} {...props} />
  );
}

export function MessageAuthor({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span dir="auto" className={cn("text-sm font-medium", className)} {...props} />
  );
}

export function MessageTimestamp({
  className,
  ...props
}: React.HTMLAttributes<HTMLTimeElement>) {
  return (
    <time className={cn("text-2xs tnum text-muted-foreground", className)} {...props} />
  );
}

export function MessageBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      dir="auto"
      className={cn("text-sm leading-relaxed break-words text-foreground", className)}
      {...props}
    />
  );
}

/** Hover toolbar, revealed on the message's end edge. */
export function MessageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute end-4 -top-3 flex items-center gap-0.5 rounded-md border border-border bg-popover p-0.5 shadow-sm",
        "opacity-0 transition-opacity group-hover/message:opacity-100 focus-within:opacity-100",
        className,
      )}
      {...props}
    />
  );
}
