/** Denser two-row logo wall inside a soft panel. */
export function SocialProof02() {
  const rows = [
    ["Acme Corp", "Northwind", "Globex", "Initech", "Umbra"],
    ["Vertex", "Hooli", "Stark Labs", "Wayne Tech", "Aperture"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="rounded-2xl border border-border bg-card/50 px-6 py-10">
        <p className="text-center text-sm font-medium">
          Powering marketing sites in 40+ countries
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {rows.map((row, i) => (
            <div key={i} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {row.map((brand) => (
                <span key={brand} className="text-base font-semibold tracking-tight text-muted-foreground/60">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
