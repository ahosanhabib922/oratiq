/** One-row footer for focused product pages. */
export function Footer02() {
  const links = ["Docs", "GitHub", "npm", "License"];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">O</span>
          <span className="text-sm font-semibold">Oratiq</span>
        </a>
        <nav className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Oratiq</p>
      </div>
    </footer>
  );
}
