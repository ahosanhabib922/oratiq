import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  seriesColor,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { week: "W1", chest: 2400, back: 2900 },
  { week: "W2", chest: 2800, back: 3100 },
  { week: "W3", chest: 3200, back: 3000 },
  { week: "W4", chest: 3600, back: 3800 },
];

const config: ChartConfig = {
  chest: { label: "Chest" },
  back: { label: "Back" },
};

export default function ChartDemo() {
  return (
    <div className="w-full">
      <ChartContainer config={config} height={220}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="week" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={44} />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Bar dataKey="chest" fill={seriesColor(config, "chest")} radius={4} />
          <Bar dataKey="back" fill={seriesColor(config, "back")} radius={4} />
        </BarChart>
      </ChartContainer>
      <ChartLegend config={config} />
    </div>
  );
}
