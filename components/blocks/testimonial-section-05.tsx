import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";

/** Aggregate score column beside two supporting quotes. */
export function TestimonialSection05() {
  const quotes = [
    { q: "Setup to shipped landing page: 40 minutes.", n: "Sam Whitaker", i: "SW" },
    { q: "The docs' Code toggle is how all docs should work.", n: "Jonas Weber", i: "JW" },
  ];
  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="flex flex-col items-center gap-2 text-center lg:pe-10">
        <p className="text-6xl font-semibold tracking-tight tnum">4.9</p>
        <Rating value={5} readOnly label="4.9 out of 5" />
        <p className="text-sm text-muted-foreground">320+ reviews</p>
      </div>
      <div className="flex flex-col gap-4">
        {quotes.map((t, i) => (
          <div key={t.n} className="contents">
            {i > 0 && <Separator />}
            <Card padding="default" variant="ghost" className="flex-row items-center gap-4 border-0 p-0">
              <Avatar size="sm" className="shrink-0"><AvatarFallback>{t.i}</AvatarFallback></Avatar>
              <div className="min-w-0">
                <blockquote dir="auto" className="text-sm leading-relaxed">“{t.q}”</blockquote>
                <p className="mt-1 text-xs text-muted-foreground">{t.n}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
