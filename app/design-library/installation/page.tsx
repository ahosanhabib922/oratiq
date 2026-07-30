import type { Metadata } from "next";

import { DocsPage, Note, Section } from "@/components/docs/docs-primitives";
import { Alert, AlertContent, AlertDescription } from "@/components/ui/alert";
import { Code, List, Text } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Installation",
  description: "Add the design system to a Next.js project.",
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

export default function InstallationPage() {
  return (
    <DocsPage
      title="Installation"
      description="Add the design system to a Next.js project."
    >
      <Alert variant="warning">
        <AlertContent>
          <AlertDescription>
            The CLI and public registry aren&apos;t published yet. Until they
            are, copy the <Code>components/ui</Code> directory and the token
            layer directly — the steps below describe that path.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Section title="1. Requirements">
        <List>
          <li>Next.js 15 or 16 with the App Router</li>
          <li>React 19</li>
          <li>Tailwind CSS v4</li>
          <li>TypeScript (the components ship typed)</li>
        </List>
      </Section>

      <Section title="2. Install dependencies">
        <Snippet>{`npm install radix-ui class-variance-authority clsx tailwind-merge lucide-react next-themes`}</Snippet>
        <Text size="sm" tone="muted" className="mt-3">
          Individual components pull in their own extras — Command needs{" "}
          <Code>cmdk</Code>, Drawer needs <Code>vaul</Code>, Chart needs{" "}
          <Code>recharts</Code>. Each component page lists what it requires.
        </Text>
      </Section>

      <Section title="3. Add the token layer">
        <Text size="sm" tone="muted" className="mb-3">
          Copy <Code>app/globals.css</Code>. It defines the three token layers
          and the base styles. Nothing else in the system works without it.
        </Text>
        <Snippet>{`@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  /* Layer 1 — primitive ramps */
  --brand-500: #cbfe00;
  /* … */

  /* Layer 2 — semantic roles */
  --primary: var(--brand-500);
  --primary-foreground: var(--brand-800);
  /* … */
}

.dark { /* dark overrides for layer 2 */ }

@theme inline {
  --color-primary: var(--primary);
  /* … */
}`}</Snippet>
      </Section>

      <Section title="4. Add the cn() helper">
        <Text size="sm" tone="muted" className="mb-3">
          Copy <Code>lib/utils.ts</Code>. The tailwind-merge configuration in it
          is not optional — without registering the custom scales, class merging
          silently drops colours from components that set both a size and a
          colour.
        </Text>
        <Snippet>{`import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["2xs"] }],
      "text-color": [{ text: ["primary", "muted-foreground", /* … */] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</Snippet>
      </Section>

      <Section title="5. Wrap your app in the providers">
        <Text size="sm" tone="muted" className="mb-3">
          The direction provider keeps <Code>dir</Code>, Radix keyboard
          navigation, and React state in sync. Skipping it means arrow keys move
          the wrong way in RTL.
        </Text>
        <Snippet>{`// app/layout.tsx
import { Providers } from "@/components/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`}</Snippet>
        <Note title="suppressHydrationWarning is required">
          Both the theme and direction providers write to <Code>&lt;html&gt;</Code>{" "}
          before React hydrates. Without the attribute, React logs a mismatch on
          every load.
        </Note>
      </Section>

      <Section title="6. Use a component">
        <Snippet>{`import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Get started</Button>;
}`}</Snippet>
      </Section>
    </DocsPage>
  );
}
