"use client";

import * as React from "react";
import {
  AtSign,
  Bold,
  Copy,
  Eye,
  EyeOff,
  Italic,
  Mail,
  Search,
  Trash2,
  Underline,
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
import { DemoBlock } from "@/components/docs/demo-block";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { InputOTP } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { MultiSelect } from "@/components/ui/multi-select";
import { Rating } from "@/components/ui/rating";
import { TagInput } from "@/components/ui/tag-input";
import { SocialButton, SocialButtons } from "@/components/ui/social-buttons";
import { ColorPicker } from "@/components/ui/color-picker";
import { FileUploader } from "@/components/ui/file-uploader";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

/* ── Button ─────────────────────────────────────────────────────────────── */

function ButtonDocs() {
  return (
    <>
      <Section
        title="Variants"
        description="Six variants. Exactly one primary action per view — if two things look primary, neither is."
      >
        <DemoBlock name="button-variants" />
        <Specimens
          className="mt-4"
          columns={3}
          items={[
            { label: "default", caption: "The single main action", node: <Button>Save changes</Button> },
            { label: "secondary", caption: "Supporting action", node: <Button variant="secondary">Cancel</Button> },
            { label: "outline", caption: "Low emphasis, still bounded", node: <Button variant="outline">Preview</Button> },
            { label: "ghost", caption: "Toolbar and dense UI", node: <Button variant="ghost">Dismiss</Button> },
            { label: "destructive", caption: "Irreversible action", node: <Button variant="destructive">Delete</Button> },
            { label: "link", caption: "Navigates, not acts", node: <Button variant="link">Learn more</Button> },
          ]}
        />
      </Section>

      <Section title="Sizes" description="Five text sizes and five matching icon-only sizes.">
        <Preview>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </Preview>
        <Preview className="mt-4">
          <Button size="icon-xs" aria-label="Copy"><Copy /></Button>
          <Button size="icon-sm" aria-label="Copy"><Copy /></Button>
          <Button size="icon" aria-label="Copy"><Copy /></Button>
          <Button size="icon-lg" aria-label="Copy"><Copy /></Button>
          <Button size="icon-xl" aria-label="Copy"><Copy /></Button>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Every variant carries the same state contract. Hover and focus are shown live — tab through the row."
      >
        <Specimens
          columns={4}
          items={[
            { label: "default", node: <Button>Button</Button> },
            { label: "disabled", node: <Button disabled>Button</Button> },
            { label: "loading", node: <Button loading>Button</Button> },
            { label: "loading + text", node: <Button loading loadingText="Saving…">Save</Button> },
          ]}
        />
        <DemoBlock name="button-loading" className="mt-4" />
        <Note title="Loading is not disabled">
          A loading button stays focusable and announces <code>aria-busy</code>,
          so a screen-reader user isn&apos;t silently dropped out of the tab
          order mid-submit. Pointer events are blocked instead.
        </Note>
      </Section>

      <Section title="With icons" description="Logical slots — icons swap sides under RTL automatically.">
        <Preview>
          <Button><Mail />Email</Button>
          <Button variant="outline">Continue<Search /></Button>
          <Button variant="destructive"><Trash2 />Delete</Button>
          <Button size="icon" variant="outline" aria-label="Search"><Search /></Button>
        </Preview>
      </Section>

      <Section title="Shape and width">
        <Preview align="stretch">
          <div className="flex flex-wrap gap-3">
            <Button shape="rounded">Rounded</Button>
            <Button shape="pill">Pill</Button>
            <Button shape="square">Square</Button>
          </div>
          <Button fullWidth>Full width</Button>
        </Preview>
      </Section>

      <Section title="Guidance">
        <DoDont
          items={[
            {
              type: "do",
              text: "Label buttons with the action they perform. The label should make sense read on its own, out of context.",
              example: <Button>Create account</Button>,
            },
            {
              type: "dont",
              text: "Don't use vague labels. 'OK' and 'Submit' force the user to re-read the surrounding copy to know what happens.",
              example: <Button variant="secondary">OK</Button>,
            },
          ]}
        />
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Icon-only buttons require an aria-label — there is no visible text to announce.",
            "Focus ring is a 2px ring offset from the background, meeting the 3:1 non-text contrast minimum in both themes.",
            "Disabled uses the disabled attribute, so the button leaves the tab order; loading uses aria-busy and stays in it.",
            "asChild renders your element (e.g. next/link) with button styling, keeping the correct semantics for navigation.",
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: "Visual emphasis." },
            { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon" | "icon-lg" | "icon-xl"', default: '"default"', description: "Control height and padding." },
            { name: "shape", type: '"rounded" | "pill" | "square"', default: '"rounded"', description: "Corner treatment." },
            { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and blocks pointer events." },
            { name: "loadingText", type: "string", description: "Replaces the label while loading." },
            { name: "fullWidth", type: "boolean", default: "false", description: "Stretches to the container width." },
            { name: "asChild", type: "boolean", default: "false", description: "Renders the child element instead of a button." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Button group ───────────────────────────────────────────────────────── */

function ButtonGroupDocs() {
  return (
    <>
      <Section
        title="Attached"
        description="Shared borders and logical radii — the first item rounds on the start edge, so the group flips correctly in RTL."
      >
        <Preview>
          <ButtonGroup label="Text alignment">
            <Button variant="outline">Start</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">End</Button>
          </ButtonGroup>
        </Preview>
      </Section>

      <Section title="With text and separators">
        <Preview>
          <ButtonGroup label="Copy URL">
            <ButtonGroupText>https://</ButtonGroupText>
            <Button variant="outline">oratiq.com</Button>
            <ButtonGroupSeparator />
            <Button variant="outline" size="icon" aria-label="Copy"><Copy /></Button>
          </ButtonGroup>
        </Preview>
      </Section>

      <Section title="Orientation and spacing">
        <Preview>
          <ButtonGroup orientation="vertical" label="Actions">
            <Button variant="outline">Edit</Button>
            <Button variant="outline">Duplicate</Button>
            <Button variant="outline">Archive</Button>
          </ButtonGroup>
          <ButtonGroup attached={false} label="Detached">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </ButtonGroup>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout axis." },
            { name: "attached", type: "boolean", default: "true", description: "Joins items into one control. False adds a gap instead." },
            { name: "label", type: "string", description: "Accessible name for the group." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Field ──────────────────────────────────────────────────────────────── */

function FieldDocs() {
  return (
    <>
      <Section
        title="Anatomy"
        description="Field generates the ids and wires aria-describedby and aria-invalid, so controls don't each reimplement it."
      >
        <Preview align="stretch">
          <Field description="We'll only use this for receipts.">
            <FieldLabel required>Email</FieldLabel>
            <Input type="email" placeholder="you@example.com" />
          </Field>
        </Preview>
      </Section>

      <Section title="Error state">
        <Preview align="stretch">
          <Field error="Enter a valid email address.">
            <FieldLabel required>Email</FieldLabel>
            <Input type="email" defaultValue="not-an-email" aria-invalid />
          </Field>
        </Preview>
        <Note>
          The error message replaces the description rather than stacking below
          it. Two messages competing for the same slot is how users end up
          reading neither.
        </Note>
      </Section>

      <Section title="Horizontal orientation" description="For switches and checkboxes, where the label follows the control.">
        <Preview align="stretch">
          <Field orientation="horizontal" description="Get notified when a workout is due.">
            <FieldLabel>Push notifications</FieldLabel>
            <Switch defaultChecked />
          </Field>
        </Preview>
      </Section>

      <Section title="Field sets">
        <Preview align="stretch">
          <FieldSet legend="Shipping address">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel>First name</FieldLabel>
                <Input />
              </Field>
              <Field>
                <FieldLabel>Last name</FieldLabel>
                <Input />
              </Field>
            </div>
            <Field description="Street, apartment, suite.">
              <FieldLabel>Address</FieldLabel>
              <Input />
            </Field>
          </FieldSet>
        </Preview>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Label is bound to the control via htmlFor / id — clicking the label focuses the input.",
            "Description and error are linked with aria-describedby, so both are announced on focus.",
            "The error state sets aria-invalid, which the Input styles react to via the aria-invalid: variant.",
            "Required is conveyed by the input's required attribute; the asterisk is aria-hidden decoration.",
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "error", type: "ReactNode", description: "Presence switches the field into its error state." },
            { name: "description", type: "ReactNode", description: "Helper text, hidden while an error is showing." },
            { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Label above or beside the control." },
            { name: "disabled", type: "boolean", default: "false", description: "Dims the field and its label." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Input ──────────────────────────────────────────────────────────────── */

function InputDocs() {
  return (
    <>
      <Section title="Sizes">
        <Preview align="stretch">
          <Input size="sm" placeholder="Small" />
          <Input size="default" placeholder="Default" />
          <Input size="lg" placeholder="Large" />
          <Input size="xl" placeholder="Extra large" />
        </Preview>
      </Section>

      <Section title="States" description="Every state is reachable from the same base — no separate error component.">
        <Specimens
          columns={2}
          items={[
            { label: "default", node: <Input placeholder="Placeholder" /> },
            { label: "filled", node: <Input defaultValue="Jack Ryan" /> },
            { label: "aria-invalid", node: <Input defaultValue="Jack" aria-invalid /> },
            { label: "disabled", node: <Input defaultValue="Jack" disabled /> },
            { label: "readOnly", node: <Input defaultValue="Jack" readOnly /> },
            { label: 'shape="pill"', node: <Input shape="pill" placeholder="Search" /> },
          ]}
        />
      </Section>

      <Section title="Types">
        <Preview align="stretch">
          <Input type="email" placeholder="you@example.com" />
          <Input type="password" placeholder="••••••••" />
          <Input type="number" placeholder="0" />
          <Input type="date" />
          <Input type="file" />
        </Preview>
        <Note title="Native pickers follow the browser, not the page">
          The date field itself themes correctly — <code>color-scheme</code> is
          declared per theme, so its glyphs and segment highlight match. The
          calendar <em>popup</em>, however, is browser chrome: on desktop
          Chrome it renders in the browser&apos;s own theme and no site CSS can
          restyle it. For a fully themed calendar, use{" "}
          <a
            href="/design-library/components/date-picker"
            className="font-medium text-primary underline underline-offset-4"
          >
            Date Picker
          </a>
          , which renders its own popover.
        </Note>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "size", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Control height and text size." },
            { name: "shape", type: '"rounded" | "pill"', default: '"rounded"', description: "Corner treatment." },
            { name: "aria-invalid", type: "boolean", description: "Switches to the destructive border and ring." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Input group ────────────────────────────────────────────────────────── */

function InputGroupDocs() {
  const [reveal, setReveal] = React.useState(false);

  return (
    <>
      <Section
        title="Inline addons"
        description="The group owns the border and focus ring, so the ring wraps the whole control rather than one segment."
      >
        <Preview align="stretch">
          <InputGroup>
            <InputGroupAddon><Search /></InputGroupAddon>
            <Input placeholder="Search components…" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon><AtSign /></InputGroupAddon>
            <Input placeholder="username" />
            <InputGroupAddon align="end">@oratiq.com</InputGroupAddon>
          </InputGroup>
        </Preview>
      </Section>

      <Section title="Attached addons">
        <Preview align="stretch">
          <InputGroup>
            <InputGroupAddon variant="attached">https://</InputGroupAddon>
            <Input placeholder="your-site.com" />
          </InputGroup>
          <InputGroup>
            <Input placeholder="0.00" />
            <InputGroupAddon variant="attached" align="end">USD</InputGroupAddon>
          </InputGroup>
        </Preview>
      </Section>

      <Section title="With a button">
        <Preview align="stretch">
          <InputGroup>
            <Input type={reveal ? "text" : "password"} defaultValue="correct-horse" />
            <InputGroupButton
              onClick={() => setReveal(!reveal)}
              aria-label={reveal ? "Hide password" : "Show password"}
            >
              {reveal ? <EyeOff /> : <Eye />}
            </InputGroupButton>
          </InputGroup>
        </Preview>
      </Section>
    </>
  );
}

/* ── Input OTP ──────────────────────────────────────────────────────────── */

function InputOTPDocs() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <Section title="Default">
        <Preview>
          <InputOTP length={6} value={value} onChange={setValue} />
        </Preview>
      </Section>

      <Section title="Grouped and masked">
        <Preview>
          <InputOTP length={6} groupSize={3} />
        </Preview>
        <Preview className="mt-4">
          <InputOTP length={4} mask />
        </Preview>
      </Section>

      <Note title="Always LTR">
        The container is pinned to <code>dir=&quot;ltr&quot;</code>. A code is a
        sequence, not prose — slot 1 must stay leftmost even in an RTL layout,
        or users type the digits into reversed positions. Flip the direction
        toggle above to confirm it holds.
      </Note>

      <Section title="Behaviour">
        <A11yNotes
          items={[
            "Pasting a full code fills every slot and moves focus to the last one.",
            "Backspace on an empty slot clears the previous slot and steps back.",
            "Arrow keys move between slots rather than within a slot's text.",
            "The first slot carries autocomplete=\"one-time-code\", so iOS and Android offer the SMS code.",
            "Each slot is labelled 'Digit N of M' for screen readers.",
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "length", type: "number", default: "6", description: "Number of slots." },
            { name: "groupSize", type: "number", description: "Inserts a separator every N slots." },
            { name: "mask", type: "boolean", default: "false", description: "Obscures entered characters." },
            { name: "onComplete", type: "(value: string) => void", description: "Fires when every slot is filled." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Textarea ───────────────────────────────────────────────────────────── */

function TextareaDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <Textarea placeholder="Tell us what happened…" />
        </Preview>
      </Section>

      <Section title="Auto-resize and character count">
        <Preview align="stretch">
          <Textarea autoResize placeholder="Grows as you type…" />
          <Textarea showCount maxLength={280} placeholder="Max 280 characters" />
        </Preview>
      </Section>

      <Section title="States">
        <Preview align="stretch">
          <Textarea defaultValue="Something went wrong here." aria-invalid />
          <Textarea defaultValue="Read only content." readOnly />
          <Textarea defaultValue="Disabled." disabled />
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "autoResize", type: "boolean", default: "false", description: "Grows with content instead of scrolling." },
            { name: "showCount", type: "boolean", default: "false", description: "Renders a live character count." },
            { name: "maxLength", type: "number", description: "Caps input and forms the denominator of the count." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Checkbox ───────────────────────────────────────────────────────────── */

function CheckboxDocs() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">("indeterminate");

  return (
    <>
      <Section title="States">
        <Specimens
          columns={4}
          items={[
            { label: "unchecked", node: <Checkbox /> },
            { label: "checked", node: <Checkbox defaultChecked /> },
            { label: "indeterminate", node: <Checkbox checked="indeterminate" /> },
            { label: "disabled", node: <Checkbox disabled defaultChecked /> },
          ]}
        />
      </Section>

      <Section title="Sizes">
        <Preview>
          <Checkbox size="sm" defaultChecked />
          <Checkbox size="default" defaultChecked />
          <Checkbox size="lg" defaultChecked />
        </Preview>
      </Section>

      <Section title="With a label" description="Wrap in a Field, or pair with Label directly.">
        <Preview align="stretch">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">I accept the terms and conditions</Label>
          </div>
        </Preview>
      </Section>

      <Section title="Parent / child" description="An indeterminate parent reflects a partial selection.">
        <Preview align="stretch">
          <div className="flex items-center gap-3">
            <Checkbox
              checked={checked}
              onCheckedChange={(next) => setChecked(next)}
              id="all"
            />
            <Label htmlFor="all">Select all</Label>
          </div>
          <div className="ms-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox id="a" defaultChecked />
              <Label htmlFor="a">Workouts</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="b" />
              <Label htmlFor="b">Nutrition</Label>
            </div>
          </div>
        </Preview>
      </Section>
    </>
  );
}

/* ── Radio group ────────────────────────────────────────────────────────── */

function RadioGroupDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <RadioGroup defaultValue="monthly">
            {[
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly — save 20%" },
              { value: "lifetime", label: "Lifetime" },
            ].map((option) => (
              <div key={option.value} className="flex items-center gap-3">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </Preview>
      </Section>

      <Section title="Sizes and states">
        <Preview>
          <RadioGroup defaultValue="a" className="flex gap-6">
            <RadioGroupItem value="a" size="sm" />
            <RadioGroupItem value="b" size="default" />
            <RadioGroupItem value="c" size="lg" />
            <RadioGroupItem value="d" disabled />
          </RadioGroup>
        </Preview>
      </Section>

      <Note title="Radio vs. Select">
        Use a radio group when there are two to five options and comparing them
        matters. Past that, a Select costs less vertical space and less reading.
      </Note>
    </>
  );
}

/* ── Switch ─────────────────────────────────────────────────────────────── */

function SwitchDocs() {
  return (
    <>
      <Section title="States and sizes">
        <Specimens
          columns={4}
          items={[
            { label: "off", node: <Switch aria-label="Off" /> },
            { label: "on", node: <Switch defaultChecked aria-label="On" /> },
            { label: "disabled", node: <Switch disabled aria-label="Disabled" /> },
            { label: "sizes", node: (
              <div className="flex items-center gap-3">
                <Switch size="sm" defaultChecked aria-label="Small" />
                <Switch size="default" defaultChecked aria-label="Default" />
                <Switch size="lg" defaultChecked aria-label="Large" />
              </div>
            ) },
          ]}
        />
      </Section>

      <Note title="Switch vs. Checkbox">
        A switch applies immediately. A checkbox stages a change that a submit
        button commits. If your switch needs a Save button next to it, it should
        have been a checkbox.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Renders role=\"switch\" with aria-checked, so it is announced as on/off rather than checked/unchecked.",
            "The thumb travels toward the correct edge under RTL — the transform is mirrored, not duplicated.",
            "Requires a label: either an aria-label or a Field / Label pairing.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Toggle & toggle group ──────────────────────────────────────────────── */

function ToggleDocs() {
  return (
    <>
      <Section title="Variants and states">
        <Specimens
          columns={4}
          items={[
            { label: "default", node: <Toggle aria-label="Bold"><Bold /></Toggle> },
            { label: "on", node: <Toggle defaultPressed aria-label="Bold"><Bold /></Toggle> },
            { label: "outline", node: <Toggle variant="outline" aria-label="Bold"><Bold /></Toggle> },
            { label: "disabled", node: <Toggle disabled aria-label="Bold"><Bold /></Toggle> },
          ]}
        />
      </Section>

      <Section title="With text">
        <Preview>
          <Toggle variant="outline"><Bold />Bold</Toggle>
          <Toggle size="lg" variant="outline">Large</Toggle>
        </Preview>
      </Section>
    </>
  );
}

function ToggleGroupDocs() {
  return (
    <>
      <Section title="Single and multiple selection">
        <Preview align="stretch">
          <ToggleGroup type="single" defaultValue="center" variant="outline" attached>
            <ToggleGroupItem value="start" aria-label="Align start">Start</ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
            <ToggleGroupItem value="end" aria-label="Align end">End</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline /></ToggleGroupItem>
          </ToggleGroup>
        </Preview>
      </Section>

      <Note>
        Arrow-key navigation follows the writing direction: under RTL, the left
        arrow moves to the next item. That comes from the shared
        DirectionProvider, not from per-component code.
      </Note>
    </>
  );
}

/* ── Slider ─────────────────────────────────────────────────────────────── */

function SliderDocs() {
  return (
    <>
      <Section title="Single and range">
        <Preview align="stretch">
          <Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" />
          <Slider defaultValue={[20, 70]} max={100} step={1} aria-label="Price range" />
        </Preview>
      </Section>

      <Section title="With value, stepped, and disabled">
        <Preview align="stretch">
          <Slider defaultValue={[60]} max={100} showValue formatValue={(v) => `${v}%`} aria-label="Progress" />
          <Slider defaultValue={[3]} max={10} step={1} aria-label="Sets" />
          <Slider defaultValue={[50]} max={100} disabled aria-label="Disabled" />
        </Preview>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Arrow keys adjust by one step; Home and End jump to the bounds; Page Up/Down move by a larger increment.",
            "Under RTL the fill and the arrow keys both invert, handled by Radix via the DirectionProvider.",
            "Range sliders expose one thumb per value, each individually focusable and labelled.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Native select ──────────────────────────────────────────────────────── */

function NativeSelectDocs() {
  return (
    <>
      <Section title="Sizes and states">
        <Preview align="stretch">
          {(["sm", "default", "lg"] as const).map((size) => (
            <NativeSelect key={size} size={size} defaultValue="">
              <option value="" disabled>Choose a plan…</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="team">Team</option>
            </NativeSelect>
          ))}
          <NativeSelect disabled defaultValue="free">
            <option value="free">Disabled</option>
          </NativeSelect>
        </Preview>
      </Section>

      <Note title="Prefer this on mobile">
        The native select gets the OS picker, correct virtual-keyboard handling,
        and accessibility for free. Reach for the custom Select only when you
        need rich option content — icons, descriptions, or grouping with
        headers.
      </Note>
    </>
  );
}

/* ── Label ──────────────────────────────────────────────────────────────── */

function LabelDocs() {
  return (
    <>
      <Section title="Default, required, optional">
        <Preview align="stretch">
          <Label htmlFor="l1">Email</Label>
          <Label htmlFor="l2" required>Password</Label>
          <Label htmlFor="l3" optional>Company</Label>
        </Preview>
      </Section>

      <Note>
        Mark whichever is rarer in your form — if most fields are required, mark
        the optional ones. Marking both is noise.
      </Note>
    </>
  );
}

export const FORM_DOCS: Record<string, () => React.JSX.Element> = {
  "multi-select": MultiSelectDocs,
  rating: RatingDocs,
  "tag-input": TagInputDocs,
  "social-buttons": SocialButtonsDocs,
  "color-picker": ColorPickerDocs,
  "file-uploader": FileUploaderDocs,
  button: ButtonDocs,
  "button-group": ButtonGroupDocs,
  field: FieldDocs,
  input: InputDocs,
  "input-group": InputGroupDocs,
  "input-otp": InputOTPDocs,
  textarea: TextareaDocs,
  checkbox: CheckboxDocs,
  "radio-group": RadioGroupDocs,
  switch: SwitchDocs,
  toggle: ToggleDocs,
  "toggle-group": ToggleGroupDocs,
  slider: SliderDocs,
  "native-select": NativeSelectDocs,
  label: LabelDocs,
};

/* ── Multi select ───────────────────────────────────────────────────────── */

function MultiSelectDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "The list stays open while picking — multi-select means several choices, closing per pick would be hostile.",
            "Selections render as dismissible chips in the trigger; overflow collapses to a +N chip.",
            "Search filters the list via Command; keyboard navigation follows the writing direction.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "options", type: "{ value, label, disabled? }[]", required: true, description: "The selectable options." },
            { name: "value / defaultValue", type: "string[]", description: "Selected values (controlled / uncontrolled)." },
            { name: "onValueChange", type: "(values: string[]) => void", description: "Fires with the full selection." },
            { name: "maxShown", type: "number", default: "3", description: "Chips shown before collapsing to +N." },
          ]}
        />
      </Section>
      <Note title="When to use">
        Two to five exclusive choices → Radio Group. One choice from many →
        Combobox. Several choices from many → this.
      </Note>
    </>
  );
}

/* ── Rating ─────────────────────────────────────────────────────────────── */

function RatingDocs() {
  return (
    <>
      <Section title="Input and display">
        <Preview>
          <Rating defaultValue={3} label="Rate this" />
          <Rating value={4} readOnly label="Average" />
          <Rating value={2} readOnly size="sm" label="Small" />
        </Preview>
      </Section>
      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Input mode is a radiogroup — one tab stop, arrows move between stars.",
            "Arrow keys follow the writing direction: the arrow pointing toward 'more stars' increases in both LTR and RTL.",
            "Display mode is role=img with a spoken '4 of 5' label — decorative stars stay silent.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "max", type: "number", default: "5", description: "Number of stars." },
            { name: "readOnly", type: "boolean", default: "false", description: "Display-only, no interaction." },
            { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "Star size." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Tag input ──────────────────────────────────────────────────────────── */

function TagInputDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "Enter or comma commits the draft as a tag; blur commits too, so nothing typed is silently lost.",
            "Backspace on an empty input removes the last tag.",
            "Duplicates are ignored; max caps the count.",
            "Each tag carries dir=\"auto\" — Arabic tags lay out correctly inside an English form and vice versa.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "value / defaultValue", type: "string[]", description: "The tags (controlled / uncontrolled)." },
            { name: "onValueChange", type: "(tags: string[]) => void", description: "Fires with the full list." },
            { name: "max", type: "number", description: "Maximum number of tags." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Social buttons ─────────────────────────────────────────────────────── */

function SocialButtonsDocs() {
  return (
    <>
      <Section title="Single and icon-only">
        <Preview align="stretch">
          <div className="mx-auto w-full max-w-xs space-y-2">
            <SocialButton provider="google" />
            <SocialButton provider="apple" action="Sign in with" />
          </div>
          <div className="flex justify-center">
            <SocialButtons iconOnly providers={["google", "apple", "github", "facebook"]} />
          </div>
        </Preview>
      </Section>
      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Brand marks are inline SVG — no icon-library dependency, and never mirrored under RTL: a logo is not a directional glyph.",
            "Icon-only buttons carry the full accessible label ('Continue with Google'), not the brand name alone.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "provider", type: '"google" | "apple" | "github" | "facebook"', required: true, description: "Which provider." },
            { name: "action", type: "string", default: '"Continue with"', description: "Leading copy." },
            { name: "iconOnly", type: "boolean", default: "false", description: "Logo-only, label moves to aria-label." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Color picker ───────────────────────────────────────────────────────── */

function ColorPickerDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "Swatch grid for the common case; a hex field for precision; the native picker (with eyedropper where the OS has one) for everything else.",
            "Hex values are pinned dir=\"ltr\" — a colour code is a code, not prose.",
            "3-digit hex shorthand is expanded (#f0a → #ff00aa); invalid input reverts on blur.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "value / defaultValue", type: "string", default: '"#cbfe00"', description: "Hex colour (controlled / uncontrolled)." },
            { name: "swatches", type: "string[]", description: "Preset palette. Pass your brand ramp." },
            { name: "onValueChange", type: "(hex: string) => void", description: "Fires with a normalised 6-digit hex." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── File uploader ──────────────────────────────────────────────────────── */

function FileUploaderDocs() {
  return (
    <>
      <Section title="Behaviour">
        <A11yNotes
          items={[
            "The drop zone is a real file-input label — keyboard and screen-reader users get the native picker; drag-and-drop is an enhancement, not the only path.",
            "accept and maxSize are validated on drop too, not just in the picker; rejected files are listed with the reason rather than silently dropped.",
            "Accepted files render as Attachment rows with remove buttons; onFilesChange only ever reports valid files.",
          ]}
        />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: "accept", type: "string", description: 'e.g. "image/*,.pdf".' },
            { name: "multiple", type: "boolean", default: "true", description: "Allow more than one file." },
            { name: "maxSize", type: "number", description: "Per-file cap in bytes." },
            { name: "onFilesChange", type: "(files: File[]) => void", description: "Valid files after every change." },
          ]}
        />
      </Section>
      <Note title="Uploading is yours">
        This component collects and validates files — it deliberately does not
        upload. Wire the files to your own endpoint, and drive Attachment&apos;s
        progress state from your upload progress.
      </Note>
    </>
  );
}
