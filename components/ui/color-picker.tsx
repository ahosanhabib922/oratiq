"use client";

import * as React from "react";
import { Check, Pipette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const DEFAULT_SWATCHES = [
  "#cbfe00", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899",
  "#ef4444", "#f59e0b", "#eab308", "#14b8a6", "#64748b",
  "#171717", "#ffffff",
];

function normalizeHex(raw: string): string | null {
  let hex = raw.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(hex)) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  return /^[0-9a-fA-F]{6}$/.test(hex) ? `#${hex.toLowerCase()}` : null;
}

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (hex: string) => void;
  /** Preset palette. Defaults to a small brand-neutral set. */
  swatches?: string[];
  disabled?: boolean;
  label?: string;
  className?: string;
}

/**
 * Swatch palette + hex field + the native eyedropper-capable picker for
 * anything custom. Hex is pinned LTR — it's a code, not prose.
 */
export function ColorPicker({
  value,
  defaultValue = "#cbfe00",
  onValueChange,
  swatches = DEFAULT_SWATCHES,
  disabled,
  label = "Colour",
  className,
}: ColorPickerProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const [draft, setDraft] = React.useState(current);

  React.useEffect(() => setDraft(current), [current]);

  function commit(next: string) {
    const hex = normalizeHex(next);
    if (!hex) return setDraft(current);
    if (!isControlled) setInternal(hex);
    onValueChange?.(hex);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          aria-label={`${label}: ${current}`}
          className={cn("w-fit justify-start gap-2 font-normal", className)}
        >
          <span
            aria-hidden="true"
            className="size-4 shrink-0 rounded-sm border border-border"
            style={{ backgroundColor: current }}
          />
          <span dir="ltr" className="font-mono text-xs">
            {current}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="grid grid-cols-6 gap-1.5">
          {swatches.map((swatch) => {
            const active = normalizeHex(swatch) === current;
            return (
              <button
                key={swatch}
                type="button"
                aria-label={swatch}
                onClick={() => commit(swatch)}
                className={cn(
                  "flex size-7 items-center justify-center rounded-md border border-border",
                  "transition-transform hover:scale-110",
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-popover",
                )}
                style={{ backgroundColor: swatch }}
              >
                {active && (
                  <Check
                    className="size-3.5 text-white mix-blend-difference"
                    strokeWidth={3}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input
            dir="ltr"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => commit(draft)}
            onKeyDown={(e) => e.key === "Enter" && commit(draft)}
            aria-label="Hex value"
            className={cn(
              "h-8 w-full rounded-md border border-input bg-transparent px-2 font-mono text-xs",
              "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
            )}
          />
          {/* Native picker: OS colour wheel + eyedropper where supported. */}
          <label
            className={cn(
              "relative inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-input",
              "transition-colors hover:bg-accent",
            )}
          >
            <Pipette className="size-3.5" aria-hidden="true" />
            <input
              type="color"
              value={current}
              onChange={(e) => commit(e.target.value)}
              aria-label="Open system colour picker"
              className="absolute inset-0 size-full cursor-pointer opacity-0"
            />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
