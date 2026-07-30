"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { DirectionProvider } from "./direction-provider";
import { Tooltip } from "radix-ui";
import { Toaster } from "@/components/ui/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <DirectionProvider>
        <Tooltip.Provider delayDuration={200}>
          {children}
          <Toaster />
        </Tooltip.Provider>
      </DirectionProvider>
    </ThemeProvider>
  );
}

export { useDirection } from "./direction-provider";
export type { Direction } from "./direction-provider";
