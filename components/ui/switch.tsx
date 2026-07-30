"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: "sm" | "default" | "lg";
}

const track = {
  sm: "h-5 w-9",
  default: "h-6 w-11",
  lg: "h-7 w-[52px]",
};

const thumb = {
  // Travel = track width − 2×border − 2×padding − thumb width.
  // sm: 36 − 4 − 4 − 16 = 12px; default: 44 − 4 − 4 − 20 = 16px;
  // lg: 52 − 4 − 4 − 24 = 20px. Under `dir="rtl"` the same distance is
  // negated so the thumb travels toward the correct edge.
  sm: "size-4 data-[state=checked]:translate-x-3 rtl:data-[state=checked]:-translate-x-3",
  default:
    "size-5 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4",
  lg: "size-6 data-[state=checked]:translate-x-5 rtl:data-[state=checked]:-translate-x-5",
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(function Switch({ className, size = "default", ...props }, ref) {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        "peer inline-flex shrink-0 items-center rounded-full border-2 border-transparent p-0.5",
        "transition-colors duration-200 ease-out-quart",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        track[size],
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-background shadow-sm ring-0",
          "transition-transform duration-200 ease-out-quart",
          "data-[state=unchecked]:translate-x-0",
          thumb[size],
        )}
      />
    </SwitchPrimitive.Root>
  );
});
