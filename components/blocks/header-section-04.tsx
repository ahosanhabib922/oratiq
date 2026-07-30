import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";

/** Help-center header: big title with a search field front and centre. */
export function HeaderSection04() {
  return (
    <div className="border-b border-border bg-card/40">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How can we help?
        </h1>
        <p className="mt-2 text-muted-foreground">
          Guides, references, and answers — searchable.
        </p>
        <div className="mt-6 w-full">
          <InputGroup>
            <InputGroupAddon><Search /></InputGroupAddon>
            <Input size="lg" placeholder="Search articles…" aria-label="Search articles" />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
