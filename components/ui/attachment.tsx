"use client";

import * as React from "react";
import {
  File,
  FileArchive,
  FileAudio,
  FileImage,
  FileText,
  FileVideo,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "./progress";
import { Spinner } from "./spinner";

function iconFor(mime: string) {
  if (mime.startsWith("image/")) return FileImage;
  if (mime.startsWith("video/")) return FileVideo;
  if (mime.startsWith("audio/")) return FileAudio;
  if (mime.includes("zip") || mime.includes("tar") || mime.includes("rar"))
    return FileArchive;
  if (mime.startsWith("text/") || mime.includes("pdf")) return FileText;
  return File;
}

/** Binary units, rounded the way file managers show them. */
export function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export interface AttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: number;
  type?: string;
  /** 0–100 while uploading. Omit once complete. */
  progress?: number;
  status?: "uploading" | "complete" | "error";
  error?: string;
  onRemove?: () => void;
  /** Thumbnail URL for image attachments. */
  preview?: string;
}

export function Attachment({
  name,
  size,
  type = "",
  progress,
  status = "complete",
  error,
  onRemove,
  preview,
  className,
  ...props
}: AttachmentProps) {
  const Icon = iconFor(type);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-card p-2.5",
        status === "error" && "border-destructive/40 bg-destructive/5",
        className,
      )}
      {...props}
    >
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground">
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="" className="size-full object-cover" />
        ) : status === "uploading" ? (
          <Spinner size="sm" label={null} />
        ) : (
          <Icon className="size-5" />
        )}
      </span>

      <div className="min-w-0 flex-1">
        {/* Filenames are user data and often mixed-script; `auto` keeps the
            extension attached to the name instead of jumping to the far end. */}
        <p dir="auto" className="truncate text-sm font-medium text-foreground">
          {name}
        </p>
        {status === "error" ? (
          <p className="truncate text-xs text-destructive">{error ?? "Upload failed"}</p>
        ) : status === "uploading" && progress !== undefined ? (
          <Progress value={progress} size="sm" className="mt-1.5" />
        ) : (
          size !== undefined && (
            <p className="text-xs tnum text-muted-foreground">{formatBytes(size)}</p>
          )
        )}
      </div>

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className={cn(
            "inline-flex size-7 shrink-0 items-center justify-center rounded-md",
            "text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}

export function AttachmentList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}
