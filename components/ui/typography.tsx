import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ── Heading ────────────────────────────────────────────────────────────── */

const headingVariants = cva("text-balance text-foreground", {
  variants: {
    level: {
      1: "text-5xl font-semibold tracking-tight",
      2: "text-4xl font-semibold tracking-tight",
      3: "text-3xl font-medium tracking-tight",
      4: "text-2xl font-medium",
      5: "text-xl font-medium",
      6: "text-lg font-medium",
    },
  },
  defaultVariants: { level: 2 },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** Render as a different element while keeping the visual level. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  asChild?: boolean;
}

export function Heading({
  className,
  level = 2,
  as,
  asChild,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot.Root : ((as ?? `h${level}`) as "h2");
  return (
    <Comp className={cn(headingVariants({ level }), className)} {...props} />
  );
}

/* ── Text ───────────────────────────────────────────────────────────────── */

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
    },
    /** Clamps to N lines. */
    truncate: {
      true: "truncate",
    },
  },
  defaultVariants: { size: "default", weight: "normal", tone: "default" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
  asChild?: boolean;
}

export function Text({
  className,
  size,
  weight,
  tone,
  truncate,
  as = "p",
  asChild,
  ...props
}: TextProps) {
  // `as` spans elements with incompatible event-handler types (p vs. label),
  // so the union is widened here rather than at every call site.
  const Comp = (asChild ? Slot.Root : as) as React.ElementType;
  return (
    <Comp
      className={cn(textVariants({ size, weight, tone, truncate }), className)}
      {...props}
    />
  );
}

/* ── Inline & block ─────────────────────────────────────────────────────── */

export function Code({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      dir="ltr"
      className={cn(
        "relative rounded-sm bg-muted px-[0.4em] py-[0.2em] font-mono text-[0.875em] text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Blockquote({
  className,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "border-s-2 border-border ps-4 text-muted-foreground italic",
        className,
      )}
      {...props}
    />
  );
}

export function List({
  className,
  ordered,
  ...props
}: React.HTMLAttributes<HTMLUListElement> & { ordered?: boolean }) {
  const Comp = ordered ? "ol" : "ul";
  return (
    <Comp
      className={cn(
        "ms-5 flex flex-col gap-2 text-foreground",
        ordered ? "list-decimal" : "list-disc",
        "marker:text-muted-foreground",
        className,
      )}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    />
  );
}

/** Inline link with the system's underline and focus treatment. */
export function TextLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "font-medium text-primary underline decoration-primary/40 underline-offset-4",
        "transition-colors hover:decoration-primary",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xs",
        className,
      )}
      {...props}
    />
  );
}

export { headingVariants, textVariants };
