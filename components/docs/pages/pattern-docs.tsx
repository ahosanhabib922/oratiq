"use client";

import * as React from "react";

import {
  A11yNotes,
  Note,
  PropsTable,
  Section,
} from "@/components/docs/docs-primitives";

/* Hero demos carry the visuals; these pages document contracts. */

function PageHeaderDocs() {
  return (
    <>
      <Section title="Anatomy">
        <A11yNotes
          items={[
            "PageHeader > PageHeaderTop > (PageHeaderContent + PageHeaderActions) — actions sit on the end edge and flip under RTL.",
            "Renders a semantic <header> with an <h1> title — one per page.",
            "Long titles truncate instead of wrapping the action row off-screen.",
          ]}
        />
      </Section>
      <Note>
        Composition, not configuration: slots are children, so a breadcrumb, a
        tab row, or a status badge drop in without new props.
      </Note>
    </>
  );
}

function SectionHeaderDocs() {
  return (
    <Section title="Props">
      <PropsTable
        props={[
          { name: "title", type: "ReactNode", required: true, description: "The heading (renders an <h2>)." },
          { name: "description", type: "ReactNode", description: "Supporting line under the title." },
          { name: "actions", type: "ReactNode", description: "End-edge slot for buttons or filters." },
          { name: "size", type: '"sm" | "default"', default: '"default"', description: "Heading scale." },
          { name: "divider", type: "boolean", default: "false", description: "Border under the row." },
        ]}
      />
    </Section>
  );
}

function FilterBarDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "The bar is role=toolbar; compose it from Input, Select, and buttons.",
            "FilterChip shows an applied filter as label: value with a labelled remove button.",
            "FilterBarSpacer pushes what follows to the end edge — logical, so it flips under RTL.",
            "The row wraps on small screens instead of overflowing.",
          ]}
        />
      </Section>
      <Section title="Props (FilterChip)">
        <PropsTable
          props={[
            { name: "label", type: "string", required: true, description: "The filter's name." },
            { name: "value", type: "ReactNode", required: true, description: "The applied value (dir=auto)." },
            { name: "onRemove", type: "() => void", description: "Shows the remove button." },
          ]}
        />
      </Section>
    </>
  );
}

function ActivityFeedDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "An ordered list — sequence is meaning, and screen readers announce position.",
            "The connector line runs down the marker column with logical positioning; the feed mirrors under RTL.",
            "Pass `last` on the final item to end the line cleanly.",
            "Titles and descriptions carry dir=auto — activity text is user content in any language.",
          ]}
        />
      </Section>
      <Note>
        Media slot takes anything: a FeaturedIcon for system events, an Avatar
        for people.
      </Note>
    </>
  );
}

function ProgressStepsDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "An <ol> with aria-current=\"step\" on the active item.",
            "Completed steps show a check; pass onStepClick to allow jumping back — forward jumps are deliberately not offered.",
            "Connectors and order follow the writing direction — step 1 starts at the reading edge in both LTR and RTL.",
            "Vertical orientation for tall forms and mobile flows.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "steps", type: "{ title, description? }[]", required: true, description: "The steps, in order." },
            { name: "current", type: "number", required: true, description: "Zero-based active index." },
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout axis." },
            { name: "onStepClick", type: "(index: number) => void", description: "Enables clicking completed steps." },
          ]}
        />
      </Section>
    </>
  );
}

function TreeViewDocs() {
  return (
    <>
      <Section title="Keyboard">
        <A11yNotes
          items={[
            "role=tree with aria-level/aria-expanded/aria-selected — announced as a real tree.",
            "One tab stop (roving tabindex): Up/Down move; the arrow toward the reading direction expands or steps into children; the opposite one collapses or climbs to the parent — inverted automatically under RTL.",
            "Enter/Space selects (and toggles branches); Home/End jump to the ends.",
            "Indentation uses padding-inline-start and the chevron mirrors — the tree grows from the reading edge.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "data", type: "{ id, label, icon?, children? }[]", required: true, description: "The tree." },
            { name: "expanded / defaultExpanded", type: "string[]", description: "Expanded branch ids (controlled / initial)." },
            { name: "selected / onSelectedChange", type: "string", description: "Selection (controlled)." },
            { name: "showDefaultIcons", type: "boolean", default: "true", description: "Folder/file fallbacks when a node has no icon." },
          ]}
        />
      </Section>
    </>
  );
}

function NotificationsDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "Unread state is bold text + a dot on the reading edge + a visually hidden '(unread)' — never colour alone.",
            "Titles and descriptions carry dir=auto for mixed-language inboxes.",
            "The actions slot holds real buttons (accept/decline) — the whole row being clickable is optional via onSelect.",
          ]}
        />
      </Section>
      <Note>
        Presentation only, by design: pair it with Popover or Sheet for the
        panel, and your own data layer for read-state.
      </Note>
    </>
  );
}

export const PATTERN_DOCS: Record<string, () => React.JSX.Element> = {
  "page-header": PageHeaderDocs,
  "section-header": SectionHeaderDocs,
  "filter-bar": FilterBarDocs,
  "activity-feed": ActivityFeedDocs,
  "progress-steps": ProgressStepsDocs,
  "tree-view": TreeViewDocs,
  notifications: NotificationsDocs,
};
