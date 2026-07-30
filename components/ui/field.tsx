"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

interface FieldContextValue {
  id: string;
  descriptionId: string;
  errorId: string;
  hasError: boolean;
  hasDescription: boolean;
  disabled: boolean;
}

const FieldContext = React.createContext<FieldContextValue | null>(null);

/**
 * Returns the ids and aria wiring for the control inside a <Field>.
 * Spread the result onto the input: `<Input {...useFieldControl()} />`.
 */
export function useFieldControl() {
  const context = React.useContext(FieldContext);
  if (!context) return {};

  const describedBy =
    [
      context.hasDescription ? context.descriptionId : null,
      context.hasError ? context.errorId : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  return {
    id: context.id,
    "aria-describedby": describedBy,
    "aria-invalid": context.hasError || undefined,
    disabled: context.disabled || undefined,
  } as const;
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Presence of a message switches the field into its error state. */
  error?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  /** Horizontal puts the label beside the control — for switches and checkboxes. */
  orientation?: "vertical" | "horizontal";
}

/**
 * Binds a label, control, description, and error message into one accessible
 * unit. Generates the ids and the `aria-describedby` / `aria-invalid` wiring
 * so individual controls don't each reimplement it.
 */
export function Field({
  className,
  error,
  description,
  disabled = false,
  orientation = "vertical",
  children,
  ...props
}: FieldProps) {
  const id = React.useId();

  const value = React.useMemo<FieldContextValue>(
    () => ({
      id: `${id}-control`,
      descriptionId: `${id}-description`,
      errorId: `${id}-error`,
      hasError: Boolean(error),
      hasDescription: Boolean(description),
      disabled,
    }),
    [id, error, description, disabled],
  );

  return (
    <FieldContext.Provider value={value}>
      <div
        data-disabled={disabled || undefined}
        data-invalid={error ? true : undefined}
        data-orientation={orientation}
        className={cn(
          "group/field",
          orientation === "vertical"
            ? "flex flex-col gap-2"
            : "flex flex-row-reverse items-center justify-end gap-3",
          className,
        )}
        {...props}
      >
        {children}

        {(description || error) && (
          <div
            className={cn(
              "flex flex-col gap-1",
              orientation === "horizontal" && "order-last basis-full",
            )}
          >
            {description && !error && (
              <p id={value.descriptionId} className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
            {error && (
              <p id={value.errorId} className="text-xs text-destructive">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    </FieldContext.Provider>
  );
}

/** Label bound to the field's generated control id. */
export function FieldLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Label>) {
  const context = React.useContext(FieldContext);
  return <Label htmlFor={context?.id} className={className} {...props} />;
}

/** Groups related fields, e.g. a two-column row. */
export function FieldSet({
  className,
  legend,
  children,
  ...props
}: React.FieldsetHTMLAttributes<HTMLFieldSetElement> & { legend?: React.ReactNode }) {
  return (
    <fieldset className={cn("flex flex-col gap-4", className)} {...props}>
      {legend && (
        <legend className="mb-1 text-sm font-medium">{legend}</legend>
      )}
      {children}
    </fieldset>
  );
}
