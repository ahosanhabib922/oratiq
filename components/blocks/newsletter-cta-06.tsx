import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** The quietest possible signup — a single centred line. */
export function NewsletterCta06() {
  return (
    <section className="border-y border-border">
      <form
        action="#"
        className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-3 px-4 py-8 sm:px-6"
      >
        <label htmlFor="nl6" className="text-sm text-muted-foreground">
          Monthly ship notes:
        </label>
        <div className="flex gap-2">
          <Input id="nl6" type="email" required size="sm" placeholder="you@example.com" className="w-56" />
          <Button type="submit" size="sm" variant="outline">Join</Button>
        </div>
      </form>
    </section>
  );
}
