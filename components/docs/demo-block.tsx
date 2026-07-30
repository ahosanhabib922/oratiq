"use client";

import * as React from "react";
import { ChevronDown, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEMOS } from "@/components/demos";
import { CodeBlock } from "./code-block";

export interface DemoBlockProps {
  /** Key in the demo registry — also the source file's name. */
  name: string;
  /** Layout of the preview area. */
  align?: "center" | "stretch";
  className?: string;
}

/**
 * A live demo with a copyable "Code" view — the shadcn docs pattern.
 *
 * The rendered example and the displayed source are the same file, so they
 * cannot drift. Source is fetched lazily from /demos/<name>.txt (emitted by
 * the registry build) the first time the code view is opened.
 */
export function DemoBlock({ name, align = "center", className }: DemoBlockProps) {
  const Demo = DEMOS[name];
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState<string | null>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!open || source || failed) return;
    fetch(`/demos/${name}.txt`)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then(setSource)
      .catch(() => setFailed(true));
  }, [open, source, failed, name]);

  if (!Demo) return null;

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      <div
        className={cn(
          "flex min-h-32 gap-4 p-4 sm:p-8",
          align === "center" && "flex-wrap items-center justify-center",
          align === "stretch" && "flex-col items-stretch",
        )}
      >
        <Demo />
      </div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center gap-2 border-t border-border px-4 py-2",
          "text-xs font-medium text-muted-foreground transition-colors",
          "hover:bg-muted/40 hover:text-foreground",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        <Code2 className="size-3.5" />
        Code
        <ChevronDown
          className={cn(
            "ms-auto size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="border-t border-border">
          {source ? (
            <CodeBlock
              code={source}
              label={`${name}.tsx`}
              maxHeight={360}
              className="rounded-none border-0"
            />
          ) : (
            <p className="p-4 text-xs text-muted-foreground">
              {failed ? "Couldn't load the source." : "Loading…"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
