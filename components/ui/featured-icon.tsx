import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const featuredIconVariants = cva(
  "inline-flex shrink-0 items-center justify-center [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Tinted tile — the default "feature card" look. */
        light: "rounded-lg",
        /** Solid brand tile. */
        solid: "rounded-lg",
        /** Concentric rings — the Untitled-style outline treatment. */
        outline: "rounded-full ring-4",
      },
      tone: {
        primary: "",
        success: "",
        warning: "",
        destructive: "",
        info: "",
        muted: "",
      },
      size: {
        sm: "size-8 [&_svg]:size-4",
        default: "size-10 [&_svg]:size-5",
        lg: "size-12 [&_svg]:size-6",
        xl: "size-14 [&_svg]:size-7",
      },
    },
    compoundVariants: [
      { variant: "light", tone: "primary", class: "bg-primary/15 text-primary" },
      { variant: "light", tone: "success", class: "bg-success/15 text-success" },
      { variant: "light", tone: "warning", class: "bg-warning/15 text-warning" },
      { variant: "light", tone: "destructive", class: "bg-destructive/15 text-destructive" },
      { variant: "light", tone: "info", class: "bg-info/15 text-info" },
      { variant: "light", tone: "muted", class: "bg-muted text-muted-foreground" },
      { variant: "solid", tone: "primary", class: "bg-primary text-primary-foreground" },
      { variant: "solid", tone: "success", class: "bg-success text-success-foreground" },
      { variant: "solid", tone: "warning", class: "bg-warning text-warning-foreground" },
      { variant: "solid", tone: "destructive", class: "bg-destructive text-destructive-foreground" },
      { variant: "solid", tone: "info", class: "bg-info text-info-foreground" },
      { variant: "solid", tone: "muted", class: "bg-secondary text-secondary-foreground" },
      { variant: "outline", tone: "primary", class: "bg-primary/10 text-primary ring-primary/10" },
      { variant: "outline", tone: "success", class: "bg-success/10 text-success ring-success/10" },
      { variant: "outline", tone: "warning", class: "bg-warning/10 text-warning ring-warning/10" },
      { variant: "outline", tone: "destructive", class: "bg-destructive/10 text-destructive ring-destructive/10" },
      { variant: "outline", tone: "info", class: "bg-info/10 text-info ring-info/10" },
      { variant: "outline", tone: "muted", class: "bg-muted text-muted-foreground ring-border/50" },
    ],
    defaultVariants: { variant: "light", tone: "primary", size: "default" },
  },
);

export interface FeaturedIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof featuredIconVariants> {}

/** An icon on a styled tile — feature lists, empty states, step markers. */
export function FeaturedIcon({
  className,
  variant,
  tone,
  size,
  ...props
}: FeaturedIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(featuredIconVariants({ variant, tone, size }), className)}
      {...props}
    />
  );
}

export { featuredIconVariants };
