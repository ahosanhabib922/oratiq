"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "@/lib/utils";

export interface ResizablePanelGroupProps
  extends React.ComponentProps<typeof Group> {}

/**
 * Split panes.
 *
 * The underlying library (v4) lays panels out with flexbox, so their visual
 * order already follows the inherited `direction` — a group under `dir="rtl"`
 * renders the first panel on the right, and the drag math follows the same
 * flex axis. Nothing has to be passed through.
 */
export function ResizablePanelGroup({
  className,
  orientation = "horizontal",
  ...props
}: ResizablePanelGroupProps) {
  return (
    <Group
      orientation={orientation}
      className={cn("flex size-full", className)}
      {...props}
    />
  );
}

export const ResizablePanel = Panel;

export interface ResizableHandleProps
  extends React.ComponentProps<typeof Separator> {
  /** Renders a visible grip, which makes the target easier to find and hit. */
  withHandle?: boolean;
}

export function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <Separator
      className={cn(
        "relative flex items-center justify-center bg-border",
        // A 1px line is far below the 24px minimum target size, so the
        // interactive area is widened with a pseudo-element while the visible
        // line stays hairline.
        "data-[orientation=horizontal]:w-px data-[orientation=horizontal]:cursor-col-resize",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:cursor-row-resize",
        "after:absolute after:z-10",
        "data-[orientation=horizontal]:after:inset-y-0 data-[orientation=horizontal]:after:w-3",
        "data-[orientation=vertical]:after:inset-x-0 data-[orientation=vertical]:after:h-3",
        "transition-colors hover:bg-ring data-[state=dragging]:bg-ring",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-20 flex h-5 w-3 items-center justify-center rounded-xs border border-border bg-card">
          <GripVertical className="size-2.5 text-muted-foreground" />
        </div>
      )}
    </Separator>
  );
}
