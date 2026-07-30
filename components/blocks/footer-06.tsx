/** Compact two-zone footer: brand line and inline nav, nothing else. */
export function Footer06() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6 px-4 py-10 sm:px-6">
        <div className="max-w-xs">
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">O</span>
            <span className="text-sm font-semibold">Oratiq</span>
          </a>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            98 components and sections for interfaces that read both ways.
            MIT licensed, built in Dhaka.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
          {["Docs", "Blocks", "GitHub", "npm", "License", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
