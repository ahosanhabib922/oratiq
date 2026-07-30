"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

/**
 * Radix resolves `align="start"` against the writing direction, so a popover
 * aligned to the start edge lands correctly in both LTR and RTL without any
 * per-direction handling here.
 */
export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
  }
>(function PopoverContent(
  { className, align = "center", sideOffset = 8, showArrow, children, ...props },
  ref,
) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg",
          "origin-(--radix-popover-content-transform-origin)",
          "data-[state=open]:animate-[zoom-in_150ms_ease-out]",
          "data-[state=closed]:animate-[zoom-out_100ms_ease-in]",
          className,
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <PopoverPrimitive.Arrow className="fill-popover stroke-border" width={12} height={6} />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
