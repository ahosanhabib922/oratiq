"use client";

import * as React from "react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(function CollapsibleContent({ className, children, ...props }, ref) {
  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden",
        "data-[state=open]:animate-[collapsible-down_250ms_var(--ease-out-quart)]",
        "data-[state=closed]:animate-[collapsible-up_200ms_ease-in]",
      )}
      {...props}
    >
      <div className={className}>{children}</div>
    </CollapsiblePrimitive.Content>
  );
});
