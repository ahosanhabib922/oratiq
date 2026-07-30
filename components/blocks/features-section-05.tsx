import { Check } from "lucide-react";

/** Dense capability checklist, two columns. */
export function FeaturesSection05() {
  const items = [
    "81 primitives", "51 marketing sections", "Radix behaviour", "Tailwind v4 tokens",
    "Dark mode built-in", "RTL built-in", "Copy-in ownership", "MIT license",
    "CLI with dependency graph", "llms.txt for agents", "A11y contracts per component", "Zero physical direction classes",
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-semibold tracking-tight">Everything in the box</h2>
      <ul className="mt-10 grid gap-x-12 gap-y-3.5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 border-b border-border pb-3.5 text-sm">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15">
              <Check className="size-3 text-success" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
