import { Badge } from "@/components/ui/badge";

/** Centred intro block for the top of an inner page or long section. */
export function HeaderSection({
  eyebrow = "Features",
  title = "Everything you need to ship worldwide",
  description = "One codebase, two directions, four themes — without a single conditional in your markup.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <Badge variant="muted" size="sm">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-muted-foreground">{description}</p>
    </div>
  );
}
