"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
  {
    variants: {
      size: {
        xs: "size-6 text-2xs",
        sm: "size-8 text-xs",
        default: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
        "2xl": "size-24 text-2xl",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarVariants>
>(function Avatar({ className, size, ...props }, ref) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
});

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(function AvatarImage({ className, ...props }, ref) {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
});

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(function AvatarFallback({ className, ...props }, ref) {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex size-full items-center justify-center rounded-full font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
});

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: VariantProps<typeof avatarVariants>["size"];
  /** Total count, when more avatars exist than were passed as children. */
  total?: number;
}

/**
 * Overlapping stack. Uses a negative *logical* margin, so the stack leans the
 * correct way under RTL.
 */
export function AvatarGroup({
  className,
  max = 4,
  size = "default",
  total,
  children,
  ...props
}: AvatarGroupProps) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const overflow = (total ?? items.length) - shown.length;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      {shown.map((child, i) => (
        <div
          key={i}
          className={cn("rounded-full ring-2 ring-background", i > 0 && "-ms-2.5")}
        >
          {child}
        </div>
      ))}
      {overflow > 0 && (
        <div className="-ms-2.5 rounded-full ring-2 ring-background">
          <Avatar size={size}>
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              +{overflow}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
}

export { avatarVariants };
