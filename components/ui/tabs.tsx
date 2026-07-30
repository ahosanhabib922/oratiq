"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

const listVariants = cva("flex items-center", {
  variants: {
    variant: {
      /** Segmented control on a recessed track. */
      solid: "gap-1 rounded-lg bg-muted p-1",
      /** Section navigation with a moving underline. */
      underline: "gap-6 border-b border-border",
      /** Pills with no track. */
      pill: "gap-2",
    },
  },
  defaultVariants: { variant: "solid" },
});

const TabsVariantContext = React.createContext<
  VariantProps<typeof listVariants>["variant"]
>("solid");

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof listVariants>
>(function TabsList({ className, variant = "solid", children, ...props }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(listVariants({ variant }), "no-scrollbar overflow-x-auto", className)}
      {...props}
    >
      <TabsVariantContext.Provider value={variant}>
        {children}
      </TabsVariantContext.Provider>
    </TabsPrimitive.List>
  );
});

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(function TabsTrigger({ className, children, ...props }, ref) {
  const variant = React.useContext(TabsVariantContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
        "text-sm font-medium transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        variant === "solid" && [
          "h-8 flex-1 rounded-md px-3 text-muted-foreground",
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",
        ],
        variant === "underline" && [
          "pb-3 text-muted-foreground hover:text-foreground",
          "data-[state=active]:text-foreground",
          // The moving underline is a pseudo-element on the trigger itself —
          // no extra node, and it reads the trigger's own data-state.
          "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5",
          "after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity",
          "data-[state=active]:after:opacity-100",
        ],
        variant === "pill" && [
          "h-9 rounded-full px-4 text-muted-foreground hover:text-foreground",
          "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(function TabsContent({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "mt-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "data-[state=active]:animate-[fade-in_200ms_ease-out]",
        className,
      )}
      {...props}
    />
  );
});
