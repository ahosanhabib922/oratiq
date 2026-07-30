"use client";

import * as React from "react";
import QR from "qrcode";
import { cn } from "@/lib/utils";

export interface QRCodeProps {
  value: string;
  /** Rendered size in px. */
  size?: number;
  /** Defaults to the current foreground/background tokens. */
  foreground?: string;
  background?: string;
  /** Error-correction level; raise it if you overlay a logo. */
  level?: "L" | "M" | "Q" | "H";
  label?: string;
  className?: string;
}

/**
 * Themed QR code, rendered as SVG. A QR is machine-read geometry — it is
 * never mirrored under RTL.
 */
export function QRCode({
  value,
  size = 160,
  foreground,
  background = "transparent",
  level = "M",
  label,
  className,
}: QRCodeProps) {
  const [svg, setSvg] = React.useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Resolve the token at render time so the code follows the theme.
    const dark =
      foreground ??
      (ref.current
        ? getComputedStyle(ref.current).color
        : "#000000");
    QR.toString(value, {
      type: "svg",
      errorCorrectionLevel: level,
      margin: 0,
      color: { dark, light: background === "transparent" ? "#0000" : background },
    })
      .then(setSvg)
      .catch(() => setSvg(null));
  }, [value, foreground, background, level]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label ?? `QR code: ${value}`}
      style={{ width: size, height: size }}
      className={cn("text-foreground [&_svg]:size-full", className)}
      // The generated SVG is inert geometry from a trusted encoder.
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}
