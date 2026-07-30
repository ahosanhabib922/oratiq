import * as React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ComponentStatus } from "@/lib/registry";

/* ── Page scaffolding ───────────────────────────────────────────────────── */

export function DocsPage({
  title,
  description,
  status,
  dependencies,
  children,
}: {
  title: string;
  description: string;
  status?: ComponentStatus;
  dependencies?: string[];
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-10">
      <header className="mb-12">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          {status && <StatusBadge status={status} />}
        </div>
        <p className="text-lg text-balance text-muted-foreground">{description}</p>

        {dependencies && dependencies.length > 0 && (
          <p className="mt-4 text-sm text-muted-foreground">
            Requires{" "}
            {dependencies.map((dep, i) => (
              <React.Fragment key={dep}>
                {i > 0 && ", "}
                <code
                  dir="ltr"
                  className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground"
                >
                  {dep}
                </code>
              </React.Fragment>
            ))}
          </p>
        )}
      </header>
      <div className="flex flex-col gap-14">{children}</div>
    </article>
  );
}

export function StatusBadge({ status }: { status: ComponentStatus }) {
  const map = {
    ready: { label: "Ready", variant: "success" as const },
    "in-progress": { label: "In progress", variant: "warning" as const },
    planned: { label: "Planned", variant: "muted" as const },
  };
  const { label, variant } = map[status];
  return (
    <Badge variant={variant} size="sm">
      {label}
    </Badge>
  );
}

export function Section({
  title,
  description,
  children,
  id,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      {description && (
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

/* ── Preview surface ────────────────────────────────────────────────────── */

export function Preview({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "start" | "stretch";
}) {
  return (
    <div
      className={cn(
        "flex min-h-32 gap-4 rounded-xl border border-border p-4 sm:p-8",
        // `flex-wrap` must not combine with `flex-col`: column wrapping turns
        // the container's min-height into a wrap constraint and children stop
        // contributing intrinsic height — they overflow the box invisibly.
        align === "center" && "flex-wrap items-center justify-center",
        align === "start" && "flex-wrap items-start",
        align === "stretch" && "flex-col items-stretch",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * A labelled grid of specimens. This is the core docs unit: every variant and
 * every state visible at once, so a reviewer can spot an inconsistency without
 * clicking through anything.
 */
export function Specimens({
  items,
  columns = 3,
  className,
}: {
  items: { label: string; caption?: string; node: React.ReactNode }[];
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    5: "sm:grid-cols-3 lg:grid-cols-5",
    6: "sm:grid-cols-3 lg:grid-cols-6",
  }[columns];

  return (
    <div className={cn("grid gap-px overflow-hidden rounded-xl border border-border bg-border", cols, className)}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-3 bg-background p-4 sm:p-5">
          <div className="flex min-h-16 flex-wrap items-center gap-3">
            {item.node}
          </div>
          <div className="mt-auto">
            <p className="font-mono text-xs text-foreground">{item.label}</p>
            {item.caption && (
              <p className="mt-0.5 text-xs text-muted-foreground">{item.caption}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Props table ────────────────────────────────────────────────────────── */

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

export function PropsTable({ props: defs }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-start font-medium">Prop</th>
            <th className="px-4 py-3 text-start font-medium">Type</th>
            <th className="px-4 py-3 text-start font-medium">Default</th>
            <th className="px-4 py-3 text-start font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {defs.map((def) => (
            <tr key={def.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 align-top">
                <code dir="ltr" className="font-mono text-xs text-foreground">
                  {def.name}
                </code>
                {def.required && (
                  <span className="ms-1 text-destructive" aria-label="required">
                    *
                  </span>
                )}
              </td>
              <td className="px-4 py-3 align-top">
                <code
                  dir="ltr"
                  className="font-mono text-xs break-all text-muted-foreground"
                >
                  {def.type}
                </code>
              </td>
              <td className="px-4 py-3 align-top">
                {def.default ? (
                  <code dir="ltr" className="font-mono text-xs text-muted-foreground">
                    {def.default}
                  </code>
                ) : (
                  <span className="text-xs text-muted-foreground">—</span>
                )}
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {def.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Guidance ───────────────────────────────────────────────────────────── */

export function DoDont({
  items,
}: {
  items: { type: "do" | "dont"; text: string; example?: React.ReactNode }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-3 rounded-xl border p-5",
            item.type === "do"
              ? "border-success/30 bg-success/5"
              : "border-destructive/30 bg-destructive/5",
          )}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full",
                item.type === "do"
                  ? "bg-success text-success-foreground"
                  : "bg-destructive text-destructive-foreground",
              )}
            >
              {item.type === "do" ? (
                <Check className="size-3" strokeWidth={3} />
              ) : (
                <X className="size-3" strokeWidth={3} />
              )}
            </span>
            <span className="text-sm font-medium">
              {item.type === "do" ? "Do" : "Don't"}
            </span>
          </div>
          {item.example && (
            <div className="flex flex-wrap items-center gap-3">{item.example}</div>
          )}
          <p className="text-sm text-muted-foreground">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Note({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border-s-2 border-primary bg-muted/40 px-5 py-4">
      {title && <p className="mb-1 text-sm font-medium">{title}</p>}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

/** Accessibility contract for a component. */
export function A11yNotes({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-success" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
