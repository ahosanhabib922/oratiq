"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingProps {
  /** 0..max. Controlled. */
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  /** Display-only — no interaction, no radio semantics. */
  readOnly?: boolean;
  disabled?: boolean;
  size?: "sm" | "default" | "lg";
  label?: string;
  className?: string;
}

const sizes = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
};

/**
 * Star rating — as input (a radiogroup of stars) or display.
 *
 * Keyboard follows the writing direction: the arrow that points toward the
 * visual "more stars" side increases, in both LTR and RTL.
 */
export function Rating({
  value,
  defaultValue = 0,
  onValueChange,
  max = 5,
  readOnly = false,
  disabled = false,
  size = "default",
  label = "Rating",
  className,
}: RatingProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [hovered, setHovered] = React.useState(0);
  const groupRef = React.useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const shown = hovered || current;

  function commit(next: number) {
    const clamped = Math.min(max, Math.max(0, next));
    if (!isControlled) setInternal(clamped);
    onValueChange?.(clamped);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (readOnly || disabled) return;
    const rtl =
      groupRef.current &&
      getComputedStyle(groupRef.current).direction === "rtl";
    const increase = rtl ? "ArrowLeft" : "ArrowRight";
    const decrease = rtl ? "ArrowRight" : "ArrowLeft";

    if (e.key === increase || e.key === "ArrowUp") {
      e.preventDefault();
      commit(current + 1);
    } else if (e.key === decrease || e.key === "ArrowDown") {
      e.preventDefault();
      commit(current - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      commit(1);
    } else if (e.key === "End") {
      e.preventDefault();
      commit(max);
    }
  }

  if (readOnly) {
    return (
      <div
        className={cn("flex items-center gap-0.5", className)}
        role="img"
        aria-label={`${label}: ${current} of ${max}`}
      >
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={cn(
              sizes[size],
              i < current
                ? "fill-warning text-warning"
                : "fill-transparent text-border",
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label={label}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setHovered(0)}
      className={cn(
        "flex items-center gap-0.5",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;
        const active = starValue <= shown;
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={current === starValue}
            aria-label={`${starValue} of ${max}`}
            disabled={disabled}
            // One tab stop for the group; arrows move within it.
            tabIndex={current === starValue || (current === 0 && i === 0) ? 0 : -1}
            onClick={() => commit(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            className={cn(
              "rounded-xs transition-transform duration-100 hover:scale-110",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            <Star
              aria-hidden="true"
              className={cn(
                sizes[size],
                "transition-colors duration-100",
                active
                  ? "fill-warning text-warning"
                  : "fill-transparent text-border",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
