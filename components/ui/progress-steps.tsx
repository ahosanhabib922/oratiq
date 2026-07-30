"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  description?: string;
}

export interface ProgressStepsProps {
  steps: Step[];
  /** Zero-based index of the current step. */
  current: number;
  orientation?: "horizontal" | "vertical";
  /** Allow jumping back to completed steps. */
  onStepClick?: (index: number) => void;
  label?: string;
  className?: string;
}

/**
 * Wizard progress. Completed steps show a check, the current step is
 * announced via aria-current, and connectors use logical layout so the
 * sequence flows correctly under RTL.
 */
export function ProgressSteps({
  steps,
  current,
  orientation = "horizontal",
  onStepClick,
  label = "Progress",
  className,
}: ProgressStepsProps) {
  const horizontal = orientation === "horizontal";

  return (
    <ol
      aria-label={label}
      className={cn(
        "flex",
        horizontal ? "w-full items-start" : "flex-col",
        className,
      )}
    >
      {steps.map((step, i) => {
        const complete = i < current;
        const active = i === current;
        const clickable = complete && onStepClick;

        const marker = (
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium tnum",
              "transition-colors duration-200",
              complete && "border-primary bg-primary text-primary-foreground",
              active && "border-primary text-primary",
              !complete && !active && "border-border text-muted-foreground",
            )}
          >
            {complete ? <Check className="size-4" strokeWidth={3} /> : i + 1}
          </span>
        );

        const text = (
          <span className={cn("flex flex-col", horizontal ? "items-center text-center" : "pt-1")}>
            <span
              className={cn(
                "text-sm font-medium",
                active ? "text-foreground" : complete ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {step.title}
            </span>
            {step.description && (
              <span className="text-xs text-muted-foreground">{step.description}</span>
            )}
          </span>
        );

        return (
          <li
            key={step.title}
            aria-current={active ? "step" : undefined}
            className={cn(
              "flex",
              horizontal ? "flex-1 flex-col items-center gap-2" : "gap-3 pb-8 last:pb-0",
            )}
          >
            {horizontal ? (
              <>
                <div className="flex w-full items-center">
                  {/* Leading connector — invisible for the first step. */}
                  <span
                    className={cn(
                      "h-0.5 flex-1 rounded-full",
                      i === 0 ? "bg-transparent" : complete || active ? "bg-primary" : "bg-border",
                    )}
                  />
                  {clickable ? (
                    <button
                      type="button"
                      onClick={() => onStepClick(i)}
                      aria-label={`Back to ${step.title}`}
                      className="rounded-full outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {marker}
                    </button>
                  ) : (
                    marker
                  )}
                  <span
                    className={cn(
                      "h-0.5 flex-1 rounded-full",
                      i === steps.length - 1
                        ? "bg-transparent"
                        : complete
                          ? "bg-primary"
                          : "bg-border",
                    )}
                  />
                </div>
                {text}
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  {clickable ? (
                    <button
                      type="button"
                      onClick={() => onStepClick(i)}
                      aria-label={`Back to ${step.title}`}
                      className="rounded-full outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {marker}
                    </button>
                  ) : (
                    marker
                  )}
                  {i < steps.length - 1 && (
                    <span
                      className={cn(
                        "mt-1 w-0.5 flex-1 rounded-full",
                        complete ? "bg-primary" : "bg-border",
                      )}
                    />
                  )}
                </div>
                {text}
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
