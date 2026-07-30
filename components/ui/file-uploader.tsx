"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { Attachment, AttachmentList, formatBytes } from "./attachment";

export interface FileUploaderProps {
  /** e.g. "image/*,.pdf" — forwarded to the input and checked on drop. */
  accept?: string;
  multiple?: boolean;
  /** Per-file cap in bytes; larger files are listed with an error state. */
  maxSize?: number;
  disabled?: boolean;
  onFilesChange?: (files: File[]) => void;
  label?: string;
  description?: string;
  className?: string;
}

interface TrackedFile {
  file: File;
  error?: string;
}

function matchesAccept(file: File, accept?: string) {
  if (!accept) return true;
  return accept.split(",").some((rule) => {
    const r = rule.trim().toLowerCase();
    if (!r) return true;
    if (r.startsWith(".")) return file.name.toLowerCase().endsWith(r);
    if (r.endsWith("/*")) return file.type.startsWith(r.slice(0, -1));
    return file.type === r;
  });
}

/**
 * Drag-and-drop upload zone. The drop area is also a real
 * `<input type="file">` activation target, so keyboard and screen-reader
 * users get the native picker. Accepted files render as Attachments.
 */
export function FileUploader({
  accept,
  multiple = true,
  maxSize,
  disabled,
  onFilesChange,
  label = "Upload files",
  description,
  className,
}: FileUploaderProps) {
  const [tracked, setTracked] = React.useState<TrackedFile[]>([]);
  const [dragging, setDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function ingest(incoming: FileList | File[]) {
    const next: TrackedFile[] = [...tracked];
    for (const file of Array.from(incoming)) {
      if (!multiple && next.length >= 1) break;
      if (next.some((t) => t.file.name === file.name && t.file.size === file.size))
        continue;
      let error: string | undefined;
      if (!matchesAccept(file, accept)) error = "File type not accepted";
      else if (maxSize && file.size > maxSize)
        error = `Larger than ${formatBytes(maxSize)}`;
      next.push({ file, error });
    }
    setTracked(next);
    onFilesChange?.(next.filter((t) => !t.error).map((t) => t.file));
  }

  function remove(target: TrackedFile) {
    const next = tracked.filter((t) => t !== target);
    setTracked(next);
    onFilesChange?.(next.filter((t) => !t.error).map((t) => t.file));
  }

  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (!disabled) ingest(e.dataTransfer.files);
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-8 text-center",
          "transition-colors duration-150",
          dragging
            ? "border-ring bg-primary/5"
            : "border-border hover:border-ring/50 hover:bg-muted/40",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <UploadCloud className="size-5" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground">
          {description ??
            `Drag and drop, or click to browse${maxSize ? ` · up to ${formatBytes(maxSize)}` : ""}`}
        </span>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => {
            if (e.target.files) ingest(e.target.files);
            e.target.value = "";
          }}
          className="sr-only"
        />
      </label>

      {tracked.length > 0 && (
        <AttachmentList>
          {tracked.map((t) => (
            <Attachment
              key={`${t.file.name}-${t.file.size}`}
              name={t.file.name}
              size={t.file.size}
              type={t.file.type}
              status={t.error ? "error" : "complete"}
              error={t.error}
              onRemove={() => remove(t)}
            />
          ))}
        </AttachmentList>
      )}
    </div>
  );
}
