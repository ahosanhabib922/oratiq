import { Link2, Share2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

/** Content header with author byline and share actions. */
export function HeaderSection06() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance">
        The three glyphs you must never mirror
      </h1>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <figcaption className="flex items-center gap-3">
          <Avatar><AvatarFallback>AH</AvatarFallback></Avatar>
          <span className="text-sm">
            <span className="block font-medium">Ahosan Habib</span>
            <span className="text-muted-foreground">31 Jul 2026 · 6 min read</span>
          </span>
        </figcaption>
        <div className="flex gap-2">
          <Button variant="outline" size="icon-sm" aria-label="Copy link"><Link2 /></Button>
          <Button variant="outline" size="icon-sm" aria-label="Share"><Share2 /></Button>
        </div>
      </div>
    </div>
  );
}
