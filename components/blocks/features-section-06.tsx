import { Globe2 } from "lucide-react";
import { FeaturedIcon } from "@/components/ui/featured-icon";

/** One flagship feature spotlighted beside supporting points. */
export function FeaturesSection06() {
  const rest = [
    ["Token theming", "One override, whole system."],
    ["Copy-in code", "Your repo, your rules."],
    ["Agent-ready", "llms.txt ships the conventions."],
  ];
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
      <div
        className="flex flex-col justify-between gap-10 rounded-3xl border border-border p-8"
        style={{
          background:
            "radial-gradient(30rem 18rem at 0% 100%, color-mix(in oklab, var(--color-primary) 15%, transparent), transparent 70%)",
        }}
      >
        <FeaturedIcon variant="solid" size="xl"><Globe2 /></FeaturedIcon>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">RTL is the headline act</h3>
          <p className="mt-2 max-w-md text-muted-foreground">
            Logical properties, bidi isolation, mirrored glyphs, direction-aware
            keyboarding — measured at zero physical classes, not promised.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {rest.map(([title, body]) => (
          <div key={title} className="flex-1 rounded-2xl border border-border bg-card p-6">
            <h4 className="font-medium">{title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
