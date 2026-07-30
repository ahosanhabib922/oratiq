import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/** One strong quote with the logo strip underneath. */
export function SocialProof03() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
      <blockquote className="text-2xl font-medium leading-snug tracking-tight text-balance">
        “We localised into Arabic and Hebrew in a sprint.{" "}
        <span className="text-primary">The layout work was already done.</span>”
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-center gap-3">
        <Avatar size="sm"><AvatarFallback>LH</AvatarFallback></Avatar>
        <span className="text-sm">
          <span className="font-medium">Layla Haddad</span>
          <span className="text-muted-foreground"> · Frontend lead, Vertex</span>
        </span>
      </figcaption>
      <Separator className="mx-auto mt-10 max-w-md" />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {["Acme Corp", "Northwind", "Globex", "Initech"].map((brand) => (
          <span key={brand} className="text-base font-semibold text-muted-foreground/50">{brand}</span>
        ))}
      </div>
    </section>
  );
}
