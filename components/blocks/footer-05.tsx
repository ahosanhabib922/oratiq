import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Dark mega-footer opening with a final CTA. */
export function Footer05() {
  const columns = [
    ["Product", ["Components", "Blocks", "Pricing"]],
    ["Docs", ["Installation", "Theming", "RTL guide"]],
    ["Company", ["About", "Blog", "Careers", "Contact"]],
  ] as const;
  return (
    <footer className="dark bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Ship your next launch on Oratiq
          </h2>
          <Button size="lg">
            Get started
            <ArrowRight className="rtl-flip" />
          </Button>
        </div>
        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
              <span className="text-lg font-semibold">Oratiq</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">The RTL-first design system.</p>
          </div>
          {columns.map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <p className="text-sm font-medium text-foreground">{heading}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">© 2026 Oratiq</p>
      </div>
    </footer>
  );
}
