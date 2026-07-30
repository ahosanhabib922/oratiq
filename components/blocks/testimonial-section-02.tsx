import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Rating } from "@/components/ui/rating";

/** One large centred testimonial — the anchor quote. */
export function TestimonialSection02() {
  return (
    <section className="bg-card/40">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <Rating value={5} readOnly label="Rated 5 of 5" />
        <blockquote dir="auto" className="mt-6 text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
          “Every other library made RTL our problem. Oratiq made it a
          non-event — we shipped the Arabic site the same week.”
        </blockquote>
        <figcaption className="mt-8 flex flex-col items-center gap-3">
          <Avatar size="lg"><AvatarFallback>TR</AvatarFallback></Avatar>
          <div>
            <p className="font-medium">Tomás Rivera</p>
            <p className="text-sm text-muted-foreground">CTO, Northwind</p>
          </div>
        </figcaption>
      </div>
    </section>
  );
}
