"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(function SheetOverlay({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]",
        "data-[state=open]:animate-[fade-in_250ms_ease-out]",
        "data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        className,
      )}
      {...props}
    />
  );
});

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  /**
   * `start` and `end` are logical — a sheet anchored to `end` opens from the
   * right in LTR and from the left in RTL, which is what "trailing edge"
   * means in each direction.
   */
  side?: "start" | "end" | "top" | "bottom";
  hideClose?: boolean;
}

const sides = {
  start: [
    "inset-y-0 start-0 h-full w-3/4 max-w-sm border-e",
    "data-[state=open]:animate-[slide-in-from-inline-start_300ms_var(--ease-out-quart)]",
    "data-[state=closed]:animate-[slide-out-to-inline-start_200ms_ease-in]",
  ],
  end: [
    "inset-y-0 end-0 h-full w-3/4 max-w-sm border-s",
    "data-[state=open]:animate-[slide-in-from-inline-end_300ms_var(--ease-out-quart)]",
    "data-[state=closed]:animate-[slide-out-to-inline-end_200ms_ease-in]",
  ],
  top: [
    "inset-x-0 top-0 border-b",
    "data-[state=open]:animate-[slide-in-from-top_300ms_var(--ease-out-quart)]",
    "data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in]",
  ],
  bottom: [
    "inset-x-0 bottom-0 border-t",
    "data-[state=open]:animate-[slide-in-from-bottom_300ms_var(--ease-out-quart)]",
    "data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in]",
  ],
};

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(function SheetContent(
  { className, children, side = "end", hideClose, ...props },
  ref,
) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col gap-4 border-border bg-popover p-6 shadow-2xl",
          sides[side],
          className,
        )}
        {...props}
      >
        {children}
        {!hideClose && (
          <SheetPrimitive.Close
            className={cn(
              "absolute end-4 top-4 inline-flex size-8 items-center justify-center rounded-md",
              "text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 pe-8", className)} {...props} />;
}

export function SheetBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("-mx-6 min-h-0 flex-1 overflow-y-auto px-6", className)} {...props} />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-auto flex flex-col gap-2", className)} {...props} />
  );
}

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(function SheetTitle({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  );
});

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(function SheetDescription({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
