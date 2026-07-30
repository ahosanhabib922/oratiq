"use client";

import * as React from "react";
import { A11yNotes, Note, Section } from "@/components/docs/docs-primitives";
import { CommandBlock } from "@/components/docs/code-block";
import { DemoBlock } from "@/components/docs/demo-block";

/**
 * Each block category page shows every style: the hero demo is style 01,
 * and the styles below each carry their own install command. Variants are
 * registry items too — the sidebar just doesn't enumerate them.
 */
const VARIANTS: Record<string, string[]> = {
  banner: ["banner-02", "banner-03", "banner-04", "banner-05", "banner-06"],
  "header-navigation": ["header-navigation-02", "header-navigation-03", "header-navigation-04", "header-navigation-05", "header-navigation-06"],
  "hero-section": ["hero-section-02", "hero-section-03", "hero-section-04", "hero-section-05", "hero-section-06"],
  "header-section": ["header-section-02", "header-section-03", "header-section-04", "header-section-05", "header-section-06"],
  "features-section": ["features-section-02", "features-section-03", "features-section-04", "features-section-05", "features-section-06"],
  "metrics-section": ["metrics-section-02", "metrics-section-03", "metrics-section-04", "metrics-section-05", "metrics-section-06"],
  "social-proof": ["social-proof-02", "social-proof-03", "social-proof-04", "social-proof-05", "social-proof-06"],
  "testimonial-section": ["testimonial-section-02", "testimonial-section-03", "testimonial-section-04", "testimonial-section-05", "testimonial-section-06"],
  "pricing-section": ["pricing-section-02", "pricing-section-03", "pricing-section-04", "pricing-section-05", "pricing-section-06"],
  "faq-section": ["faq-section-02", "faq-section-03", "faq-section-04", "faq-section-05", "faq-section-06"],
  "cta-section": ["cta-section-02", "cta-section-03", "cta-section-04", "cta-section-05", "cta-section-06"],
  "newsletter-cta": ["newsletter-cta-02", "newsletter-cta-03", "newsletter-cta-04", "newsletter-cta-05", "newsletter-cta-06"],
  "blog-section": ["blog-section-02", "blog-section-03", "blog-section-04", "blog-section-05", "blog-section-06"],
  "team-section": ["team-section-02", "team-section-03", "team-section-04", "team-section-05", "team-section-06"],
  "careers-section": ["careers-section-02", "careers-section-03", "careers-section-04", "careers-section-05", "careers-section-06"],
  footer: ["footer-02", "footer-03", "footer-04", "footer-05", "footer-06"],
  "contact-section": ["contact-section-02", "contact-section-03", "contact-section-04", "contact-section-05", "contact-section-06"],
};

function makeBody(slug: string) {
  return function BlockDocsBody() {
    const variants = VARIANTS[slug] ?? [];
    return (
      <>
        {variants.map((variant, i) => (
          <Section key={variant} title={`Style ${String(i + 2).padStart(2, "0")}`}>
            <DemoBlock name={`${variant}-demo`} align="stretch" />
            <CommandBlock
              className="mt-3"
              command={`npx @oratiq-js/ui add ${variant}`}
            />
          </Section>
        ))}

        <Section title="What a block is">
          <A11yNotes
            items={[
              "A full section, composed from the components in the sidebar — copy it in, replace the demo content, ship.",
              "Every style is its own registry item: the command under each preview installs exactly that file.",
              "Blocks read the same semantic tokens as everything else — your brand override applies instantly.",
              "Logical properties throughout: flip dir on <html> and any style mirrors.",
            ]}
          />
        </Section>
        <Note title="Content is yours">
          The text, links, and data inside are demo content by design. Blocks
          are starting points, not configurable widgets — edit the file
          directly.
        </Note>
      </>
    );
  };
}

export const BLOCK_DOCS: Record<string, () => React.JSX.Element> =
  Object.fromEntries(Object.keys(VARIANTS).map((slug) => [slug, makeBody(slug)]));
