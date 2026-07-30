"use client";

import * as React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Dumbbell,
  Info,
  MoreHorizontal,
  Plus,
  Search,
  XCircle,
} from "lucide-react";

import {
  A11yNotes,
  DoDont,
  Note,
  Preview,
  PropsTable,
  Section,
  Specimens,
} from "@/components/docs/docs-primitives";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Progress, ProgressCircle } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Blockquote,
  Code,
  Heading,
  List,
  Text,
  TextLink,
} from "@/components/ui/typography";

/* ── Typography ─────────────────────────────────────────────────────────── */

function TypographyDocs() {
  return (
    <>
      <Section title="Headings" description="Visual level is decoupled from the HTML tag — use `as` to keep the document outline correct.">
        <Preview align="stretch">
          <Heading level={1}>The quick brown fox</Heading>
          <Heading level={2}>The quick brown fox</Heading>
          <Heading level={3}>The quick brown fox</Heading>
          <Heading level={4}>The quick brown fox</Heading>
          <Heading level={5}>The quick brown fox</Heading>
          <Heading level={6}>The quick brown fox</Heading>
        </Preview>
      </Section>

      <Section title="Text">
        <Specimens
          columns={2}
          items={[
            { label: 'size="lg"', node: <Text size="lg">Body large</Text> },
            { label: 'size="default"', node: <Text>Body default</Text> },
            { label: 'size="sm"', node: <Text size="sm">Body small</Text> },
            { label: 'size="xs"', node: <Text size="xs">Body extra small</Text> },
            { label: 'tone="muted"', node: <Text tone="muted">Muted secondary copy</Text> },
            { label: 'tone="destructive"', node: <Text tone="destructive">Something went wrong</Text> },
          ]}
        />
      </Section>

      <Section title="Inline and block">
        <Preview align="stretch">
          <Text>
            Install with <Code>npm i @oratiq/ui</Code>, then read the{" "}
            <TextLink href="#">theming guide</TextLink>.
          </Text>
          <Blockquote>
            A design system is a product that serves other products.
          </Blockquote>
          <List>
            <li>Semantic tokens, not raw colour values</li>
            <li>Logical properties, not left and right</li>
            <li>Every state documented, not just the happy path</li>
          </List>
          <List ordered>
            <li>Install the package</li>
            <li>Add the token layer</li>
            <li>Wrap your app in the providers</li>
          </List>
        </Preview>
      </Section>

      <Note title="Line length">
        Body copy reads best between 45 and 75 characters per line. The docs use{" "}
        <Code>max-w-4xl</Code> for exactly this reason — don&apos;t let text
        spans grow to the full width of a desktop viewport.
      </Note>
    </>
  );
}

/* ── Badge ──────────────────────────────────────────────────────────────── */

