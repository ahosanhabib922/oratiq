import type { Metadata } from "next";

import { DocsPage, Note, Section } from "@/components/docs/docs-primitives";
import { Code, List, Text } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Theming",
  description: "Re-brand the whole system by overriding one layer of tokens.",
};

function Snippet({ children }: { children: string }) {
  return (
    <pre
      dir="ltr"
      className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-xs leading-relaxed text-foreground"
    >
      {children}
    </pre>
  );
}

export default function ThemingPage() {
  return (
    <DocsPage
      title="Theming"
      description="Re-brand the whole system by overriding one layer of tokens."
    >
      <Section title="The contract">
        <Text tone="muted">
          Components reference semantic roles only — never a primitive ramp and
          never a hex value. That single rule is what makes theming a CSS edit
          rather than a fork. If you ever have to open a component file to
          change a colour, treat it as a bug in the system.
        </Text>
      </Section>

      <Section title="Change the brand colour">
        <Text size="sm" tone="muted" className="mb-3">
          Override the roles in your own stylesheet, after the import. Both
          themes need doing — a colour that reads on white rarely reads on
          near-black.
        </Text>
        <Snippet>{`:root {
  --primary: oklch(0.62 0.19 259);      /* your brand */
  --primary-foreground: oklch(0.98 0 0);
  --ring: var(--primary);
}

.dark {
  --primary: oklch(0.70 0.16 259);      /* lifted for dark surfaces */
  --primary-foreground: oklch(0.15 0 0);
  --ring: var(--primary);
}`}</Snippet>
      </Section>

      <Section title="Change the corner language">
        <Text size="sm" tone="muted" className="mb-3">
          Every radius is <Code>calc()</Code> off one base. Set it to{" "}
          <Code>0rem</Code> for a square system, or <Code>1.5rem</Code> for a
          soft one.
        </Text>
        <Snippet>{`:root {
  --radius: 0.25rem;  /* sharp */
}`}</Snippet>
      </Section>

      <Section title="Change the typeface">
        <Snippet>{`// app/layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ variable: "--font-outfit", subsets: ["latin"] });`}</Snippet>
        <Text size="sm" tone="muted" className="mt-3">
          The variable name is what the theme reads, so pointing it at a
          different font is enough. For Arabic, Hebrew, or Persian interfaces,
          load a face with real coverage of those scripts — Latin fallbacks
          render Arabic without proper joining.
        </Text>
      </Section>

      <Section title="Dark mode">
        <Text size="sm" tone="muted" className="mb-3">
          Driven by a <Code>.dark</Code> class on <Code>&lt;html&gt;</Code>,
          managed by next-themes. The <Code>@custom-variant</Code> declaration in
          the token layer is what makes <Code>dark:</Code> utilities resolve
          against the class rather than the OS setting.
        </Text>
        <Snippet>{`@custom-variant dark (&:is(.dark *));`}</Snippet>
      </Section>

      <Section title="What not to do">
        <List>
          <li>
            Don&apos;t reference primitive ramps in application code —{" "}
            <Code>bg-brand-500</Code> hardcodes a brand into a component and
            defeats theming.
          </li>
          <li>
            Don&apos;t add one-off colours. If a value is worth using twice, it
            is worth a semantic role.
          </li>
          <li>
            Don&apos;t override a role in only one theme. A half-themed system
            fails the moment a user toggles.
          </li>
        </List>
      </Section>

      <Note title="Verify both themes and both directions">
        Four combinations, not two. The toggles in the header exist so a change
        can be checked against all of them before it ships.
      </Note>
    </DocsPage>
  );
}
