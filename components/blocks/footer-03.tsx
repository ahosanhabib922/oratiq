import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/** Big footer with signup row on top of the link columns. */
export function Footer03() {
  const columns = [
    ["Product", ["Components", "Blocks", "Pricing"]],
    ["Resources", ["Docs", "RTL guide", "llms.txt"]],
    ["Company", ["About", "Blog", "Contact"]],
  ] as const;
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">Stay in the loop</p>
            <p className="text-sm text-muted-foreground">Monthly ship notes, nothing else.</p>
          </div>
          <form className="flex w-full max-w-sm gap-2" action="#">
            <Input type="email" required size="sm" placeholder="you@example.com" aria-label="Email address" />
            <Button type="submit" size="sm" className="shrink-0">Subscribe</Button>
          </form>
        </div>
        <Separator className="my-10" />
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
              <span className="text-lg font-semibold">Oratiq</span>
            </a>
          </div>
          {columns.map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <p className="text-sm font-medium">{heading}</p>
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
        <p className="mt-10 text-xs text-muted-foreground">© 2026 Oratiq · MIT licensed</p>
      </div>
    </footer>
  );
}
