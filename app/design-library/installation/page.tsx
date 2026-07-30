import type { Metadata } from "next";

import { DocsPage, Note, Section } from "@/components/docs/docs-primitives";
import { CommandBlock } from "@/components/docs/code-block";
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
      <Section title="Requirements">
        <List>
          <li>Next.js 15 or 16 with the App Router</li>
          <li>React 19</li>
          <li>Tailwind CSS v4</li>
          <li>TypeScript (the components ship typed)</li>
        </List>
      </Section>

      <Section
        title="1. Initialise"
        description="One command sets up everything components need: components.json, the token layer CSS, the cn() helper, and the Providers wrapper."
      >
        <CommandBlock command="npx @oratiq-js/ui init" />
        <Text size="sm" tone="muted" className="mt-3">
          No questions asked — the CLI detects your layout (<Code>src/</Code> or
          root) and prints what it chose; override with <Code>--ui</Code>,{" "}
          <Code>--lib</Code>, <Code>--css</Code>. If your Tailwind CSS file
          already exists, the token layer is written next to it as{" "}
          <Code>oratiq-theme.css</Code> for you to merge — nothing of yours is
          overwritten.
        </Text>
      </Section>

      <Section
        title="2. Add components"
        description="Components are copied into your repo, along with everything they depend on. The code is yours after this — edit any line."
      >
        <CommandBlock command="npx @oratiq-js/ui add button dialog field" />
        <Text size="sm" tone="muted" className="mt-3">
          The CLI finishes by listing the npm packages to install — typically:
        </Text>
        <CommandBlock
          className="mt-3"
          command="npm install radix-ui class-variance-authority clsx tailwind-merge lucide-react"
        />
        <Note title="Re-running is safe">
          <Code>add</Code> skips files that already exist, so your edits are
          never clobbered. Pass <Code>--overwrite</Code> to pull a component&apos;s
          latest version, then review the change with <Code>git diff</Code>.
        </Note>
      </Section>

      <Section
        title="3. Wrap your app in the providers"
        description="One wrapper supplies theme, writing direction, tooltips, and toasts. Skipping it breaks dark mode and RTL keyboard navigation."
      >
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
          The theme and direction providers both write to{" "}
          <Code>&lt;html&gt;</Code> before React hydrates. Without the
          attribute, React logs a mismatch on every load.
        </Note>
      </Section>

      <Section title="4. Use a component">
        <Snippet>{`import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Get started</Button>;
}`}</Snippet>
        <Text size="sm" tone="muted" className="mt-3">
          Every component page shows its install command, import line, and full
          source. For theming, see{" "}
          <a
            href="/design-library/theming"
            className="font-medium text-primary underline underline-offset-4"
          >
            Theming
          </a>
          ; for RTL, set <Code>dir=&quot;rtl&quot;</Code> on{" "}
          <Code>&lt;html&gt;</Code> — everything mirrors from there.
        </Text>
      </Section>

      <Section
        title="Without the CLI"
        description="Every component page has a Source section — copy the file, plus lib/utils.ts and the token layer from the theme registry item, and you're set."
      >
        <CommandBlock command="curl -s https://ui.oratiq.com/r/theme.json" />
      </Section>

      <Section
        title="For AI coding agents"
        description="The whole system — conventions, tokens, component index — is published in machine-readable form. Point your agent at it."
      >
        <CommandBlock command="https://ui.oratiq.com/llms.txt" />
      </Section>
    </DocsPage>
  );
}