function BadgeDocs() {
  return (
    <>
      <Section title="Variants">
        <Specimens
          columns={4}
          items={[
            { label: "default", node: <Badge>Default</Badge> },
            { label: "secondary", node: <Badge variant="secondary">Secondary</Badge> },
            { label: "outline", node: <Badge variant="outline">Outline</Badge> },
            { label: "muted", node: <Badge variant="muted">Muted</Badge> },
            { label: "success", node: <Badge variant="success">Active</Badge> },
            { label: "warning", node: <Badge variant="warning">Pending</Badge> },
            { label: "destructive", node: <Badge variant="destructive">Failed</Badge> },
            { label: "info", node: <Badge variant="info">Beta</Badge> },
          ]}
        />
      </Section>

      <Section title="Sizes and dots">
        <Preview>
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
          <Badge variant="success" dot>Live</Badge>
          <Badge variant="muted" dot>Draft</Badge>
        </Preview>
      </Section>

      <Section title="Guidance">
        <DoDont
          items={[
            {
              type: "do",
              text: "Use colour and text together. Colour alone fails for colourblind users and in monochrome print.",
              example: <Badge variant="destructive">Failed</Badge>,
            },
            {
              type: "dont",
              text: "Don't rely on a bare colour swatch to carry the status meaning.",
              example: <Badge variant="destructive" className="w-6 p-0">&nbsp;</Badge>,
            },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Avatar ─────────────────────────────────────────────────────────────── */

function AvatarDocs() {
  return (
    <>
      <Section title="Sizes">
        <Preview>
          {(["xs", "sm", "default", "lg", "xl", "2xl"] as const).map((size) => (
            <Avatar key={size} size={size}>
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
          ))}
        </Preview>
      </Section>

      <Section title="Image with fallback" description="The fallback renders while the image loads, and stays if it fails.">
        <Preview>
          <Avatar size="lg">
            <AvatarImage src="/does-not-exist.jpg" alt="Jack Ryan" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-primary text-primary-foreground">
              CB
            </AvatarFallback>
          </Avatar>
        </Preview>
      </Section>

      <Section title="Group" description="Stacks with a negative logical margin, so it leans the correct way under RTL.">
        <Preview>
          <AvatarGroup max={4} total={12}>
            {["JR", "CB", "AL", "SW", "NP"].map((initials) => (
              <Avatar key={initials}>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </Preview>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "AvatarImage requires alt text naming the person, not 'avatar' or 'profile picture'.",
            "Initials fallbacks are decorative when the name appears next to them — pass an empty alt in that case.",
            "The overflow count is real text, so it is announced rather than being a purely visual '+8'.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Card ───────────────────────────────────────────────────────────────── */

function CardDocs() {
  return (
    <>
      <Section title="Anatomy">
        <Preview align="stretch">
          <Card>
            <CardHeader>
              <CardTitle>Ultimate Workout</CardTitle>
              <CardDescription>An eight-week strength programme.</CardDescription>
              <CardAction>
                <Button size="icon-sm" variant="ghost" aria-label="More options">
                  <MoreHorizontal />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Text size="sm" tone="muted">
                Four sessions a week, progressive overload, with deload in week five.
              </Text>
            </CardContent>
            <CardFooter>
              <Button size="sm">Start plan</Button>
              <Button size="sm" variant="ghost">Preview</Button>
            </CardFooter>
          </Card>
        </Preview>
      </Section>

      <Section title="Variants">
        <Specimens
          columns={2}
          items={[
            { label: "default", node: <Card padding="sm" className="w-full"><CardTitle className="text-base">Default</CardTitle></Card> },
            { label: "elevated", node: <Card variant="elevated" padding="sm" className="w-full"><CardTitle className="text-base">Elevated</CardTitle></Card> },
            { label: "outline", node: <Card variant="outline" padding="sm" className="w-full"><CardTitle className="text-base">Outline</CardTitle></Card> },
            { label: "interactive", node: <Card padding="sm" interactive className="w-full"><CardTitle className="text-base">Interactive</CardTitle></Card> },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Alert ──────────────────────────────────────────────────────────────── */

function AlertDocs() {
  return (
    <>
      <Section title="Variants">
        <Preview align="stretch">
          <Alert>
            <Info />
            <AlertContent>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>This plan renews on 1 August.</AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="info">
            <Info />
            <AlertContent>
              <AlertTitle>New in v0.2</AlertTitle>
              <AlertDescription>Combobox and Data Table are now available.</AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="success">
            <CheckCircle2 />
            <AlertContent>
              <AlertTitle>Saved</AlertTitle>
              <AlertDescription>Your changes are live.</AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="warning">
            <AlertTriangle />
            <AlertContent>
              <AlertTitle>Storage almost full</AlertTitle>
              <AlertDescription>You&apos;re using 92% of your quota.</AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="destructive">
            <XCircle />
            <AlertContent>
              <AlertTitle>Payment failed</AlertTitle>
              <AlertDescription>We couldn&apos;t charge your card.</AlertDescription>
            </AlertContent>
          </Alert>
        </Preview>
      </Section>

      <Note title="Which role does it get?">
        Destructive and warning alerts render <Code>role=&quot;alert&quot;</Code>,
        which interrupts a screen reader immediately. Info and success render{" "}
        <Code>role=&quot;status&quot;</Code> and wait for a pause. Getting this
        backwards either buries an error or talks over the user.
      </Note>
    </>
  );
}

/* ── Progress & spinner ─────────────────────────────────────────────────── */

function ProgressDocs() {
  return (
    <>
      <Section title="Linear">
        <Preview align="stretch">
          <Progress value={30} />
          <Progress value={65} tone="success" />
          <Progress value={90} tone="warning" size="lg" />
          <Progress value={null} />
        </Preview>
      </Section>

      <Section title="Circular">
        <Preview>
          <ProgressCircle value={72} label="Upload progress">
            <span className="text-lg font-medium tnum">72%</span>
          </ProgressCircle>
          <ProgressCircle value={40} tone="warning" size={72} label="Quota" />
          <ProgressCircle value={null} size={48} label="Loading" />
        </Preview>
      </Section>

      <Note>
        Both fill from the start edge, which mirrors under RTL — progress always
        reads as moving forward, never backwards.
      </Note>
    </>
  );
}

function SpinnerDocs() {
  return (
    <>
      <Section title="Sizes">
        <Preview>
          {(["xs", "sm", "default", "lg", "xl"] as const).map((size) => (
            <Spinner key={size} size={size} />
          ))}
        </Preview>
      </Section>

      <Section title="In context">
        <Preview>
          <Button loading>Saving</Button>
          <Button variant="outline" loading loadingText="Uploading…">Upload</Button>
        </Preview>
      </Section>

      <Note title="One announcement per region">
        A spinner defaults to <Code>role=&quot;status&quot;</Code>. When it sits
        inside something already announcing its loading state, pass{" "}
        <Code>label={"{null}"}</Code> so the user doesn&apos;t hear
        &quot;Loading&quot; twice.
      </Note>
    </>
  );
}

/* ── Skeleton ───────────────────────────────────────────────────────────── */

function SkeletonDocs() {
  return (
    <>
      <Section title="Animations">
        <Preview align="stretch">
          <Skeleton className="h-10 w-full" />
          <Skeleton animation="pulse" className="h-10 w-full" />
          <Skeleton animation="none" className="h-10 w-full" />
        </Preview>
      </Section>

      <Section title="Composed" description="Match the shape of the content that will replace it.">
        <Preview align="stretch">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1">
              <SkeletonText lines={2} />
            </div>
          </div>
        </Preview>
      </Section>

      <Note>
        Skeletons are <Code>aria-hidden</Code>. Announce the loading state once
        on the container with <Code>aria-busy</Code> — not once per bone.
      </Note>
    </>
  );
}

/* ── Separator ──────────────────────────────────────────────────────────── */

function SeparatorDocs() {
  return (
    <>
      <Section title="Orientation and label">
        <Preview align="stretch">
          <Separator />
          <Separator label="or" />
          <div className="flex h-10 items-center gap-4">
            <Text size="sm">Docs</Text>
            <Separator orientation="vertical" />
            <Text size="sm">Components</Text>
            <Separator orientation="vertical" />
            <Text size="sm">Themes</Text>
          </div>
        </Preview>
      </Section>
    </>
  );
}

/* ── Kbd ────────────────────────────────────────────────────────────────── */

function KbdDocs() {
  return (
    <>
      <Section title="Keys and chords">
        <Preview>
          <Kbd>⌘</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd size="sm">⇧</Kbd>
          <KbdGroup keys={["⌘", "K"]} />
          <KbdGroup keys={["Ctrl", "Shift", "P"]} />
        </Preview>
      </Section>

      <Note>
        Pinned to <Code>dir=&quot;ltr&quot;</Code>. A shortcut is technical
        notation — <Code>⌘ + K</Code> must not become <Code>K + ⌘</Code> in an
        Arabic or Hebrew interface.
      </Note>
    </>
  );
}

/* ── Empty ──────────────────────────────────────────────────────────────── */

function EmptyDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <Empty className="rounded-lg border border-dashed border-border">
            <EmptyMedia><Search /></EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              No workouts match &quot;deadlift&quot;. Try a different term or clear
              your filters.
            </EmptyDescription>
            <EmptyActions>
              <Button size="sm" variant="outline">Clear filters</Button>
            </EmptyActions>
          </Empty>
        </Preview>
      </Section>

      <Section title="First-run">
        <Preview align="stretch">
          <Empty size="lg" className="rounded-lg border border-dashed border-border">
            <EmptyMedia className="bg-primary/10 text-primary"><Dumbbell /></EmptyMedia>
            <EmptyTitle>No plans yet</EmptyTitle>
            <EmptyDescription>
              Create your first workout plan, or browse plans built by coaches.
            </EmptyDescription>
            <EmptyActions>
              <Button size="sm"><Plus />Create a plan</Button>
              <Button size="sm" variant="ghost">Browse plans</Button>
            </EmptyActions>
          </Empty>
        </Preview>
      </Section>

      <Note title="Three different empties">
        &quot;Nothing yet&quot; needs a call to action. &quot;No results&quot;
        needs a way to widen the search. &quot;Something broke&quot; needs a
        retry. Using one generic empty state for all three wastes the moment the
        user most needs direction.
      </Note>
    </>
  );
}

/* ── Item ───────────────────────────────────────────────────────────────── */

function ItemDocs() {
  return (
    <>
      <Section title="Anatomy" description="Media, content, actions. The base row for lists, menus, and settings.">
        <Preview align="stretch">
          <Item variant="outline">
            <ItemMedia><Dumbbell /></ItemMedia>
            <ItemContent>
              <ItemTitle>Incline Dumbbell Press</ItemTitle>
              <ItemDescription>3 sets · 12 reps · 22.5 kg</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="muted" size="sm">Done</Badge>
            </ItemActions>
          </Item>

          <Item interactive variant="muted">
            <ItemMedia>
              <Avatar size="sm"><AvatarFallback>CB</AvatarFallback></Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Chris Bumstead</ItemTitle>
              <ItemDescription>Coach · replies in ~2 hours</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="icon-sm" variant="ghost" aria-label="More"><MoreHorizontal /></Button>
            </ItemActions>
          </Item>
        </Preview>
      </Section>

      <Section title="Sizes">
        <Preview align="stretch">
          {(["sm", "default", "lg"] as const).map((size) => (
            <Item key={size} size={size} variant="outline">
              <ItemContent><ItemTitle>Size {size}</ItemTitle></ItemContent>
            </Item>
          ))}
        </Preview>
      </Section>
    </>
  );
}

/* ── Aspect ratio ───────────────────────────────────────────────────────── */

function AspectRatioDocs() {
  return (
    <>
      <Section title="Ratios">
        <Preview align="stretch">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { ratio: 16 / 9, label: "16 / 9" },
              { ratio: 4 / 3, label: "4 / 3" },
              { ratio: 1, label: "1 / 1" },
            ].map((item) => (
              <div key={item.label}>
                <AspectRatio
                  ratio={item.ratio}
                  className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
                >
                  {item.label}
                </AspectRatio>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Note>
        Reserves the space before the image loads, so the page doesn&apos;t
        shift — a direct Cumulative Layout Shift win.
      </Note>
    </>
  );
}

export const DISPLAY_DOCS: Record<string, () => React.JSX.Element> = {
  "typography-component": TypographyDocs,
  badge: BadgeDocs,
  avatar: AvatarDocs,
  card: CardDocs,
  alert: AlertDocs,
  progress: ProgressDocs,
  spinner: SpinnerDocs,
  skeleton: SkeletonDocs,
  separator: SeparatorDocs,
  kbd: KbdDocs,
  empty: EmptyDocs,
  item: ItemDocs,
  "aspect-ratio": AspectRatioDocs,
};
