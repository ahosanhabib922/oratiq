"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  /** Collapse selections beyond this into a "+N" chip. */
  maxShown?: number;
  disabled?: boolean;
  label?: string;
  className?: string;
}

/**
 * Select many options from a searchable list; selections render as
 * dismissible chips in the trigger.
 */
export function MultiSelect({
  options,
  value,
  defaultValue = [],
  onValueChange,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyMessage = "No results found.",
  maxShown = 3,
  disabled,
  label,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;

  function commit(next: string[]) {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  }

  function toggle(optionValue: string) {
    commit(
      selected.includes(optionValue)
        ? selected.filter((v) => v !== optionValue)
        : [...selected, optionValue],
    );
  }

  const shown = selected.slice(0, maxShown);
  const overflow = selected.length - shown.length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={label}
          disabled={disabled}
          className={cn(
            "h-auto min-h-10 w-full justify-between py-1.5 font-normal",
            className,
          )}
        >
          <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
            {selected.length === 0 && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            {shown.map((v) => {
              const option = options.find((o) => o.value === v);
              return (
                <span
                  key={v}
                  className="inline-flex items-center gap-1 rounded-md bg-secondary py-0.5 ps-2 pe-1 text-xs font-medium text-secondary-foreground"
                >
                  {option?.label ?? v}
                  {/* A span, not a nested button — buttons can't nest. */}
                  <span
                    role="button"
                    tabIndex={-1}
                    aria-label={`Remove ${option?.label ?? v}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(v);
                    }}
                    className="inline-flex size-4 items-center justify-center rounded-sm transition-colors hover:bg-foreground/10"
                  >
                    <X className="size-3" />
                  </span>
                </span>
              );
            })}
            {overflow > 0 && (
              <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground tnum">
                +{overflow}
              </span>
            )}
          </span>
          <ChevronsUpDown className="ms-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const active = selected.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    disabled={option.disabled}
                    // Keep the popover open — multi-select means several picks.
                    onSelect={() => toggle(option.value)}
                  >
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-[4px] border",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input",
                      )}
                    >
                      {active && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
