import { Button } from "@/components/ui/button";

/** One number, centred — for products with exactly one answer. */
export function PricingSection06() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight">Simple, honest pricing</h2>
      <p className="mt-10 text-7xl font-semibold tracking-tight tnum">
        $19<span className="text-xl font-normal text-muted-foreground">/mo</span>
      </p>
      <p className="mt-4 text-muted-foreground">
        Everything included. Cancel anytime, keep what you shipped.
      </p>
      <Button size="lg" className="mt-8">Start your 14-day trial</Button>
      <p className="mt-3 text-xs text-muted-foreground">No card required</p>
    </section>
  );
}
