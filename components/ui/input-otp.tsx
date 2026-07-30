"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputOTPProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  /** Renders a gap after every N slots — e.g. 3 for `123 456`. */
  groupSize?: number;
  /** Masks entered characters. */
  mask?: boolean;
  autoFocus?: boolean;
  label?: string;
  className?: string;
}

/**
 * One-time code entry.
 *
 * The container is pinned to `dir="ltr"`: a code is a sequence, not prose, so
 * slot 1 must stay leftmost even in an RTL layout. Paste fills every slot,
 * and Backspace on an empty slot steps backwards.
 */
export function InputOTP({
  length = 6,
  value,
  defaultValue = "",
  onChange,
  onComplete,
  disabled,
  groupSize,
  mask,
  autoFocus,
  label = "One-time code",
  className,
}: InputOTPProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const code = (isControlled ? value : internal) ?? "";
  const refs = React.useRef<(HTMLInputElement | null)[]>([]);

  React.useEffect(() => {
    if (autoFocus) refs.current[0]?.focus();
  }, [autoFocus]);

  const commit = React.useCallback(
    (next: string) => {
      const trimmed = next.slice(0, length);
      if (!isControlled) setInternal(trimmed);
      onChange?.(trimmed);
      if (trimmed.length === length) onComplete?.(trimmed);
    },
    [isControlled, length, onChange, onComplete],
  );

  function handleChange(index: number, raw: string) {
    const digits = raw.replace(/\D/g, "");
    if (!digits) return;

    const chars = code.split("");
    // Typing into a slot with more than one character means a paste.
    if (digits.length > 1) {
      commit((code.slice(0, index) + digits).slice(0, length));
      const next = Math.min(index + digits.length, length - 1);
      refs.current[next]?.focus();
      return;
    }

    chars[index] = digits;
    commit(chars.join(""));
    if (index < length - 1) refs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      e.preventDefault();
      const chars = code.split("");
      if (chars[index]) {
        chars[index] = "";
        commit(chars.join("").trimEnd());
      } else if (index > 0) {
        chars[index - 1] = "";
        commit(chars.join("").trimEnd());
        refs.current[index - 1]?.focus();
      }
    }
    // Arrow keys move between slots, not within a slot's text.
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      refs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      refs.current[index + 1]?.focus();
    }
  }

  return (
    <div
      dir="ltr"
      role="group"
      aria-label={label}
      className={cn("flex items-center gap-1.5 sm:gap-2", className)}
    >
      {Array.from({ length }).map((_, i) => (
        <React.Fragment key={i}>
          {groupSize && i > 0 && i % groupSize === 0 && (
            <span aria-hidden="true" className="w-2 text-muted-foreground">
              –
            </span>
          )}
          <input
            ref={(el) => {
              refs.current[i] = el;
            }}
            type={mask ? "password" : "text"}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={length}
            disabled={disabled}
            aria-label={`Digit ${i + 1} of ${length}`}
            value={code[i] ?? ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            className={cn(
              "size-10 rounded-lg border border-input bg-transparent text-center sm:size-12",
              "text-base font-medium tnum text-foreground sm:text-lg",
              "transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
              "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
