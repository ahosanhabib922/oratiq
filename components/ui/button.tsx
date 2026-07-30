import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "font-medium select-none",
    "transition-[color,background-color,border-color,box-shadow,opacity]",
    "duration-150 ease-out-quart",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    // Icons inherit size from the button, never the other way round.
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 active:bg-destructive/80",
        link: "bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 gap-1.5 px-2.5 text-xs [&_svg]:size-3.5",
        sm: "h-9 px-3.5 text-sm [&_svg]:size-4",
        default: "h-10 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-5",
        xl: "h-14 px-8 text-base [&_svg]:size-5",
        "icon-xs": "size-7 [&_svg]:size-3.5",
        "icon-sm": "size-9 [&_svg]:size-4",
        icon: "size-10 [&_svg]:size-4",
        "icon-lg": "size-12 [&_svg]:size-5",
        "icon-xl": "size-14 [&_svg]:size-5",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
        square: "rounded-none",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element, merging props onto it. */
  asChild?: boolean;
  /** Swaps the leading icon for a spinner and blocks interaction. */
  loading?: boolean;
  /** Shown beside the spinner while `loading`. Falls back to the label. */
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant,
      size,
      shape,
      fullWidth,
      asChild = false,
      loading = false,
      loadingText,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    const Comp = asChild ? Slot.Root : "button";

    // `asChild` hands rendering to the consumer's element, so we can't inject
    // a spinner without clobbering their tree. Pass through untouched.
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(
            buttonVariants({ variant, size, shape, fullWidth }),
            className,
          )}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    const spinnerSize =
      size === "xs" || size === "icon-xs"
        ? "xs"
        : size === "lg" || size === "xl" || size === "icon-lg" || size === "icon-xl"
          ? "default"
          : "sm";

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ variant, size, shape, fullWidth }),
          className,
        )}
        {...props}
      >
        {loading && <Spinner size={spinnerSize} label={null} />}
        {loading && loadingText ? loadingText : children}
      </button>
    );
  },
);

export { buttonVariants };
