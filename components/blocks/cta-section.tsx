import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Full-bleed call-to-action band on the primary colour. */
export function CtaSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-4xl">
          Ready to ship in every direction?
        </h2>
        <p className="mt-3 max-w-xl text-primary-foreground/80">
          One command installs the free library. The blocks take it from there.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            Get started
            <ArrowRight className="rtl-flip" />
          </Button>
        </div>
      </div>
    </section>
  );
}
