import type { Metadata } from "next";

import { DocsPage, Note, Section } from "@/components/docs/docs-primitives";
import { Card } from "@/components/ui/card";
import { Code, List, Text, TextLink } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Introduction",
  description: "What Oratiq is, what it isn't, and why it exists.",
};

export default function IntroductionPage() {
  return (
    <DocsPage
      title="Introduction"
      description="What Oratiq is, what it isn't, and why it exists."
    >
      <Section title="What is Oratiq?">
        <Text tone="muted">
          Oratiq is a component <em>distribution</em>, not a component{" "}
          <em>dependency</em>. The CLI copies accessible, themeable components —
          built on Radix behaviour and Tailwind CSS v4 — into your repository.
          From that moment the code is yours: every line is editable, every
          update is an explicit, reviewable diff.
        </Text>
      </Section>

      <Section
        title="Why another one?"
        description="One reason, taken seriously: the web reads in two directions."
      >
        <Text tone="muted">
          Roughly a billion people read right-to-left — Arabic, Hebrew, Persian,
          Urdu. Most component libraries treat that as a patch: a wrapper here,
          an override there, a broken calendar everywhere. Oratiq inverts the
          priority. Logical CSS properties, bidi isolation, direction-aware
          behaviour, and mirrored iconography are the <em>default</em> — you
          write one codebase and it reads correctly both ways.
        </Text>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Copy-in ownership", "shadcn's distribution model: your repo, your code, no lock-in."],
            ["Radix behaviour", "Focus traps, keyboard navigation, and ARIA come from battle-tested primitives."],
            ["RTL-first styling", "The part nobody else does: measured zero physical direction classes."],
          ].map(([title, body]) => (
            <Card key={title} padding="sm" className="gap-1.5">
              <p className="text-sm font-medium">{title}</p>
              <Text size="xs" tone="muted">
                {body}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What Oratiq is not">
        <List>
          <li>
            <strong>Not an npm component package.</strong> You never{" "}
            <Code>import</Code> UI from <Code>@oratiq-js/ui</Code> — that
            package is only the CLI. Components live in your repo.
          </li>
          <li>
            <strong>Not a design straitjacket.</strong> Every colour, radius,
            and shadow reads a semantic token — re-branding is a{" "}
            <TextLink href="/design-library/theming">CSS override</TextLink>,
            never a component edit.
          </li>
          <li>
            <strong>Not a fork of shadcn/ui.</strong> Same architecture family,
            independently written — with RTL, bidi safety, and direction-aware
            behaviour as first-class requirements.
          </li>
        </List>
      </Section>

      <Section title="Where to go next">
        <List>
          <li>
            <TextLink href="/design-library/installation">Installation</TextLink>{" "}
            — running in sixty seconds.
          </li>
          <li>
            <TextLink href="/design-library/foundations/direction">
              Direction
            </TextLink>{" "}
            — how LTR/RTL actually works here.
          </li>
          <li>
            <TextLink href="/design-library/theming">Theming</TextLink> — make
            it yours.
          </li>
        </List>
      </Section>

      <Note title="Built with itself">
        These docs, and the marketing site at oratiq.com, are composed entirely
        from the components in the sidebar — with the LTR/RTL and light/dark
        toggles in the header as the permanent proof.
      </Note>
    </DocsPage>
  );
}
