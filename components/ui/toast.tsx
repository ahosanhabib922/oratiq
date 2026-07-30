"use client";

import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";
import { useTheme } from "next-themes";
import { useDirection } from "@/components/providers";

/**
 * Toast host. Mount once, near the root.
 *
 * Position is resolved from the writing direction: "bottom-right" in LTR
 * becomes "bottom-left" in RTL, so toasts always land on the trailing edge
 * rather than jumping across the screen when the language changes.
 */
export function Toaster(props: React.ComponentProps<typeof Sonner>) {
  const { resolvedTheme } = useTheme();
  const { direction } = useDirection();

  const position = props.position ?? (direction === "rtl" ? "bottom-left" : "bottom-right");

  return (
    <Sonner
      theme={resolvedTheme as "light" | "dark" | "system"}
      dir={direction}
      position={position}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:rounded-md",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:rounded-md",
          error: "group-[.toaster]:border-destructive/30",
          success: "group-[.toaster]:border-success/30",
          warning: "group-[.toaster]:border-warning/30",
          info: "group-[.toaster]:border-info/30",
        },
      }}
      {...props}
    />
  );
}

export { toast };
