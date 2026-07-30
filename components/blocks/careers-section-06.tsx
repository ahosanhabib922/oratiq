import { ArrowRight, Megaphone, Palette, TerminalSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FeaturedIcon } from "@/components/ui/featured-icon";

/** Department cards, each with its own opening count. */
export function CareersSection06() {
  const departments = [
    { icon: <TerminalSquare />, name: "Engineering", count: 2 },
    { icon: <Palette />, name: "Design", count: 1 },
    { icon: <Megaphone />, name: "Community", count: 1 },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {departments.map((d) => (
          <a key={d.name} href="#" className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Card padding="default" interactive className="h-full gap-3">
              <FeaturedIcon variant="light">{d.icon}</FeaturedIcon>
              <h3 className="font-medium">{d.name}</h3>
              <p className="mt-auto inline-flex items-center gap-1 text-sm text-muted-foreground">
                <span className="tnum">{d.count}</span> open role{d.count > 1 ? "s" : ""}
                <ArrowRight className="size-3.5 rtl-flip transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
