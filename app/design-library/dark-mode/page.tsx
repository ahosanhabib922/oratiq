import type { Metadata } from "next";

import { DocsPage, Note, Section } from "@/components/docs/docs-primitives";
import { Code, List, Text } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Dark mode",
  description: "Class-driven, token-powered, and free per component.",
};

function Snippet({ children }: { children: string }) {
  return (
    <pre
      dir="ltr"
      className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-xs leading-relaxed"
    >
      {children}
    </pre>
  );
}

export default function DarkModePage() {
  return (
    <DocsPage
      title="Dark mode"
      description="Class-driven, token-powered, and free per component."
    >
      <Section
        title="How it works"
        description="Components never know which theme they're in — they read semantic tokens, and the .dark class swaps the token values."
      >
        <Snippet>{`:root  { --background: #ffffff; --foreground: #171717; }
.dark  { --background: #1d1d1d; --foreground: #ffffff; }

/* a component just says: */
<div className="bg-background text-foreground" />`}</Snippet>
        <Text size="sm" tone="muted" className="mt-3">
          Because the swap happens at the token layer, adding a component never
          adds dark-mode work. There is no <Code>dark:bg-…</Code> scattered
          through component code to keep in sync.
        </Text>
      </Section>

      <Section
        title="Toggling"
        description="The Providers wrapper mounts next-themes; useTheme() flips the class."
      >
        <Snippet>{`"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      Toggle theme
    </Button>
  );
}`}</Snippet>
      </Section>

      <Section title="The details that usually get missed">
        <List>
          <li>
            <Code>color-scheme</Code> is declared per theme, so{" "}
            <strong>native controls</strong> — date-picker glyphs, file inputs,
            scrollbars, selection highlights — follow along. CSS can&apos;t
            reach inside a date input; this is the only correct signal.
          </li>
          <li>
            <Code>suppressHydrationWarning</Code> on <Code>&lt;html&gt;</Code>{" "}
            is required — the theme class is applied before React hydrates.
          </li>
          <li>
            Dark elevation is <strong>surface lift</strong>, not heavier
            shadows: each level up is a lighter background token. Shadows carry
            little signal on dark surfaces.
          </li>
          <li>
            The <Code>dark:</Code> Tailwind variant resolves against the class
            (via <Code>@custom-variant</Code>), not the OS setting — so the
            user&apos;s in-app choice always wins.
          </li>
        </List>
      </Section>

      <Note title="Verify all four modes">
        Light/dark is half the matrix — the header toggles exist so every
        change is checked in light/dark <em>and</em> LTR/RTL before it ships.
      </Note>
    </DocsPage>
  );
}
