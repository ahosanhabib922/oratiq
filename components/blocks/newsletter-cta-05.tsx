import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Big-type dark signup band. */
export function NewsletterCta05() {
  return (
    <section className="dark bg-background text-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Miss a release,<br className="sm:hidden" /> miss a shortcut.
        </h2>
        <form className="mt-8 flex w-full max-w-md gap-2" action="#">
          <Input
            type="email" required placeholder="you@example.com" aria-label="Email address"          />
          <Button type="submit" className="shrink-0">Sign up</Button>
        </form>
      </div>
    </section>
  );
}
