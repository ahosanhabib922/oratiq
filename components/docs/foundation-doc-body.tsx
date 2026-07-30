"use client";

import { FOUNDATION_DOCS } from "./pages/foundation-docs";

export function FoundationDocBody({ slug }: { slug: string }) {
  const Doc = FOUNDATION_DOCS[slug];
  if (!Doc) return null;
  return <Doc />;
}
