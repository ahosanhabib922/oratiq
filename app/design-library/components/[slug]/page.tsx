import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ALL_ITEMS, getItem } from "@/lib/registry";
import { DocsPage } from "@/components/docs/docs-primitives";
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

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) notFound();

  return (
    <DocsPage
      title={item.name}
      description={item.description}
      status={item.status}
      dependencies={item.dependencies}
    >
      <ComponentDocBody slug={slug} />
    </DocsPage>
  );
}
