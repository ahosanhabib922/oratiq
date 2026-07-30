import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ROWS = [
  {
    title: "Logical properties, everywhere",
    body: "Layouts, borders, and radii are written once and mirror on their own — no rtl: forests, no second stylesheet.",
    points: ["ms-/pe- end to end", "Direction-aware keyboarding", "Bidi-safe numbers and codes"],
  },
  {
    title: "One token layer, any brand",
    body: "Primitive ramps feed semantic roles feed utilities. Your rebrand is a CSS override that every block obeys instantly.",
    points: ["Light and dark from the same tokens", "Radius scale from one variable", "Native controls follow color-scheme"],
  },
];

/** Alternating text/visual rows; the visual is a live token board. */
export function FeaturesSection02() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-16 sm:px-6">
      {ROWS.map((row, i) => (
        <div
          key={row.title}
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2",
            i % 2 === 1 && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{row.title}</h3>
            <p className="mt-3 text-muted-foreground">{row.body}</p>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              {row.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="size-4 text-success" strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["bg-primary", "bg-secondary", "bg-muted", "bg-card border border-border", "bg-accent", "bg-primary/30"].map((cls, j) => (
              <div key={j} className={cn("aspect-square rounded-xl", cls)} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
