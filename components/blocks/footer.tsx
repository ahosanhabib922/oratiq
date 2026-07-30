import { Separator } from "@/components/ui/separator";

const COLUMNS = [
  { heading: "Product", links: ["Components", "Blocks", "Pricing", "Changelog"] },
  { heading: "Resources", links: ["Documentation", "Theming", "RTL guide", "llms.txt"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "License"] },
];

/** Multi-column footer with brand row. */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                O
              </span>
              <span className="text-lg font-semibold">Oratiq</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The RTL-first design system for Next.js and Tailwind CSS.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-sm font-medium">{column.heading}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-sm text-muted-foreground">
          © 2026 Oratiq · MIT-licensed components, commercial blocks
        </p>
      </div>
    </footer>
  );
}
