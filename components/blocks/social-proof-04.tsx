import { Rating } from "@/components/ui/rating";

/** Aggregate rating headline with the logo strip. */
export function SocialProof04() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <Rating value={5} readOnly label="4.9 out of 5" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground tnum">4.9/5</span> from 320+ production teams
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {["Acme Corp", "Northwind", "Globex", "Initech", "Umbra", "Vertex"].map((b) => (
          <span key={b} className="text-base font-semibold text-muted-foreground/50">{b}</span>
        ))}
      </div>
    </section>
  );
}
