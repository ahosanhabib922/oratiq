import { Button } from "@/components/ui/button";

/** Three-zone navbar: brand / centred links / actions. Desktop-first. */
export function HeaderNavigation02() {
  const links = ["Components", "Blocks", "Pricing", "Changelog"];
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5 justify-self-start">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
          <span className="text-lg font-semibold max-sm:hidden">Oratiq</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <Button variant="ghost" size="sm" className="max-sm:hidden">Log in</Button>
          <Button size="sm" shape="pill">Get started</Button>
        </div>
      </nav>
    </header>
  );
}
