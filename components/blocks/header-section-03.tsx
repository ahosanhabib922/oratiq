import { CalendarDays, Clock3, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/** Article-style header: kicker, title, and a meta row. */
export function HeaderSection03() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Badge size="sm">Engineering</Badge>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-balance">
        Mirroring an entire product with zero conditionals
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><User2 className="size-4" />Ahosan Habib</span>
        <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-4" />31 Jul 2026</span>
        <span className="inline-flex items-center gap-1.5"><Clock3 className="size-4" />7 min read</span>
      </div>
      <Separator className="mt-8" />
    </div>
  );
}
