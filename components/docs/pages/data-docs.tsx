"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { Reply, SmilePlus } from "lucide-react";

import {
  A11yNotes,
  Note,
  Preview,
  PropsTable,
  Section,
} from "@/components/docs/docs-primitives";
import {
  Attachment,
  AttachmentList,
} from "@/components/ui/attachment";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bubble, BubbleGroup, BubbleTimestamp } from "@/components/ui/bubble";
import { Calendar } from "@/components/ui/calendar";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  seriesColor,
  type ChartConfig,
} from "@/components/ui/chart";
import { DataTable, type ColumnDef } from "@/components/ui/data-table";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { Marker, MarkerSurface, MarkerWithPopover } from "@/components/ui/marker";
import {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageBody,
  MessageContent,
  MessageHeader,
  MessageTimestamp,
} from "@/components/ui/message";
import { MessageScroller } from "@/components/ui/message-scroller";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
/* ── Table ──────────────────────────────────────────────────────────────── */

function TableDocs() {
  const rows = [
    { id: "INV-001", plan: "Ultimate Workout", status: "Paid", amount: "$20.00" },
    { id: "INV-002", plan: "Premium Workout", status: "Pending", amount: "$20.00" },
    { id: "INV-003", plan: "Hybrid Athlete", status: "Paid", amount: "$35.00" },
  ];

  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <Table>
            <TableCaption>Recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-end">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.plan}</TableCell>
                  <TableCell>
                    <Badge
                      variant={row.status === "Paid" ? "success" : "warning"}
                      size="sm"
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell numeric>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell numeric>$75.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Preview>
      </Section>

      <Note title="Numeric columns">
        Pass <code>numeric</code> to a cell: it aligns to the end edge and
        switches to tabular figures, so the decimal points line up whichever
        direction the table reads.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Header cells are <th> with a scope, so screen readers can announce the column for each cell.",
            "Overflow is scoped to the table's own container — the page body never scrolls horizontally.",
            "A caption gives the table an accessible name; without one, a screen reader announces only 'table'.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Data table ─────────────────────────────────────────────────────────── */

interface Exercise {
  name: string;
  muscle: string;
  sets: number;
  volume: number;
}

const EXERCISES: Exercise[] = [
  { name: "Incline Dumbbell Press", muscle: "Chest", sets: 3, volume: 810 },
  { name: "Barbell Bench Press", muscle: "Chest", sets: 4, volume: 1600 },
  { name: "Cable Fly", muscle: "Chest", sets: 3, volume: 540 },
  { name: "Pull Up", muscle: "Back", sets: 4, volume: 720 },
  { name: "Barbell Row", muscle: "Back", sets: 4, volume: 1280 },
  { name: "Lat Pulldown", muscle: "Back", sets: 3, volume: 900 },
  { name: "Overhead Press", muscle: "Shoulders", sets: 4, volume: 880 },
  { name: "Lateral Raise", muscle: "Shoulders", sets: 3, volume: 270 },
  { name: "Back Squat", muscle: "Quads", sets: 5, volume: 2400 },
  { name: "Leg Press", muscle: "Quads", sets: 4, volume: 3200 },
  { name: "Romanian Deadlift", muscle: "Hamstrings", sets: 4, volume: 1760 },
  { name: "Calf Raise", muscle: "Calves", sets: 4, volume: 960 },
];

const COLUMNS: ColumnDef<Exercise>[] = [
  { accessorKey: "name", header: "Exercise" },
  { accessorKey: "muscle", header: "Muscle" },
  { accessorKey: "sets", header: "Sets" },
  {
    accessorKey: "volume",
    header: "Volume (kg)",
    cell: ({ row }) => (
      <span className="tnum">{row.original.volume.toLocaleString()}</span>
    ),
  },
];

function DataTableDocs() {
  return (
    <>
      <Section
        title="Sorting, filtering, columns, pagination"
        description="Click a header to sort. Type to filter. Toggle columns from the menu."
      >
        <Preview align="stretch">
          <DataTable
            columns={COLUMNS}
            data={EXERCISES}
            filterColumn="name"
            filterPlaceholder="Filter exercises…"
            pageSize={5}
          />
        </Preview>
      </Section>

      <Note>
        Sort indicators are vertical arrows, so they are <em>not</em> mirrored
        under RTL. The pagination controls are — the same per-glyph rule as
        everywhere else in the system.
      </Note>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "columns", type: "ColumnDef<TData, TValue>[]", required: true, description: "TanStack Table column definitions." },
            { name: "data", type: "TData[]", required: true, description: "Row data." },
            { name: "filterColumn", type: "string", description: "Column id the search box filters." },
            { name: "pageSize", type: "number", default: "10", description: "Rows per page." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Chart ──────────────────────────────────────────────────────────────── */

const VOLUME_DATA = [
  { week: "W1", chest: 2400, back: 2900 },
  { week: "W2", chest: 2800, back: 3100 },
  { week: "W3", chest: 3200, back: 3000 },
  { week: "W4", chest: 2600, back: 3400 },
  { week: "W5", chest: 3600, back: 3800 },
  { week: "W6", chest: 3900, back: 4100 },
];

const CHART_CONFIG: ChartConfig = {
  chest: { label: "Chest" },
  back: { label: "Back" },
};

function ChartDocs() {
  return (
    <>
      <Section title="Bar and line">
        <Preview align="stretch">
          <ChartContainer config={CHART_CONFIG}>
            <BarChart data={VOLUME_DATA}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={44} />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <Bar dataKey="chest" fill={seriesColor(CHART_CONFIG, "chest")} radius={4} />
              <Bar dataKey="back" fill={seriesColor(CHART_CONFIG, "back")} radius={4} />
            </BarChart>
          </ChartContainer>
          <ChartLegend config={CHART_CONFIG} />

          <ChartContainer config={CHART_CONFIG} className="mt-6">
            <LineChart data={VOLUME_DATA}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={44} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                dataKey="chest"
                stroke={seriesColor(CHART_CONFIG, "chest")}
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="back"
                stroke={seriesColor(CHART_CONFIG, "back")}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </Preview>
      </Section>

      <Note title="Charts and RTL">
        The charting library renders SVG in physical space with no concept of
        writing direction. The container mirrors the whole plot under RTL and
        un-mirrors the text, so the value axis lands on the correct side while
        labels stay readable. It works, but verify any custom chart you build —
        this is the one place in the system where direction isn&apos;t free.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Series colours walk the --chart-N tokens, which are checked for contrast against both themes.",
            "Never encode a series by colour alone — the legend pairs each colour with its label.",
            "For anything load-bearing, offer the same data as a table. A chart is unreadable to a screen reader.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Calendar / date picker ─────────────────────────────────────────────── */

function CalendarDocs() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 6, 30));

  return (
    <>
      <Section title="Default">
        <Preview>
          <div className="rounded-lg border border-border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </Preview>
      </Section>

      <Note title="The grid reverses under RTL">
        Weekday columns run right-to-left in an RTL locale. A calendar that
        still runs Sunday-to-Saturday left-to-right in an Arabic interface reads
        as broken, so the direction is passed straight through to the date
        library.
      </Note>
    </>
  );
}

function DatePickerDocs() {
  return (
    <>
      <Section title="Single and range">
        <Preview align="stretch">
          <div className="max-w-xs">
            <DatePicker label="Start date" />
          </div>
          <div className="mt-3 max-w-md">
            <DateRangePicker label="Reporting period" />
          </div>
        </Preview>
      </Section>

      <Note>
        The formatted range is wrapped in <code>&lt;bdi&gt;</code>. Without it,
        the bidi algorithm reorders the two dates around the dash in an RTL
        layout, and the range reads backwards.
      </Note>
    </>
  );
}

/* ── Marker / attachment ────────────────────────────────────────────────── */

function MarkerDocs() {
  return (
    <>
      <Section title="Hotspots on a surface">
        <Preview align="stretch">
          <MarkerSurface className="h-56 w-full overflow-hidden rounded-lg bg-linear-to-br from-muted to-card">
            <Marker x={25} y={30} label="Chest" pulse>
              1
            </Marker>
            <Marker x={60} y={45} tone="info" label="Shoulders">
              2
            </Marker>
            <MarkerWithPopover
              x={45} y={72}
              tone="destructive"
              label="Reported strain"
              content={
                <div>
                  <p className="font-medium">Lower back</p>
                  <p className="mt-1 text-muted-foreground">
                    Strain reported on 12 July. Avoid loaded flexion.
                  </p>
                </div>
              }
            >
              3
            </MarkerWithPopover>
          </MarkerSurface>
        </Preview>
      </Section>

      <Note>
        Positioned with <code>inset-inline-start</code>, so a marker at 25%
        sits 25% from the reading edge in both directions.
      </Note>
    </>
  );
}

function AttachmentDocs() {
  return (
    <Section title="States">
      <Preview align="stretch">
        <AttachmentList>
          <Attachment
            name="training-plan.pdf"
            type="application/pdf"
            size={2_400_000}
            onRemove={() => {}}
          />
          <Attachment
            name="progress-photo.jpg"
            type="image/jpeg"
            size={840_000}
            onRemove={() => {}}
          />
          <Attachment
            name="session-recording.mp4"
            type="video/mp4"
            status="uploading"
            progress={62}
          />
          <Attachment
            name="huge-archive.zip"
            type="application/zip"
            status="error"
            error="File exceeds the 25 MB limit"
            onRemove={() => {}}
          />
        </AttachmentList>
      </Preview>
    </Section>
  );
}

/* ── Messaging ──────────────────────────────────────────────────────────── */

function BubbleDocs() {
  return (
    <>
      <Section title="Conversation">
        <Preview align="stretch">
          <div className="flex flex-col gap-3">
            <BubbleGroup side="incoming">
              <Bubble side="incoming">
                How did the session go today?
              </Bubble>
              <Bubble side="incoming">Did you hit the target volume?</Bubble>
              <BubbleTimestamp>09:41</BubbleTimestamp>
            </BubbleGroup>

            <BubbleGroup side="outgoing">
              <Bubble side="outgoing">
                Yeah — three sets of twelve at 22.5 kg.
              </Bubble>
              <Bubble side="outgoing" state="pending">
                Sending the log now…
              </Bubble>
              <BubbleTimestamp>09:43</BubbleTimestamp>
            </BubbleGroup>

            <BubbleGroup side="outgoing">
              <Bubble side="outgoing" state="failed">
                This one failed to send.
              </Bubble>
            </BubbleGroup>
          </div>
        </Preview>
      </Section>

      <Note title="Two directions at once">
        Bubbles use logical margins, so &quot;mine&quot; hugs the end edge in
        both LTR and RTL. Each bubble also carries{" "}
        <code>dir=&quot;auto&quot;</code>, so an Arabic message inside an
        English thread lays itself out correctly — real conversations are
        mixed-language, and the container&apos;s direction is the wrong answer
        for individual messages.
      </Note>
    </>
  );
}

function MessageDocs() {
  return (
    <Section title="Threaded messages">
      <Preview align="stretch">
        <div className="w-full rounded-lg border border-border py-2">
          <Message>
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>
                <MessageAuthor>Chris Bumstead</MessageAuthor>
                <MessageTimestamp>09:41</MessageTimestamp>
              </MessageHeader>
              <MessageBody>
                Nice work on the volume this week. Let&apos;s add a deload in W5.
              </MessageBody>
            </MessageContent>
          </Message>

          <Message continued>
            <MessageAvatar hidden />
            <MessageContent>
              <MessageBody>
                I&apos;ll update the plan tonight.
              </MessageBody>
            </MessageContent>
          </Message>

          <Message>
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>
                <MessageAuthor>Jack Ryan</MessageAuthor>
                <MessageTimestamp>09:52</MessageTimestamp>
              </MessageHeader>
              <MessageBody>Sounds good — thanks!</MessageBody>
              <div className="mt-1.5 flex gap-1">
                <Button variant="ghost" size="xs">
                  <SmilePlus />
                </Button>
                <Button variant="ghost" size="xs">
                  <Reply />
                  Reply
                </Button>
              </div>
            </MessageContent>
          </Message>
        </div>
      </Preview>
    </Section>
  );
}

function MessageScrollerDocs() {
  const [messages, setMessages] = React.useState(
    Array.from({ length: 12 }, (_, i) => `Message ${i + 1}`),
  );

  return (
    <>
      <Section
        title="Stick to bottom"
        description="Add a message while scrolled to the bottom and it follows. Scroll up first and it stays put — with a button to jump back."
      >
        <Preview align="stretch">
          <div className="flex h-64 w-full flex-col rounded-lg border border-border">
            <MessageScroller dependency={messages.length} className="p-3">
              <div className="flex flex-col gap-2">
                {messages.map((m) => (
                  <Bubble key={m} side="incoming">
                    {m}
                  </Bubble>
                ))}
              </div>
            </MessageScroller>
          </div>
          <Button
            size="sm"
            className="mt-3 self-start"
            onClick={() =>
              setMessages((prev) => [...prev, `Message ${prev.length + 1}`])
            }
          >
            Add message
          </Button>
        </Preview>
      </Section>

      <Note title="The one behaviour chat UIs get wrong">
        Auto-scrolling on every new message yanks the user away mid-sentence
        when they&apos;re reading history. This only follows while they were
        already at the bottom, and surfaces a jump button otherwise.
      </Note>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "dependency", type: "unknown", description: "Changing this triggers the stick-to-bottom check. Usually the message count." },
            { name: "threshold", type: "number", default: "80", description: "Distance from the bottom, in px, still counted as 'at the bottom'." },
          ]}
        />
      </Section>
    </>
  );
}

export const DATA_DOCS: Record<string, () => React.JSX.Element> = {
  table: TableDocs,
  "data-table": DataTableDocs,
  chart: ChartDocs,
  calendar: CalendarDocs,
  "date-picker": DatePickerDocs,
  marker: MarkerDocs,
  attachment: AttachmentDocs,
  bubble: BubbleDocs,
  message: MessageDocs,
  "message-scroller": MessageScrollerDocs,
};
