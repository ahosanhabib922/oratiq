"use client";

import * as React from "react";
import { Construction } from "lucide-react";

import { FORM_DOCS } from "./pages/form-docs";
import { DISPLAY_DOCS } from "./pages/display-docs";
import { OVERLAY_DOCS } from "./pages/overlay-docs";
import { LAYOUT_DOCS } from "./pages/layout-docs";
import { DATA_DOCS } from "./pages/data-docs";
import { PATTERN_DOCS } from "./pages/pattern-docs";
import {
  Empty,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const DOCS: Record<string, () => React.JSX.Element> = {
  ...FORM_DOCS,
  ...DISPLAY_DOCS,
  ...OVERLAY_DOCS,
  ...LAYOUT_DOCS,
  ...DATA_DOCS,
  ...PATTERN_DOCS,
};

export function ComponentDocBody({ slug }: { slug: string }) {
  const Doc = DOCS[slug];

  if (!Doc) {
    return (
      <Empty size="lg" className="rounded-xl border border-dashed border-border">
        <EmptyMedia>
          <Construction />
        </EmptyMedia>
        <EmptyTitle>Not documented yet</EmptyTitle>
        <EmptyDescription>
          The component exists, but this page hasn&apos;t been written. It&apos;s
          listed so the registry stays honest about what ships today.
        </EmptyDescription>
      </Empty>
    );
  }

  return <Doc />;
}

export function hasDocs(slug: string) {
  return slug in DOCS;
}
