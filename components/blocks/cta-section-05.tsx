import { CodeSnippet } from "@/components/ui/code-snippet";

/** Developer CTA: the command IS the call to action. */
export function CtaSection05() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight">One command away</h2>
      <p className="mt-2 text-muted-foreground">
        Tokens, providers, and your first component — sixty seconds, start to
        render.
      </p>
      <div className="mt-7 text-start">
        <CodeSnippet inline code="npx @oratiq-js/ui init" />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Works in any Next.js 15+ project with Tailwind v4
      </p>
    </section>
  );
}
