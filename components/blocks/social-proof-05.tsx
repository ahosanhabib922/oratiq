import { Card } from "@/components/ui/card";

/** Logo cards with one-line outcomes — proof with substance. */
export function SocialProof05() {
  const cases = [
    ["Northwind", "Arabic launch in one sprint"],
    ["Globex", "Rebrand shipped in an afternoon"],
    ["Vertex", "-92% RTL bug reports"],
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {cases.map(([brand, outcome]) => (
          <Card key={brand} padding="default" className="items-center gap-2 text-center">
            <span className="text-lg font-semibold tracking-tight text-muted-foreground">{brand}</span>
            <p className="text-sm text-muted-foreground">{outcome}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
