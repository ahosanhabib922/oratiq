import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { FOUNDATIONS } from "@/lib/registry";
import { DocsPage } from "@/components/docs/docs-primitives";
import { FoundationDocBody } from "@/components/docs/foundation-doc-body";

export function generateStaticParams() {
  return FOUNDATIONS.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = FOUNDATIONS.items.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: item.name, description: item.description };
}

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = FOUNDATIONS.items.find((i) => i.slug === slug);

  if (!item) notFound();

  return (
    <DocsPage title={item.name} description={item.description}>
      <FoundationDocBody slug={slug} />
    </DocsPage>
  );
}
