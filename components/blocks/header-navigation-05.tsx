/** Editorial nav: link groups flanking a centred logo. */
export function HeaderNavigation05() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <div className="flex gap-6 justify-self-start">
          {["Work", "About"].map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </div>
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
          <span className="text-lg font-semibold tracking-tight">Oratiq</span>
        </a>
        <div className="flex gap-6 justify-self-end">
          {["Journal", "Contact"].map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
