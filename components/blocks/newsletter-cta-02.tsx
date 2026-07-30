import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Single-row inline signup — footer-adjacent, low ceremony. */
export function NewsletterCta02() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <form
        action="#"
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 px-6 py-5"
      >
        <div>
          <p className="text-sm font-semibold">Ship notes</p>
          <p className="text-sm text-muted-foreground">One email a month. No noise.</p>
        </div>
        <div className="flex w-full max-w-sm gap-2">
          <Input type="email" required size="sm" placeholder="you@example.com" aria-label="Email address" />
          <Button type="submit" size="sm" className="shrink-0">Subscribe</Button>
        </div>
      </form>
    </section>
  );
}
