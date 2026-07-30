import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "flex w-full min-w-0 bg-transparent text-foreground",
    "border border-input",
    "transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
    "placeholder:text-muted-foreground",
    "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/30",
    // File inputs need their own button treatment.
    "file:me-3 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium",
  ],
  {
    variants: {
      size: {
        sm: "h-9 rounded-md px-3 text-sm",
        default: "h-10 rounded-lg px-3.5 text-sm",
        lg: "h-12 rounded-lg px-4 text-base",
        xl: "h-14 rounded-xl px-4 text-base",
      },
      shape: {
        rounded: "",
        pill: "rounded-full",
      },
    },
    defaultVariants: { size: "default", shape: "rounded" },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, size, shape, type = "text", ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(inputVariants({ size, shape }), className)}
        {...props}
      />
    );
  },
);

export { inputVariants };
