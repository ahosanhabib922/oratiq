"use client";

import * as React from "react";
import { Note, Section } from "@/components/docs/docs-primitives";
import { A11yNotes } from "@/components/docs/docs-primitives";

function BlockDocsBody() {
  return (
    <>
      <Section title="What a block is">
        <A11yNotes
          items={[
            "A full section, composed from the components above it in the sidebar — copy it in, replace the demo content, ship.",
            "Blocks read the same semantic tokens as everything else: your brand override applies instantly.",
            "Logical properties throughout — flip dir on <html> and the section mirrors.",
          ]}
        />
      </Section>
      <Note title="Content is yours">
        The text, links, and data inside are demo content by design. Blocks are
        starting points, not configurable widgets — edit the file directly.
      </Note>
    </>
  );
}

const SLUGS = [
  "banner","header-navigation","hero-section","header-section","features-section",
  "metrics-section","social-proof","testimonial-section","pricing-section",
  "faq-section","cta-section","newsletter-cta","blog-section","team-section",
  "careers-section","contact-section","footer",
];

export const BLOCK_DOCS: Record<string, () => React.JSX.Element> =
  Object.fromEntries(SLUGS.map((slug) => [slug, BlockDocsBody]));
