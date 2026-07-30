"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be unavailable (permissions, http) — fail quietly;
      // the text is selectable either way.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-md",
        "text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
    </button>
  );
}

export interface CodeBlockProps {
  code: string;
  /** Shown in the header bar, e.g. a filename or "Terminal". */
  label?: string;
  className?: string;
  /** Caps the height; longer code scrolls inside the block. */
  maxHeight?: number;
}

/**
 * Code with a copy button. Always `dir="ltr"` — source code is a technical
 * sequence and never reorders with the page's writing direction.
 */
export function CodeBlock({ code, label, className, maxHeight }: CodeBlockProps) {
  return (
    <div
      dir="ltr"
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-muted/40",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-1.5">
        <span className="font-mono text-xs text-muted-foreground">
          {label ?? "Code"}
        </span>
        <CopyButton text={code} />
      </div>
      <pre
        className="overflow-auto p-4 font-mono text-xs leading-relaxed text-foreground"
        style={maxHeight ? { maxHeight } : undefined}
      >
        {code}
      </pre>
    </div>
  );
}

/** One-liner shell command with a copy button. */
export function CommandBlock({
  command,
  className,
}: {
  command: string;
  className?: string;
}) {
  return (
    <div
      dir="ltr"
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-muted/40 ps-4 pe-2 py-2.5",
        className,
      )}
    >
      <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap text-foreground">
        <span className="select-none text-muted-foreground">$ </span>
        {command}
      </code>
      <CopyButton text={command} />
    </div>
  );
}
