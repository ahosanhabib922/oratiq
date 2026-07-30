"use client";

import * as React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface MessageScrollerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Changing this triggers the stick-to-bottom check. */
  dependency?: unknown;
  /** Distance from the bottom, in px, still counted as "at the bottom". */
  threshold?: number;
  jumpLabel?: string;
}

/**
 * Scroll container for message lists.
 *
 * Sticks to the bottom while the user is already there, and stops sticking the
 * moment they scroll up to read history — the single behaviour every chat UI
 * needs and most get wrong. A jump-to-latest button appears while detached.
 */
export function MessageScroller({
  dependency,
  threshold = 80,
  jumpLabel = "Jump to latest",
  className,
  children,
  ...props
}: MessageScrollerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = React.useState(true);

  const scrollToBottom = React.useCallback((behavior: ScrollBehavior = "smooth") => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior });
  }, []);

  function handleScroll() {
    const el = ref.current;
    if (!el) return;
    const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
    setPinned(distance <= threshold);
  }

  // Only follow new content while the user hasn't scrolled away.
  React.useEffect(() => {
    if (pinned) scrollToBottom("auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  React.useEffect(() => {
    scrollToBottom("auto");
  }, [scrollToBottom]);

  return (
    <div className="relative min-h-0 flex-1">
      <div
        ref={ref}
        onScroll={handleScroll}
        className={cn("h-full overflow-y-auto overscroll-contain", className)}
        {...props}
      >
        {children}
      </div>

      {!pinned && (
        <Button
          size="sm"
          shape="pill"
          onClick={() => scrollToBottom()}
          className={cn(
            "absolute bottom-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
            "shadow-lg",
          )}
        >
          <ArrowDown />
          {jumpLabel}
        </Button>
      )}
    </div>
  );
}
