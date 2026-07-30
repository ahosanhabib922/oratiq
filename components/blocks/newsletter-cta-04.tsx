import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Split signup: what you get, then the field. */
export function NewsletterCta04() {
  const benefits = ["New block drops first", "Migration heads-ups", "Zero marketing fluff"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-8 rounded-3xl border border-border p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">The ship-notes list</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-muted-foreground">
                <Check className="size-4 text-success" strokeWidth={3} />{b}
              </li>
            ))}
          </ul>
        </div>
        <form className="flex w-full gap-2" action="#">
          <Input type="email" required size="lg" placeholder="you@example.com" aria-label="Email address" />
          <Button type="submit" size="lg" className="shrink-0">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
