import { Metric } from "@/components/ui/metric";
import { Download, Star, Users } from "lucide-react";

/** Stat cards with deltas — dashboard-flavoured marketing numbers. */
export function MetricsSection02() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Metric label="Weekly installs" value="12,480" delta={18.2} description="vs. last week" icon={<Download />} />
        <Metric label="GitHub stars" value="4,912" delta={6.4} description="vs. last week" icon={<Star />} />
        <Metric label="Teams in production" value="320" delta={9.1} description="vs. last month" icon={<Users />} />
      </div>
    </section>
  );
}
