"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { toggleVariants } from "./toggle";

type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & {
  attached?: boolean;
};

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({});

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & {
      /** Joins the items into one control with shared borders. */
      attached?: boolean;
    }
>(function ToggleGroup(
  { className, variant, size, attached = false, children, ...props },
  ref,
) {
  const context = React.useMemo(
    () => ({ variant, size, attached }),
    [variant, size, attached],
  );

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(
        "flex items-center",
        attached
          ? [
              "isolate",
              "[&>*]:rounded-none",
              "[&>*:first-child]:rounded-s-lg",
              "[&>*:last-child]:rounded-e-lg",
              "[&>*+*]:-ms-px",
              "[&>*:focus-visible]:z-10",
            ]
          : "gap-1",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={context}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(function ToggleGroupItem({ className, variant, size, ...props }, ref) {
  const context = React.useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: variant ?? context.variant,
          size: size ?? context.size,
        }),
        className,
      )}
      {...props}
    />
  );
});
