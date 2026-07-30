/** Big-number stats band. */
export function MetricsSection() {
  const stats = [
    ["81", "components shipped"],
    ["2", "writing directions"],
    ["40+", "countries served"],
    ["99.9%", "uptime"],
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 text-center sm:px-6 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="text-4xl font-semibold tracking-tight tnum text-primary">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
