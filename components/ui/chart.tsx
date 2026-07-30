"use client";

import * as React from "react";
import { ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { cn } from "@/lib/utils";
import { useDirection } from "@/components/providers";

export interface ChartSeriesConfig {
  label: string;
  /** Any CSS colour. Defaults walk the --chart-N tokens. */
  color?: string;
}

export type ChartConfig = Record<string, ChartSeriesConfig>;

const ChartContext = React.createContext<ChartConfig>({});

export function useChartConfig() {
  return React.useContext(ChartContext);
}

const DEFAULT_COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

/** Resolves a series colour, falling back to the palette in declaration order. */
export function seriesColor(config: ChartConfig, key: string) {
  const keys = Object.keys(config);
  return config[key]?.color ?? DEFAULT_COLORS[keys.indexOf(key) % DEFAULT_COLORS.length];
}

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  /** Height in px, or a Tailwind class via className. */
  height?: number;
  children: React.ReactElement;
}

/**
 * Themed Recharts wrapper.
 *
 * Recharts renders SVG in physical space and has no concept of writing
 * direction, so the whole plot is mirrored under RTL and the text is
 * un-mirrored back. That keeps the value axis on the correct side while
 * leaving labels readable.
 */
export function ChartContainer({
  config,
  height = 260,
  className,
  children,
  ...props
}: ChartContainerProps) {
  const { direction } = useDirection();

  return (
    <ChartContext.Provider value={config}>
      <div
        data-chart-direction={direction}
        className={cn(
          "w-full text-xs",
          "[&_.recharts-cartesian-grid_line]:stroke-border",
          "[&_.recharts-cartesian-axis-line]:stroke-border",
          "[&_.recharts-cartesian-axis-tick-value]:fill-muted-foreground",
          "[&_.recharts-legend-item-text]:!text-muted-foreground",
          direction === "rtl" && [
            "[&_.recharts-surface]:-scale-x-100",
            // Un-mirror each label about its own centre. Without `fill-box`,
            // an SVG transform resolves against the viewBox origin and throws
            // the text hundreds of pixels outside the plot.
            "[&_text]:[transform-box:fill-box] [&_text]:[transform-origin:center] [&_text]:-scale-x-100",
          ],
          className,
        )}
        style={{ height }}
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

interface TooltipPayloadItem {
  name?: string;
  dataKey?: string | number;
  value?: number | string;
  color?: string;
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  hideLabel,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: React.ReactNode;
  hideLabel?: boolean;
}) {
  const config = useChartConfig();

  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-lg">
      {!hideLabel && label != null && (
        <p className="mb-1.5 font-medium text-popover-foreground">{label}</p>
      )}
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => {
          const key = String(item.dataKey ?? item.name ?? i);
          return (
            <div key={key} className="flex items-center gap-2">
              <span
                className="size-2 shrink-0 rounded-xs"
                style={{ backgroundColor: item.color ?? seriesColor(config, key) }}
              />
              <span className="text-muted-foreground">
                {config[key]?.label ?? key}
              </span>
              <span className="ms-auto font-medium tnum text-popover-foreground">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ChartTooltip = RechartsTooltip;

export function ChartLegend({ config }: { config: ChartConfig }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
      {Object.entries(config).map(([key, series]) => (
        <div key={key} className="flex items-center gap-1.5 text-xs">
          <span
            className="size-2.5 rounded-xs"
            style={{ backgroundColor: seriesColor(config, key) }}
          />
          <span className="text-muted-foreground">{series.label}</span>
        </div>
      ))}
    </div>
  );
}
