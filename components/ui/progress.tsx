"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  size?: "sm" | "default" | "lg";
  tone?: "primary" | "success" | "warning" | "destructive";
  /** Omit `value` for an indeterminate bar. */
  value?: number | null;
}

const sizes = { sm: "h-1", default: "h-2", lg: "h-3" };
const tones = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
};

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(function Progress(
  { className, value, size = "default", tone = "primary", ...props },
  ref,
) {
  const indeterminate = value === null || value === undefined;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={indeterminate ? null : value}
      className={cn(
        "relative w-full overflow-hidden rounded-full bg-input",
        sizes[size],
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "size-full rounded-full transition-transform duration-500 ease-out-quart",
          tones[tone],
          indeterminate && "animate-[indeterminate_1.4s_ease-in-out_infinite]",
        )}
        style={
          indeterminate
            ? undefined
            : // Translating by a negative percentage fills from the start edge,
              // which mirrors automatically under RTL.
              { transform: `translateX(-${100 - (value ?? 0)}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
});

export interface ProgressCircleProps {
  /** 0–100. Omit for indeterminate. */
  value?: number | null;
  size?: number;
  thickness?: number;
  tone?: "primary" | "success" | "warning" | "destructive";
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

const strokeTones = {
  primary: "stroke-primary",
  success: "stroke-success",
  warning: "stroke-warning",
  destructive: "stroke-destructive",
};

/** Circular determinate progress, with an optional centred label. */
export function ProgressCircle({
  value,
  size = 96,
  thickness = 8,
  tone = "primary",
  className,
  children,
  label,
}: ProgressCircleProps) {
  const indeterminate = value === null || value === undefined;
  const clamped = Math.min(100, Math.max(0, value ?? 0));
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        className={cn(
          "-rotate-90 rtl:-scale-x-100",
          indeterminate && "animate-spin",
        )}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          className="stroke-input"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            indeterminate
              ? circumference * 0.75
              : circumference - (clamped / 100) * circumference
          }
          className={cn(
            strokeTones[tone],
            "transition-[stroke-dashoffset] duration-500 ease-out-quart",
          )}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {children}
        </div>
      )}
    </div>
  );
}
