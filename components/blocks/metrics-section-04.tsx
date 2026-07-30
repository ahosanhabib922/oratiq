import { Progress } from "@/components/ui/progress";

/** Goal-completion stats with progress bars. */
export function MetricsSection04() {
  const goals = [
    ["Component coverage", 100], ["Docs with live demos", 100],
    ["A11y contracts written", 92], ["Figma parity", 40],
  ] as const;
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight">Where the project stands</h2>
      <div className="mt-8 flex flex-col gap-6">
        {goals.map(([label, value]) => (
          <div key={label}>
            <div className="mb-2 flex items-baseline justify-between text-sm">
              <span className="font-medium">{label}</span>
              <span className="tnum text-muted-foreground">{value}%</span>
            </div>
            <Progress value={value} aria-label={label} />
          </div>
        ))}
      </div>
    </section>
  );
}
