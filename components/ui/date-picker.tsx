"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  /** date-fns format string. */
  displayFormat?: string;
  className?: string;
  label?: string;
}

export function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a date",
  disabled,
  displayFormat = "PPP",
  className,
  label,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;

  function select(date: Date | undefined) {
    if (!isControlled) setInternal(date);
    onValueChange?.(date);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          aria-label={label}
          className={cn(
            "w-full justify-start gap-2 font-normal",
            !selected && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon />
          {selected ? format(selected, displayFormat) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={selected} onSelect={select} autoFocus />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  value?: DateRange;
  onValueChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export function DateRangePicker({
  value,
  onValueChange,
  placeholder = "Pick a date range",
  className,
  label,
}: DateRangePickerProps) {
  const [internal, setInternal] = React.useState<DateRange | undefined>();
  const isControlled = value !== undefined;
  const range = isControlled ? value : internal;

  function select(next: DateRange | undefined) {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-label={label}
          className={cn(
            "w-full justify-start gap-2 font-normal",
            !range?.from && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon />
          {range?.from ? (
            range.to ? (
              // Wrapped so the date range doesn't get reordered by the bidi
              // algorithm in an RTL layout.
              <bdi dir="auto">
                {format(range.from, "LLL d, y")} – {format(range.to, "LLL d, y")}
              </bdi>
            ) : (
              <bdi dir="auto">{format(range.from, "LLL d, y")}</bdi>
            )
          ) : (
            placeholder
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={select}
          numberOfMonths={2}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
