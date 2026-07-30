import { MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedIcon } from "@/components/ui/featured-icon";
import { Input } from "@/components/ui/input";

/** Centred card with icon and explicit privacy reassurance. */
export function NewsletterCta03() {
  return (
    <section className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
        <FeaturedIcon variant="light" size="lg"><MailCheck /></FeaturedIcon>
        <h2 className="mt-4 text-xl font-semibold tracking-tight">Release notes, monthly</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          New blocks and components, straight to your inbox.
        </p>
        <form className="mt-6 flex w-full gap-2" action="#">
          <Input type="email" required placeholder="you@example.com" aria-label="Email address" />
          <Button type="submit" className="shrink-0">Join</Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          No spam, no sharing, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
