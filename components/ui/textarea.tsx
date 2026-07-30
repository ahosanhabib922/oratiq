"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Grows with content instead of scrolling. */
  autoResize?: boolean;
  /** Renders a live character count against `maxLength`. */
  showCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className, autoResize, showCount, maxLength, onChange, ...props },
    ref,
  ) {
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current!, []);

    const [count, setCount] = React.useState(
      String(props.value ?? props.defaultValue ?? "").length,
    );

    const resize = React.useCallback(() => {
      const el = innerRef.current;
      if (!el || !autoResize) return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }, [autoResize]);

    React.useEffect(resize, [resize, props.value]);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setCount(e.target.value.length);
      resize();
      onChange?.(e);
    }

    return (
      <div className="relative w-full">
        <textarea
          ref={innerRef}
          data-slot="textarea"
          maxLength={maxLength}
          onChange={handleChange}
          className={cn(
            "flex min-h-20 w-full rounded-lg border border-input bg-transparent px-3.5 py-2.5",
            "text-sm text-foreground placeholder:text-muted-foreground",
            "transition-[color,box-shadow,border-color] duration-150 ease-out-quart",
            "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/30",
            autoResize ? "resize-none overflow-hidden" : "resize-y",
            showCount && "pb-7",
            className,
          )}
          {...props}
        />
        {showCount && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 end-3 text-xs tnum text-muted-foreground"
          >
            {count}
            {maxLength ? `/${maxLength}` : ""}
          </span>
        )}
      </div>
    );
  },
);
