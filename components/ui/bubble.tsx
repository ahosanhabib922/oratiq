import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bubbleVariants = cva(
  "relative max-w-[75%] px-3.5 py-2.5 text-sm break-words",
  {
    variants: {
      /**
       * `outgoing` hugs the end edge, `incoming` the start edge — both
       * logical, so a conversation mirrors correctly under RTL without
       * swapping which side "mine" is on.
       */
      side: {
        incoming: "me-auto bg-muted text-foreground rounded-2xl rounded-es-sm",
        outgoing:
          "ms-auto bg-primary text-primary-foreground rounded-2xl rounded-ee-sm",
      },
      state: {
        default: "",
        pending: "opacity-60",
        failed: "ring-1 ring-destructive",
      },
    },
    defaultVariants: { side: "incoming", state: "default" },
  },
);

export interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {}

export function Bubble({ className, side, state, ...props }: BubbleProps) {
  return (
    // Message bodies are user content in an unknown language — `auto` lets
    // each bubble resolve its own direction from its first strong character.
    <div dir="auto" className={cn(bubbleVariants({ side, state }), className)} {...props} />
  );
}

/** Groups consecutive bubbles from one author, tightening the gaps. */
export function BubbleGroup({
  className,
  side = "incoming",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  side?: "incoming" | "outgoing";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        side === "outgoing" ? "items-end" : "items-start",
        className,
      )}
      {...props}
    />
  );
}

export function BubbleTimestamp({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("px-1 text-2xs tnum text-muted-foreground", className)}
      {...props}
    />
  );
}
