import { Metric } from "@/components/ui/metric";
import { Users } from "lucide-react";

export default function MetricDemo() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Metric
        label="Active members"
        value="2,847"
        delta={12.5}
        description="vs. last month"
        icon={<Users />}
      />
      <Metric
        label="Churn rate"
        value="2.1%"
        delta={-0.4}
        positiveIsBad
        description="vs. last month"
      />
    </div>
  );
}
