import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Card-style CTA with inline email capture. */
export function CtaSection02() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div
        className="rounded-3xl border border-border px-6 py-14 text-center"
        style={{
          background:
            "radial-gradient(32rem 16rem at 50% 0%, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 70%)",
        }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Start your next launch here
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Get the starter kit and a 5-minute walkthrough in your inbox.
        </p>
        <form className="mx-auto mt-7 flex w-full max-w-sm gap-2" action="#">
          <Input type="email" required placeholder="you@example.com" aria-label="Email address" />
          <Button type="submit" className="shrink-0">Send it</Button>
        </form>
      </div>
    </section>
  );
}
