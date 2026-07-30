import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

/** Docs-style nav with an inline search field. */
export function HeaderNavigation06() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
          <span className="text-lg font-semibold max-sm:hidden">Oratiq</span>
        </a>
        <div className="mx-auto w-full max-w-md">
          <InputGroup>
            <InputGroupAddon><Search /></InputGroupAddon>
            <Input size="sm" placeholder="Search docs…" aria-label="Search docs" />
            <InputGroupAddon align="end"><Kbd>/</Kbd></InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="sm" className="max-sm:hidden">GitHub</Button>
          <Button size="sm">Install</Button>
        </div>
      </nav>
    </header>
  );
}
