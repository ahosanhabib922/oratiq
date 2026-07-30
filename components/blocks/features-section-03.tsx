import { Globe2, MoonStar, Package, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { FeaturedIcon } from "@/components/ui/featured-icon";

const CELLS = [
  { icon: <Globe2 />, title: "RTL-first", body: "A billion readers, one codebase. Logical properties do the mirroring.", span: "lg:col-span-2" },
  { icon: <Palette />, title: "Token-driven", body: "Rebrand with one override." },
  { icon: <MoonStar />, title: "Dark by design", body: "Surface-lift elevation, not heavier shadows." },
  { icon: <Package />, title: "Copy-in ownership", body: "The CLI writes files into your repo — edit anything, keep everything.", span: "lg:col-span-2" },
];

/** Bento grid with one wide cell per row. */
export function FeaturesSection03() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CELLS.map((cell) => (
          <div
            key={cell.title}
            className={cn(
              "flex flex-col gap-3 rounded-2xl border border-border bg-card p-6",
              cell.span,
            )}
          >
            <FeaturedIcon variant="light">{cell.icon}</FeaturedIcon>
            <h3 className="text-lg font-medium">{cell.title}</h3>
            <p className="text-sm text-muted-foreground">{cell.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
