import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Globe2,
  Package,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { CommandBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import { Bubble, BubbleGroup } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

export const metadata: Metadata = {
  title: "Oratiq — the RTL-first design system for Next.js",
  description:
    "Copy-in components on Radix and Tailwind CSS v4 that mirror perfectly under RTL. 62 components, token-driven theming, MIT licensed.",
};

const DOCS = "https://ui.oratiq.com/design-library";
const GITHUB = "https://github.com/ahosanhabib922/oratiq";

/* One mini interface, rendered twice — the product pitch in a single visual. */
function MirrorCard({ dir, label }: { dir: "ltr" | "rtl"; label: string }) {
  return (
    <div dir={dir} className="min-w-0 flex-1">
      <p
        dir="ltr"
        className="mb-2 text-center font-mono text-xs text-muted-foreground"
      >
        {label}
      </p>
      <Card padding="sm" className="gap-3 bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium">Notifications</span>
          <Switch defaultChecked aria-label="Notifications" size="sm" />
        </div>
        <Progress value={64} aria-label="Progress" size="sm" />
        <BubbleGroup side="incoming">
          <Bubble side="incoming" className="text-xs">
            Same code. Zero changes.
          </Bubble>
        </BubbleGroup>
        <div className="hidden gap-2 sm:flex">          <Input size="sm" placeholder="you@example.com" />
          <Button size="sm">Send</Button>
        </div>
      </Card>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-3 text-base text-muted-foreground">{lede}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              O
            </span>
            <span className="text-lg font-semibold">Oratiq</span>
          </a>
          <nav className="ms-auto flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={DOCS}>Docs</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={GITHUB}>
                <span>GitHub</span>
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={`${DOCS}/installation`}>Get started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(52rem 30rem at 50% -6rem, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-2">
          <div>
            <Badge variant="outline" size="sm" className="gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              62 components · MIT · Next.js 16 + Tailwind v4
            </Badge>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Ship interfaces that read{" "}
              <span className="text-primary">both ways.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Oratiq is an RTL-first component distribution for Next.js —
              copy-in components on Radix and Tailwind that mirror perfectly
              for the billion people who read right-to-left. Same developer
              experience you know. World-ready by default.
            </p>

            <div className="mt-8 max-w-md">
              <CommandBlock command="npx @oratiq-js/ui init" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href={DOCS}>
                  Browse components
                  <ArrowRight className="rtl-flip" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={GITHUB}>
                  <Star />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* The pitch, visualised: one codebase, two directions. */}
          <div className="flex gap-4">
            <MirrorCard dir="ltr" label='dir="ltr"' />
            <MirrorCard dir="rtl" label='dir="rtl"' />
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center sm:grid-cols-4">
          {[
            ["62", "components, all installable"],
            ["2", "writing directions, one codebase"],
            ["0", "physical left/right classes"],
            ["100%", "MIT — free, forever"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-4xl font-semibold tnum text-primary">{stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Why Oratiq"
          title="RTL isn't a patch here. It's the architecture."
          lede="Most libraries bolt right-to-left on afterwards — and it shows. Oratiq was built the other way around."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Globe2 />,
              title: "Logical properties everywhere",
              body: "ms-, pe-, start-, end- — never left or right. Layouts, radii, and borders mirror under dir=\"rtl\" with zero per-component work.",
            },
            {
              icon: <ShieldCheck />,
              title: "Bidi-safe by default",
              body: "Phone numbers, shortcuts, OTP codes, and URLs are isolated so the Unicode bidi algorithm can't scramble them mid-sentence.",
            },
            {
              icon: <Sparkles />,
              title: "Direction-aware behaviour",
              body: "Keyboard navigation, sheet and toast edges, carousel scroll, progress fill, and calendar grids all follow the writing direction.",
            },
            {
              icon: <Palette />,
              title: "Token-driven theming",
              body: "Three layers: primitive ramps → semantic roles → utilities. Re-branding the whole system is a CSS override, never a component edit.",
            },
            {
              icon: <Package />,
              title: "You own the code",
              body: "The CLI copies components into your repo — with their dependencies. Edit any line. No lock-in, no version treadmill, MIT licensed.",
            },
            {
              icon: <Check />,
              title: "Built for AI agents too",
              body: "A machine-readable llms.txt publishes the conventions, tokens, and component index — so your coding agent writes idiomatic Oratiq.",
            },
          ].map((feature) => (
            <Card key={feature.title} padding="default" className="gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary [&_svg]:size-5">
                {feature.icon}
              </span>
              <h3 className="text-base font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Three steps ─────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle
            eyebrow="60 seconds to first component"
            title="Install. Add. Compose."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Initialise",
                body: "Detects your layout, writes the token layer, the cn() helper, and the Providers wrapper. Zero questions asked.",
                command: "npx @oratiq-js/ui init",
              },
              {
                step: "02",
                title: "Add components",
                body: "Each component arrives with everything it depends on, copied into your repo as plain files you own.",
                command: "npx @oratiq-js/ui add button dialog field",
              },
              {
                step: "03",
                title: "Compose",
                body: "Import from your own folder and build. Dark mode, RTL, and keyboard support are already inside.",
                command: 'import { Button } from "@/components/ui/button"',
              },
            ].map((item) => (
              <Card key={item.step} padding="default" className="gap-3">
                <p className="font-mono text-sm text-primary">{item.step}</p>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
                <div
                  dir="ltr"
                  className="mt-2 overflow-x-auto rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-xs whitespace-nowrap"
                >
                  {item.command}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Receipts ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="The receipts"
          title="Measured, not marketed."
          lede="We counted the direction-dependent classes in the most popular copy-in library's public registry, then in ours."
        />
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/60 text-start">
                <th className="px-5 py-3 text-start font-medium">
                  In the component source
                </th>
                <th className="px-5 py-3 text-center font-medium">shadcn/ui</th>
                <th className="px-5 py-3 text-center font-medium text-primary">
                  Oratiq
                </th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-5 [&_td]:py-3">
              {[
                ["Physical classes that break in RTL (left-, pr-, …)", "94", "1"],
                ["Logical, direction-aware classes (start-, pe-, …)", "0", "75"],
                ["Bidi isolation (<bdi>, dir=)", "0", "24"],
                ["Combobox, Date Picker, Data Table installable via CLI", "—", "✓"],
              ].map(([label, them, us]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <td className="text-muted-foreground">{label}</td>
                  <td className="text-center tnum">{them}</td>
                  <td className="text-center font-medium tnum text-primary">
                    {us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-muted-foreground">
          Counted across both public registries, July 2026. shadcn/ui is
          excellent — Oratiq exists for teams whose users also read
          right-to-left.
        </p>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(40rem 20rem at 50% 100%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 70%)",
            }}
          />
          <h2 className="text-4xl font-semibold tracking-tight text-balance">
            Your next interface reads both ways.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            One command. Sixty seconds. Every component on this page is Oratiq —
            flip your browser to RTL and watch it all mirror.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CommandBlock command="npx @oratiq-js/ui init" />
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg" asChild>
              <a href={DOCS}>
                Read the docs
                <ArrowRight className="rtl-flip" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Oratiq · MIT licensed</p>
          <nav className="flex flex-wrap gap-5">
            <a className="hover:text-foreground" href={DOCS}>
              Docs
            </a>
            <a className="hover:text-foreground" href={`${DOCS}/theming`}>
              Theming
            </a>
            <a className="hover:text-foreground" href={GITHUB}>
              GitHub
            </a>
            <a
              className="hover:text-foreground"
              href="https://www.npmjs.com/package/@oratiq-js/ui"
            >
              npm
            </a>
            <a className="hover:text-foreground" href="https://ui.oratiq.com/llms.txt">
              llms.txt
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
