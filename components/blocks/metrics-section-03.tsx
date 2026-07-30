/** Split band: claim on the start side, numbers on the end side. */
export function MetricsSection03() {
  const stats = [
    ["48 hrs", "median time to first shipped page"],
    ["-92%", "RTL bug reports after adopting"],
    ["4.9/5", "developer satisfaction"],
  ];
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Teams stop fighting direction and start shipping
          </h2>
          <p className="mt-3 text-muted-foreground">
            Numbers from teams that moved their marketing and product UI onto
            Oratiq.
          </p>
        </div>
        <dl className="grid gap-8 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dd className="text-4xl font-semibold tracking-tight tnum text-primary">{value}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
