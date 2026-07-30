import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const itemVariants = cva(
  [
    "group/item flex w-full items-center gap-3 text-start",
    "transition-colors duration-150 ease-out-quart",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ],
  {
    variants: {
      variant: {
        default: "rounded-lg",
        outline: "rounded-lg border border-border",
        muted: "rounded-lg bg-muted",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        default: "px-4 py-3 text-sm",
        lg: "px-4 py-4 text-base",
      },
      interactive: {
        true: "cursor-pointer hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean;
}

/** Generic list row: media, content, actions. The base for menus and lists. */
export function Item({
  className,
  variant,
  size,
  interactive,
  asChild,
  ...props
}: ItemProps) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      className={cn(itemVariants({ variant, size, interactive }), className)}
      {...props}
    />
  );
}

export function ItemMedia({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-muted-foreground",
        "[&_svg]:size-5 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export function ItemContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)} {...props} />
  );
}

export function ItemTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("truncate font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function ItemDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export function ItemActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex shrink-0 items-center gap-1 text-muted-foreground", className)}
      {...props}
    />
  );
}

export { itemVariants };
