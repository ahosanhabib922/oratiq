import * as React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  /** Signed percentage, e.g. 12.5 or -3.2. Colour and arrow follow the sign. */
  delta?: number;
  /** When a fall is good (costs, errors), flip the colour logic. */
  positiveIsBad?: boolean;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

/** Stat card. Numbers are tabular; the trend arrow mirrors under RTL. */
export function Metric({
  label,
  value,
  delta,
  positiveIsBad = false,
  description,
  icon,
  className,
  ...props
}: MetricProps) {
  const up = delta !== undefined && delta >= 0;
  const good = delta !== undefined && (positiveIsBad ? delta < 0 : delta >= 0);

  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-xl border border-border bg-card p-5",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">{label}</p>
        {icon && (
          <span className="text-muted-foreground [&_svg]:size-4">{icon}</span>
        )}
      </div>
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight tnum">{value}</span>
        {delta !== undefined && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-sm font-medium tnum",
              good ? "text-success" : "text-destructive",
            )}
          >
            {up ? (
              <TrendingUp className="size-3.5 rtl-flip" aria-hidden="true" />
            ) : (
              <TrendingDown className="size-3.5 rtl-flip" aria-hidden="true" />
            )}
            {up ? "+" : ""}
            {delta}%
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
