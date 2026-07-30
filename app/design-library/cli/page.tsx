import type { Metadata } from "next";

import { DocsPage, Note, PropsTable, Section } from "@/components/docs/docs-primitives";
import { CommandBlock } from "@/components/docs/code-block";
import { Code, Text } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "CLI",
  description: "Every command and flag in @oratiq-js/ui.",
};

export default function CliPage() {
  return (
    <DocsPage title="CLI" description="Every command and flag in @oratiq-js/ui.">
      <Section
        title="init"
        description="Sets a project up: components.json, the token layer, cn(), and the Providers wrapper. Zero prompts — it detects your layout and prints what it chose."
      >
        <CommandBlock command="npx @oratiq-js/ui init" />
        <div className="mt-4">
          <PropsTable
            props={[
              { name: "--ui <dir>", type: "string", default: "components/ui (or src/…)", description: "Where components are written." },
              { name: "--lib <dir>", type: "string", default: "lib (or src/lib)", description: "Where cn() is written." },
              { name: "--css <path>", type: "string", default: "detected globals.css", description: "Your Tailwind CSS file. If it exists, the token layer is written beside it as oratiq-theme.css." },
              { name: "--registry <url>", type: "string", default: "https://ui.oratiq.com/r", description: "Registry to fetch from — point it at a fork to self-host." },
            ]}
          />
        </div>
      </Section>

      <Section
        title="add"
        description="Copies components into your project. Transitive registry dependencies come along automatically — dialog brings its popover, spinner, and utils."
      >
        <CommandBlock command="npx @oratiq-js/ui add button dialog field" />
        <CommandBlock className="mt-3" command="npx @oratiq-js/ui add --all" />
        <div className="mt-4">
          <PropsTable
            props={[
              { name: "--all", type: "boolean", default: "false", description: "Copies every component in the registry." },
              { name: "--overwrite", type: "boolean", default: "false", description: "Replaces files that already exist. Without it, your edited files are always skipped." },
            ]}
          />
        </div>
        <Note title="Updating a component">
          Re-run with <Code>--overwrite</Code>, then review with{" "}
          <Code>git diff</Code>. Updates are always explicit — the CLI never
          touches your files behind your back.
        </Note>
      </Section>

      <Section title="list" description="Everything available in the registry.">
        <CommandBlock command="npx @oratiq-js/ui list" />
      </Section>

      <Section
        title="Configuration"
        description="components.json in your project root — written by init, read by add."
      >
        <pre
          dir="ltr"
          className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-xs leading-relaxed"
        >{`{
  "tailwind": { "css": "app/globals.css" },
  "aliases": {
    "ui": "components/ui",
    "lib": "lib",
    "components": "components"
  },
  "registry": "https://ui.oratiq.com/r"
}`}</pre>
        <Text size="sm" tone="muted" className="mt-3">
          The <Code>ORATIQ_REGISTRY</Code> environment variable overrides the
          default registry for <Code>init</Code> — useful in CI and for testing
          a staging registry.
        </Text>
      </Section>

      <Section title="Non-interactive / CI">
        <CommandBlock command="npx @oratiq-js/ui init --registry https://ui.oratiq.com/r" />
        <Text size="sm" tone="muted" className="mt-3">
          Every command runs without a TTY. Agents and pipelines get the same
          behaviour a developer does.
        </Text>
      </Section>
    </DocsPage>
  );
}
