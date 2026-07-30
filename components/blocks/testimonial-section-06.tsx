import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

/** Case-study teaser: quote, hard number, and a link to the story. */
export function TestimonialSection06() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <blockquote dir="auto" className="text-xl font-medium leading-relaxed tracking-tight">
            “We migrated 214 screens to Oratiq tokens in six weeks. The RTL
            release that used to be a quarter's work came free.”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <Avatar size="sm"><AvatarFallback>AC</AvatarFallback></Avatar>
            <span className="text-sm">
              <span className="font-medium">Amina Chowdhury</span>
              <span className="text-muted-foreground"> · Design systems lead, Globex</span>
            </span>
          </figcaption>
          <Button variant="outline" size="sm" className="mt-6">
            Read the case study
            <ArrowRight className="rtl-flip" />
          </Button>
        </div>
        <div className="rounded-2xl border border-border bg-background p-8 text-center">
          <p className="text-5xl font-semibold tracking-tight tnum text-primary">6 wks</p>
          <p className="mt-2 text-sm text-muted-foreground">
            full migration, 214 screens, 2 directions
          </p>
        </div>
      </div>
    </section>
  );
}
