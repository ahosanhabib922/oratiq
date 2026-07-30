import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ALL_ITEMS, getItem } from "@/lib/registry";
import { getComponentSource } from "@/lib/component-source";
import { DocsPage, Section } from "@/components/docs/docs-primitives";
import { CodeBlock, CommandBlock } from "@/components/docs/code-block";
import { ComponentDocBody } from "@/components/docs/component-doc-body";

export function generateStaticParams() {
  return ALL_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return { title: item.name, description: item.description };
}

function usageSnippet(file: string, exports: string[]) {
  // The import line is the part people actually copy. Cap the list so a
  // component with twenty exports still produces a readable snippet.
  const shown = exports.slice(0, 6);
  const suffix = exports.length > shown.length ? ", /* … */" : "";
  return `import { ${shown.join(", ")}${suffix} } from "@/components/ui/${file}";`;
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) notFound();

  const source = await getComponentSource(slug);

  return (
    <DocsPage
      title={item.name}
      description={item.description}
      status={item.status}
      dependencies={item.dependencies}
    >
      {source && (
        <>
          <Section
            title="Installation"
            description="Copies the component — plus anything it depends on — into your project. The code is yours after this."
          >
            <CommandBlock command={`npx @oratiq-js/ui add ${source.file}`} />
            {source.dependencies.length > 0 && (
              <p className="mt-3 text-xs text-muted-foreground">
                The CLI will ask you to install:{" "}
                <code dir="ltr" className="font-mono">
                  {source.dependencies.join(", ")}
                </code>
              </p>
            )}
          </Section>

          {source.exports.length > 0 && (
            <Section title="Usage">
              <CodeBlock
                label={`import`}
                code={usageSnippet(source.file, source.exports)}
              />
            </Section>
          )}
        </>
      )}

      <ComponentDocBody slug={slug} />

      {source && (
        <Section
          title="Source"
          description="The full component, exactly what the CLI copies. Prefer the CLI so registry dependencies come along — but copy-paste works too."
        >
          <CodeBlock
            label={`components/ui/${source.file}.tsx`}
            code={source.source}
            maxHeight={420}
          />
        </Section>
      )}
    </DocsPage>
  );
}
