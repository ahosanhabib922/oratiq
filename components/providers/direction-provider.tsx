"use client";

import * as React from "react";
import { Direction as RadixDirection } from "radix-ui";

export type Direction = "ltr" | "rtl";

interface DirectionContextValue {
  direction: Direction;
  setDirection: (direction: Direction) => void;
  toggleDirection: () => void;
}

const DirectionContext = React.createContext<DirectionContextValue | null>(null);

export function useDirection() {
  const context = React.useContext(DirectionContext);
  if (!context) {
    throw new Error("useDirection must be used within a <DirectionProvider>.");
  }
  return context;
}

const STORAGE_KEY = "ui-direction";

/**
 * Single source of truth for writing direction.
 *
 * Three things have to agree, or RTL breaks in subtle ways:
 *   1. `document.documentElement.dir` — drives CSS logical properties and
 *      Tailwind's `rtl:` variant.
 *   2. Radix's own DirectionProvider — drives keyboard navigation, so arrow
 *      keys move the right way in menus, tabs, and sliders.
 *   3. React state — so components can branch on direction when CSS can't.
 */
export function DirectionProvider({
  children,
  defaultDirection = "ltr",
}: {
  children: React.ReactNode;
  defaultDirection?: Direction;
}) {
  const [direction, setDirectionState] =
    React.useState<Direction>(defaultDirection);

  // Restore the persisted choice after hydration, never during render.
  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ltr" || stored === "rtl") setDirectionState(stored);
  }, []);

  React.useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === "rtl" ? "ar" : "en";
  }, [direction]);

  const setDirection = React.useCallback((next: Direction) => {
    setDirectionState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = React.useMemo<DirectionContextValue>(
    () => ({
      direction,
      setDirection,
      toggleDirection: () => setDirection(direction === "ltr" ? "rtl" : "ltr"),
    }),
    [direction, setDirection],
  );

  return (
    <DirectionContext.Provider value={value}>
      <RadixDirection.DirectionProvider dir={direction}>
        {children}
      </RadixDirection.DirectionProvider>
    </DirectionContext.Provider>
  );
}
