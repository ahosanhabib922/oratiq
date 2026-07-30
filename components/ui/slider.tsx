"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** Renders the current value above each thumb. */
  showValue?: boolean;
  formatValue?: (value: number) => string;
}

/**
 * Radix handles RTL natively once a DirectionProvider is in the tree — arrow
 * keys and the fill direction both invert. Nothing here needs to branch.
 */
export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(function Slider(
  { className, showValue, formatValue = String, value, defaultValue, ...props },
  ref,
) {
  const thumbs = value ?? defaultValue ?? [0];

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      className={cn(
        "relative flex w-full touch-none items-center select-none",
        "data-[orientation=vertical]:h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        "data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative grow overflow-hidden rounded-full bg-input",
          "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        )}
      >
        <SliderPrimitive.Range
          className={cn(
            "absolute rounded-full bg-primary",
            "data-[orientation=horizontal]:h-full",
            "data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>

      {thumbs.map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className={cn(
            "group relative block size-5 rounded-full border-2 border-primary bg-background shadow-sm",
            "transition-[box-shadow,transform] duration-150 ease-out-quart",
            "hover:scale-110",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:pointer-events-none",
          )}
        >
          {showValue && (
            <span
              className={cn(
                "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2",
                "rounded-md bg-popover px-2 py-1 text-xs tnum text-popover-foreground shadow-md",
                "opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
              )}
            >
              {formatValue(thumbs[i])}
            </span>
          )}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
});
