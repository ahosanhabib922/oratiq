import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "default" | "lg";
}

const sizes = {
  sm: "h-9 rounded-md ps-3 pe-9 text-sm",
  default: "h-10 rounded-lg ps-3.5 pe-10 text-sm",
  lg: "h-12 rounded-lg ps-4 pe-10 text-base",
};

/**
 * The platform select. Prefer this over a custom Select on mobile and for
 * long option lists — it gets the OS picker, virtual keyboard handling, and
 * accessibility for free.
 */
export const NativeSelect = React.forwardRef<
  HTMLSelectElement,
  NativeSelectProps
>(function NativeSelect({ className, size = "default", children, ...props }, ref) {
  return (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "w-full appearance-none border border-input bg-transparent text-foreground",
          "transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
          "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
});
