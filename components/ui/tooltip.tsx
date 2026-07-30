"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipProvider = TooltipPrimitive.Provider;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    showArrow?: boolean;
  }
>(function TooltipContent(
  { className, sideOffset = 6, showArrow = true, children, ...props },
  ref,
) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-w-xs rounded-md bg-foreground px-2.5 py-1.5 text-xs text-background shadow-md",
          "origin-(--radix-tooltip-content-transform-origin)",
          "data-[state=delayed-open]:animate-[zoom-in_120ms_ease-out]",
          "data-[state=closed]:animate-[zoom-out_80ms_ease-in]",
          className,
        )}
        {...props}
      >
        {children}
        {showArrow && <TooltipPrimitive.Arrow className="fill-foreground" />}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

/**
 * Convenience wrapper for the common case.
 *
 * A tooltip may only ever *supplement* an accessible name — never supply it.
 * Touch devices have no hover, and a tooltip is not reachable by keyboard on
 * a non-focusable element, so anything it alone says is lost for those users.
 */
export function SimpleTooltip({
  content,
  children,
  side,
  ...props
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
} & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>{content}</TooltipContent>
    </Tooltip>
  );
}
