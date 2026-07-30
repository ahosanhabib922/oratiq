import { ProgressCircle } from "@/components/ui/progress";

/** Ring gauges — health/score storytelling. */
export function MetricsSection06() {
  const rings = [
    ["Lighthouse a11y", 100], ["RTL coverage", 100], ["Bundle discipline", 96],
  ] as const;
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 sm:grid-cols-3">
        {rings.map(([label, value]) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <ProgressCircle value={value} size={120} label={label}>
              <span className="text-2xl font-semibold tnum">{value}</span>
            </ProgressCircle>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
