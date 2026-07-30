/** High-contrast stats band with hairline dividers. */
export function MetricsSection05() {
  const stats = [
    ["12k+", "weekly installs"], ["136", "registry items"],
    ["40+", "countries"], ["0", "physical classes"],
  ];
  return (
    <section className="dark bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-4 py-14 sm:px-6 lg:grid-cols-4 max-lg:gap-y-10">
        {stats.map(([value, label]) => (
          <div key={label} className="px-6 text-center first:ps-0 last:pe-0">
            <p className="text-4xl font-semibold tracking-tight tnum text-primary">{value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
