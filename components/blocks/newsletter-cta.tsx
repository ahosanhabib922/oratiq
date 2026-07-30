import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Email-capture band. Wire the form action to your ESP. */
export function NewsletterCta() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Ship notes, monthly
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            New blocks, new components, no noise. Unsubscribe anytime.
          </p>
        </div>
        <form className="flex w-full max-w-md gap-2" action="#">
          <Input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
          />
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
