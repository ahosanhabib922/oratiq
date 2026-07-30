/** Logo cloud. Wordmarks are placeholders — swap for real client SVGs. */
export function SocialProof() {
  const brands = ["Acme Corp", "Northwind", "Globex", "Initech", "Umbra", "Vertex"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-center text-sm text-muted-foreground">
        Trusted by teams shipping in every direction
      </p>
      <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-center text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
