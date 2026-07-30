"use client";

import * as React from "react";
import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";

import {
  A11yNotes,
  DoDont,
  Note,
  Preview,
  Section,
  Specimens,
} from "@/components/docs/docs-primitives";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

/* ── Colors ─────────────────────────────────────────────────────────────── */

function Swatch({
  token,
  className,
  note,
}: {
  token: string;
  className: string;
  note?: string;
}) {
  return (
    <div className="min-w-0">
      <div className={cn("h-16 rounded-lg border border-border", className)} />
      <p className="mt-2 truncate font-mono text-xs text-foreground">{token}</p>
      {note && <p className="truncate text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function ColorsDocs() {
  return (
    <>
      <Section
        title="Three layers"
        description="Components only ever reference layer 2. That's what makes re-theming a token edit instead of a refactor."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", title: "Primitive ramps", body: "Raw values: --brand-500, --neutral-800. Never referenced by a component." },
            { n: "2", title: "Semantic roles", body: "What a colour means: --primary, --muted, --destructive. Components use only these." },
            { n: "3", title: "Theme mapping", body: "@theme inline exposes roles as utilities: bg-primary, text-muted-foreground." },
          ].map((layer) => (
            <Card key={layer.n} padding="sm">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {layer.n}
              </span>
              <p className="font-medium">{layer.title}</p>
              <Text size="sm" tone="muted">{layer.body}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Semantic roles"
        description="Each role pairs a surface with a foreground guaranteed to meet contrast on it. Toggle the theme in the header — every pair holds."
      >
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Swatch token="--background" className="bg-background" />
          <Swatch token="--foreground" className="bg-foreground" />
          <Swatch token="--card" className="bg-card" />
          <Swatch token="--popover" className="bg-popover" />
          <Swatch token="--primary" className="bg-primary" note="Brand action" />
          <Swatch token="--secondary" className="bg-secondary" />
          <Swatch token="--muted" className="bg-muted" note="Recessed surface" />
          <Swatch token="--accent" className="bg-accent" note="Hover surface" />
          <Swatch token="--destructive" className="bg-destructive" />
          <Swatch token="--success" className="bg-success" />
          <Swatch token="--warning" className="bg-warning" />
          <Swatch token="--info" className="bg-info" />
          <Swatch token="--border" className="bg-border" />
          <Swatch token="--input" className="bg-input" note="Control borders" />
          <Swatch token="--ring" className="bg-ring" note="Focus indicator" />
        </div>
      </Section>

      <Section title="Pairings" description="Never mix a foreground from one role onto another role's surface.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["bg-primary text-primary-foreground", "Primary"],
            ["bg-secondary text-secondary-foreground", "Secondary"],
            ["bg-muted text-muted-foreground", "Muted"],
            ["bg-destructive text-destructive-foreground", "Destructive"],
            ["bg-success text-success-foreground", "Success"],
            ["bg-warning text-warning-foreground", "Warning"],
          ].map(([cls, label]) => (
            <div key={label} className={cn("rounded-lg p-4", cls)}>
              <p className="font-medium">{label}</p>
              <p className="mt-0.5 font-mono text-xs opacity-80">{cls}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Brand ramp" description="Kept addressable for marketing surfaces and charts, where a specific step is the point.">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-11">
          {/* Written out rather than interpolated — Tailwind scans source text,
              so `bg-brand-${step}` would never be generated. */}
          {[
            ["50", "bg-brand-50"],
            ["100", "bg-brand-100"],
            ["200", "bg-brand-200"],
            ["300", "bg-brand-300"],
            ["400", "bg-brand-400"],
            ["500", "bg-brand-500"],
            ["600", "bg-brand-600"],
            ["700", "bg-brand-700"],
            ["800", "bg-brand-800"],
            ["900", "bg-brand-900"],
            ["950", "bg-brand-950"],
          ].map(([step, cls]) => (
            <div key={step}>
              <div className={cn("h-14 rounded-md border border-border", cls)} />
              <p className="mt-1.5 text-center font-mono text-xs text-muted-foreground">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Re-theming">
        <Note title="Override layer 2, nothing else">
          To ship your own brand, redefine the semantic roles in your own CSS —{" "}
          <Code>--primary</Code>, <Code>--primary-foreground</Code>,{" "}
          <Code>--ring</Code>, and the dark-mode block. Every component picks it
          up. You should never need to edit a component file to change a colour;
          if you do, that&apos;s a bug in the system, not in your theme.
        </Note>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Foreground/background pairs meet WCAG AA (4.5:1) for body text in both themes.",
            "Borders and focus rings meet the 3:1 non-text contrast minimum.",
            "Status is never carried by colour alone — pair it with an icon or text.",
            "The brand green is used as a surface with dark text, never as light text on dark: #CBFE00 on #1D1D1D passes, but the reverse fails at small sizes.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Typography ─────────────────────────────────────────────────────────── */

function TypographyFoundationDocs() {
  const scale = [
    ["text-7xl", "60 / 68"],
    ["text-6xl", "48 / 56"],
    ["text-5xl", "40 / 48"],
    ["text-4xl", "32 / 42"],
    ["text-3xl", "28 / 36"],
    ["text-2xl", "24 / 32"],
    ["text-xl", "20 / 28"],
    ["text-lg", "18 / 26"],
    ["text-base", "16 / 24"],
    ["text-sm", "14 / 20"],
    ["text-xs", "12 / 20"],
    ["text-2xs", "10 / 18"],
  ];

  return (
    <>
      <Section
        title="The scale"
        description="Standard Tailwind step names, so what you already type works. Each step carries its own line-height."
      >
        <div className="overflow-hidden rounded-xl border border-border">
          {scale.map(([cls, spec], i) => (
            <div
              key={cls}
              className={cn(
                "flex flex-wrap items-baseline justify-between gap-4 px-5 py-4",
                i > 0 && "border-t border-border",
              )}
            >
              <p className={cn("min-w-0 truncate", cls)}>Grumpy wizards make a toxic brew</p>
              <div className="shrink-0 text-end">
                <p className="font-mono text-xs text-foreground">{cls}</p>
                <p className="font-mono text-xs text-muted-foreground">{spec}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Weights">
        <Preview align="stretch">
          <p className="text-xl font-light">Light 300 — display only</p>
          <p className="text-xl font-normal">Regular 400 — body copy</p>
          <p className="text-xl font-medium">Medium 500 — labels and UI</p>
          <p className="text-xl font-semibold">Semibold 600 — headings</p>
          <p className="text-xl font-bold">Bold 700 — sparingly</p>
        </Preview>
      </Section>

      <Section title="Guidance">
        <DoDont
          items={[
            {
              type: "do",
              text: "Use tabular figures for anything that changes in place — timers, counters, stat tiles. The .tnum utility stops digits from jittering.",
              example: <span className="text-2xl tnum">01:24:59</span>,
            },
            {
              type: "dont",
              text: "Don't use proportional figures for live numbers. Each digit has a different width, so the layout twitches on every tick.",
              example: <span className="text-2xl">01:24:59</span>,
            },
          ]}
        />
      </Section>

      <Note title="Why not semantic names?">
        An earlier version of this system used names like{" "}
        <Code>text-body-01</Code>. Two problems: developers had to learn a
        mapping before they could type anything, and tailwind-merge couldn&apos;t
        tell <Code>text-body-01</Code> (a size) from{" "}
        <Code>text-body</Code> (a colour) — so it silently dropped colours from
        every component that set both. Standard names avoid both.
      </Note>
    </>
  );
}

/* ── Spacing ────────────────────────────────────────────────────────────── */

function SpacingDocs() {
  const steps = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

  return (
    <>
      <Section title="The scale" description="Tailwind's 4px base. One unit = 0.25rem.">
        <div className="overflow-hidden rounded-xl border border-border">
          {steps.map((step, i) => (
            <div
              key={step}
              className={cn(
                "flex items-center gap-5 px-5 py-2.5",
                i > 0 && "border-t border-border",
              )}
            >
              <span className="w-12 shrink-0 font-mono text-xs text-foreground">
                {step}
              </span>
              <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">
                {step * 4}px
              </span>
              <span
                className="h-4 rounded-xs bg-primary"
                style={{ width: `${step * 4}px` }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Density"
        description="Components use a narrow band of the scale. Padding grows with control height; gaps stay tight."
      >
        <Specimens
          columns={3}
          items={[
            { label: "gap-1.5", caption: "Inside a control", node: <div className="flex gap-1.5"><div className="size-8 rounded bg-muted" /><div className="size-8 rounded bg-muted" /></div> },
            { label: "gap-3", caption: "Between related controls", node: <div className="flex gap-3"><div className="size-8 rounded bg-muted" /><div className="size-8 rounded bg-muted" /></div> },
            { label: "gap-6", caption: "Between sections", node: <div className="flex gap-6"><div className="size-8 rounded bg-muted" /><div className="size-8 rounded bg-muted" /></div> },
          ]}
        />
      </Section>

      <Note title="Logical, always">
        Use <Code>ps-*</Code> / <Code>pe-*</Code> and <Code>ms-*</Code> /{" "}
        <Code>me-*</Code> instead of <Code>pl-*</Code> / <Code>pr-*</Code>.
        Physical directions are the single most common reason a component breaks
        in RTL.
      </Note>
    </>
  );
}

/* ── Radius ─────────────────────────────────────────────────────────────── */

function RadiusDocs() {
  return (
    <>
      <Section
        title="Derived from one value"
        description="Every step is calc() off --radius. Change that one variable and the whole system's corner language shifts with it."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {[
            ["rounded-xs", "4px"],
            ["rounded-sm", "6px"],
            ["rounded-md", "8px"],
            ["rounded-lg", "12px"],
            ["rounded-xl", "16px"],
            ["rounded-2xl", "20px"],
            ["rounded-full", "pill"],
          ].map(([cls, px]) => (
            <div key={cls} className="text-center">
              <div className={cn("h-20 border border-border bg-muted", cls)} />
              <p className="mt-2 font-mono text-xs text-foreground">{cls}</p>
              <p className="font-mono text-xs text-muted-foreground">{px}</p>
            </div>
          ))}
        </div>
      </Section>

      <Note title="Nesting rule">
        An inner radius should be the outer radius minus the padding between
        them. A 16px card with 8px padding wants an 8px inner radius — matching
        them makes the inner corner look too round.
      </Note>
    </>
  );
}

/* ── Elevation ──────────────────────────────────────────────────────────── */

function ElevationDocs() {
  return (
    <>
      <Section
        title="Levels"
        description="Shadows carry most of the signal in light mode and very little in dark. Dark themes lift with surface colour instead."
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {["shadow-xs", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl"].map(
            (cls) => (
              <div key={cls} className="text-center">
                <div className={cn("h-20 rounded-lg bg-card", cls)} />
                <p className="mt-3 font-mono text-xs text-muted-foreground">{cls}</p>
              </div>
            ),
          )}
        </div>
      </Section>

      <Section title="Surface lift" description="In dark mode, each level up is a lighter surface — not a heavier shadow.">
        <Preview>
          <div className="flex flex-col gap-2">
            {[
              ["bg-background", "--background"],
              ["bg-card", "--card"],
              ["bg-popover", "--popover"],
              ["bg-muted", "--muted"],
            ].map(([cls, token]) => (
              <div
                key={token}
                className={cn(
                  "flex h-12 w-64 items-center rounded-lg border border-border px-4 font-mono text-xs",
                  cls,
                )}
              >
                {token}
              </div>
            ))}
          </div>
        </Preview>
      </Section>
    </>
  );
}

/* ── Motion ─────────────────────────────────────────────────────────────── */

function MotionDocs() {
  const [play, setPlay] = React.useState(0);

  return (
    <>
      <Section title="Durations">
        <div className="overflow-hidden rounded-xl border border-border">
          {[
            ["--duration-instant", "75ms", "State flips: hover, active"],
            ["--duration-fast", "150ms", "Small transitions: colour, opacity"],
            ["--duration-normal", "250ms", "Entering and leaving elements"],
            ["--duration-slow", "400ms", "Large surfaces: sheets, drawers"],
            ["--duration-slower", "600ms", "Progress and celebratory motion"],
          ].map(([token, value, usage], i) => (
            <div
              key={token}
              className={cn(
                "flex flex-wrap items-center gap-4 px-5 py-3.5",
                i > 0 && "border-t border-border",
              )}
            >
              <span className="w-44 shrink-0 font-mono text-xs text-foreground">{token}</span>
              <span className="w-16 shrink-0 font-mono text-xs tnum text-muted-foreground">{value}</span>
              <span className="text-sm text-muted-foreground">{usage}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Easing" description="Press play to compare. Standard easings feel mechanical; quart-out decelerates the way physical objects do.">
        <Preview align="stretch">
          <Button size="sm" className="self-start" onClick={() => setPlay((p) => p + 1)}>
            Play
            <ArrowRight className="rtl-flip" />
          </Button>
          <div className="mt-2 flex flex-col gap-4">
            {[
              ["linear", "linear"],
              ["ease-out", "ease-out"],
              ["--ease-out-quart", "cubic-bezier(0.25,1,0.5,1)"],
              ["--ease-spring", "cubic-bezier(0.34,1.56,0.64,1)"],
            ].map(([label, timing]) => (
              <div key={label}>
                <p className="mb-1.5 font-mono text-xs text-muted-foreground">{label}</p>
                <div className="relative h-8 rounded-full bg-muted">
                  <span
                    key={`${label}-${play}`}
                    className="absolute top-1 size-6 rounded-full bg-primary"
                    style={{
                      animation: `slide 900ms ${timing} forwards`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <style>{`@keyframes slide { from { inset-inline-start: 0.25rem } to { inset-inline-start: calc(100% - 1.75rem) } }`}</style>
        </Preview>
      </Section>

      <Note title="Reduced motion is not optional">
        The base layer collapses every animation and transition to 0.01ms under{" "}
        <Code>prefers-reduced-motion: reduce</Code>. Vestibular disorders make
        large-surface motion genuinely nauseating — this isn&apos;t a
        preference toggle, it&apos;s an accessibility requirement.
      </Note>
    </>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function IconsDocs() {
  return (
    <>
      <Section
        title="Sizing"
        description="Icons inherit size from their container via [&_svg]:size-*, never the other way round. One stroke width across the set."
      >
        <Preview>
          {(["size-3.5", "size-4", "size-5", "size-6", "size-8"] as const).map((cls) => (
            <div key={cls} className="flex flex-col items-center gap-2">
              <TrendingUp className={cls} />
              <span className="font-mono text-xs text-muted-foreground">{cls}</span>
            </div>
          ))}
        </Preview>
      </Section>

      <Section
        title="Mirroring"
        description="Directional glyphs flip under RTL. Everything else must not — flip the toggle above to see it."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-success/30 bg-success/5 p-5">
            <p className="mb-4 text-sm font-medium">Mirror these</p>
            <div className="flex items-center gap-5 text-foreground">
              <ChevronRight className="size-6 rtl-flip" />
              <ArrowRight className="size-6 rtl-flip" />
              <TrendingUp className="size-6 rtl-flip" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Arrows, chevrons, trend lines, undo/redo, text alignment — anything
              whose meaning depends on which way it points.
            </p>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <p className="mb-4 text-sm font-medium">Never mirror these</p>
            <div className="flex items-center gap-5 text-foreground">
              <span className="text-2xl">🕐</span>
              <span className="text-2xl">✓</span>
              <span className="text-2xl">🔍</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Clocks, checkmarks, logos, magnifiers, media play buttons, and any
              glyph containing numerals or letters.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Decorative icons beside text are aria-hidden — the text already carries the meaning.",
            "Icon-only controls need an aria-label describing the action, not the glyph. 'Delete workout', not 'trash icon'.",
            "Never encode meaning in an icon alone where the action is destructive or irreversible.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Direction ──────────────────────────────────────────────────────────── */

function DirectionDocs() {
  return (
    <>
      <Section
        title="How it works"
        description="Three things have to agree, or RTL breaks in ways that are hard to trace."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "CSS", body: "dir on <html> drives logical properties (ms-, pe-, start-) and Tailwind's rtl: variant." },
            { title: "Keyboard", body: "Radix's DirectionProvider inverts arrow-key navigation in menus, tabs, and sliders." },
            { title: "React", body: "useDirection() exposes the value for the rare case where CSS alone can't express it." },
          ].map((layer) => (
            <Card key={layer.title} padding="sm">
              <p className="font-medium">{layer.title}</p>
              <Text size="sm" tone="muted">{layer.body}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="The rules">
        <DoDont
          items={[
            {
              type: "do",
              text: "Use logical properties everywhere: ms-4, pe-2, start-0, text-start, rounded-s-lg, border-e.",
            },
            {
              type: "dont",
              text: "Never use physical ones in a component: ml-4, pr-2, left-0, text-left, rounded-l-lg, border-r.",
            },
            {
              type: "do",
              text: "Isolate inherently-LTR strings — phone numbers, IDs, URLs, version strings, shortcut notation — with <bdi dir=\"ltr\">.",
            },
            {
              type: "dont",
              text: "Don't let a bidi algorithm reorder a phone number. +880 1712 345678 becomes 345678 1712 880+ and users dial the wrong thing.",
            },
          ]}
        />
      </Section>

      <Section title="Bidi isolation" description="Switch the header toggle to RTL to see the difference.">
        <Preview align="stretch">
          <div className="flex flex-col gap-3 text-base">
            <p className="text-muted-foreground">
              Unisolated: <span className="tnum text-foreground">+880 1712 345678</span>
            </p>
            <p className="text-muted-foreground">
              Isolated: <bdi dir="ltr" className="tnum text-foreground">+880 1712 345678</bdi>
            </p>
          </div>
        </Preview>
      </Section>

      <Note title="Test both, always">
        Every component in this library is reviewed in both directions before it
        ships. The toggle in the header isn&apos;t a demo feature — it&apos;s the
        review tool.
      </Note>
    </>
  );
}

export const FOUNDATION_DOCS: Record<string, () => React.JSX.Element> = {
  colors: ColorsDocs,
  typography: TypographyFoundationDocs,
  spacing: SpacingDocs,
  radius: RadiusDocs,
  elevation: ElevationDocs,
  motion: MotionDocs,
  icons: IconsDocs,
  direction: DirectionDocs,
};
