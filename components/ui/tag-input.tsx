"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagInputProps {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (tags: string[]) => void;
  placeholder?: string;
  /** Maximum number of tags; further entries are ignored. */
  max?: number;
  disabled?: boolean;
  label?: string;
  className?: string;
}

/**
 * Free-text tags. Enter or comma commits a tag; Backspace on an empty input
 * removes the last one. Duplicates are ignored.
 */
export function TagInput({
  value,
  defaultValue = [],
  onValueChange,
  placeholder = "Add a tag…",
  max,
  disabled,
  label = "Tags",
  className,
}: TagInputProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [draft, setDraft] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;
  const tags = isControlled ? value : internal;

  function commit(next: string[]) {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  }

  function addTag(raw: string) {
    const tag = raw.trim();
    if (!tag) return;
    if (tags.includes(tag)) return setDraft("");
    if (max !== undefined && tags.length >= max) return;
    commit([...tags, tag]);
    setDraft("");
  }

  function removeTag(tag: string) {
    commit(tags.filter((t) => t !== tag));
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(draft);
    } else if (e.key === "Backspace" && draft === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  }

  return (
    <div
      role="group"
      aria-label={label}
      onClick={() => inputRef.current?.focus()}
      className={cn(
        "flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-lg border border-input bg-transparent px-2 py-1.5",
        "cursor-text transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          // Tags are user content in an unknown language.
          dir="auto"
          className="inline-flex items-center gap-1 rounded-md bg-secondary py-0.5 ps-2 pe-1 text-xs font-medium text-secondary-foreground"
        >
          {tag}
          <button
            type="button"
            aria-label={`Remove ${tag}`}
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              removeTag(tag);
            }}
            className={cn(
              "inline-flex size-4 items-center justify-center rounded-sm",
              "transition-colors hover:bg-foreground/10",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <X className="size-3" />
          </button>
        </span>
      ))}
      <input
        ref={inputRef}
        value={draft}
        disabled={disabled}
        placeholder={tags.length === 0 ? placeholder : undefined}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => addTag(draft)}
        className="min-w-20 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
