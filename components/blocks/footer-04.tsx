/** Centred footer: logo, one link row, legal line. */
export function Footer04() {
  const links = ["Components", "Blocks", "Docs", "Pricing", "Blog", "Contact"];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-12 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
          <span className="text-lg font-semibold">Oratiq</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Oratiq · MIT licensed</p>
      </div>
    </footer>
  );
}
