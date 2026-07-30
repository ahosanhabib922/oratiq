import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The type scale uses standard Tailwind step names, so tailwind-merge already
 * resolves `text-sm` vs `text-lg` correctly. Two things it can't know about:
 * our extra `2xs` step, and our semantic colour roles — without registering
 * them, `cn("text-destructive", "text-sm")` drops the colour.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    classGroups: {
      "font-size": [{ text: ["2xs"] }],
      "text-color": [
        {
          text: [
            "background",
            "foreground",
            "card-foreground",
            "popover-foreground",
            "primary",
            "primary-foreground",
            "secondary",
            "secondary-foreground",
            "muted",
            "muted-foreground",
            "accent",
            "accent-foreground",
            "destructive",
            "destructive-foreground",
            "success",
            "success-foreground",
            "warning",
            "warning-foreground",
            "info",
            "info-foreground",
            "sidebar-foreground",
            "sidebar-accent-foreground",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
