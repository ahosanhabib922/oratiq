"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CodeSnippetProps {
  code: string;
  /** Header label — a filename or language. */
  label?: string;
  /** One-line command style: no header, inline copy button. */
  inline?: boolean;
  maxHeight?: number;
  className?: string;
}

/**
 * Code with a copy button. Pinned `dir="ltr"` — source is a technical
 * sequence and never reorders with the page's writing direction.
 */
export function CodeSnippet({
  code,
  label,
  inline = false,
  maxHeight,
  className,
}: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — text stays selectable */
    }
  }

  const copyButton = (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy code"}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-md",
        "text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      {copied ? (
        <Check className="size-3.5 text-success" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );

  if (inline) {
    return (
      <div
        dir="ltr"
        className={cn(
          "flex items-center gap-2 rounded-lg border border-border bg-muted/40 py-1.5 ps-3 pe-1.5",
          className,
        )}
      >
        <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap">
          {code}
        </code>
        {copyButton}
      </div>
    );
  }

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
        {copyButton}
      </div>
      <pre
        className="overflow-auto p-4 font-mono text-xs leading-relaxed"
        style={maxHeight ? { maxHeight } : undefined}
      >
        {code}
      </pre>
    </div>
  );
}
