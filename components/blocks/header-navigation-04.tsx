import { Button } from "@/components/ui/button";

/** Utility bar over the main nav — the classic SaaS double-decker. */
export function HeaderNavigation04() {
  return (
    <header className="border-b border-border bg-background">
      <div className="border-b border-border bg-muted/40">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-end gap-5 px-4 text-xs text-muted-foreground sm:px-6">
          <a href="#" className="hover:text-foreground">Status</a>
          <a href="#" className="hover:text-foreground">Changelog</a>
          <a href="#" className="hover:text-foreground">Support</a>
        </div>
      </div>
      <nav className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">O</span>
          <span className="font-semibold">Oratiq</span>
        </a>
        <div className="hidden gap-1 md:flex">
          {["Components", "Blocks", "Pricing"].map((l) => (
            <a key={l} href="#" className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">{l}</a>
          ))}
        </div>
        <Button size="sm" className="ms-auto">Get started</Button>
      </nav>
    </header>
  );
}
