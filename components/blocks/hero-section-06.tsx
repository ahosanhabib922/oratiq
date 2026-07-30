import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";

/** Conversion hero: headline + email capture + social proof row. */
export function HeroSection06() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Join the waitlist for Oratiq Cloud
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Hosted registries, team theming, and preview deploys for your design
        system.
      </p>
      <form className="mx-auto mt-8 flex w-full max-w-md gap-2" action="#">
        <Input type="email" required size="lg" placeholder="you@example.com" aria-label="Email address" />
        <Button type="submit" size="lg" className="shrink-0">Join</Button>
      </form>
      <div className="mt-6 flex items-center justify-center gap-3">
        <AvatarGroup max={4} total={2140}>
          {["LH", "TR", "AC", "NP", "JW"].map((i) => (
            <Avatar key={i} size="sm"><AvatarFallback>{i}</AvatarFallback></Avatar>
          ))}
        </AvatarGroup>
        <p className="text-sm text-muted-foreground">2,140 already in line</p>
      </div>
    </section>
  );
}
