import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/** Start-aligned section intro with actions on the end edge. */
export function HeaderSection02() {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-4 py-14 sm:px-6">
      <div className="max-w-xl">
        <Badge variant="muted" size="sm">Changelog</Badge>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">What&apos;s new</h2>
        <p className="mt-2 text-muted-foreground">
          Every release, with migration notes where they matter.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Subscribe via RSS</Button>
        <Button size="sm">Follow along</Button>
      </div>
    </div>
  );
}
