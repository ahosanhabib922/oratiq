import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "./button";

/**
 * OAuth sign-in buttons with self-contained brand marks.
 *
 * Logos are inline SVG — no icon-library dependency, and they are never
 * mirrored under RTL (a brand mark is a logo, not a directional glyph).
 */

function GoogleMark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.46a5.53 5.53 0 0 1-2.4 3.62v3h3.87c2.27-2.09 3.57-5.17 3.57-8.81Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.37-2.28v-3.1H1.28a12 12 0 0 0 0 10.76l3.99-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.6 4.59 1.79l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.62l3.99 3.1C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}

function AppleMark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.05 12.54c-.03-2.9 2.37-4.3 2.48-4.37-1.35-1.98-3.46-2.25-4.2-2.28-1.79-.18-3.5 1.05-4.4 1.05-.9 0-2.3-1.03-3.79-1-1.95.03-3.75 1.13-4.75 2.88-2.03 3.52-.52 8.72 1.46 11.58.97 1.4 2.12 2.96 3.63 2.9 1.46-.06 2.01-.94 3.77-.94s2.26.94 3.8.91c1.57-.03 2.56-1.42 3.52-2.83 1.11-1.62 1.56-3.19 1.59-3.27-.03-.02-3.05-1.17-3.11-4.63ZM14.16 4c.8-.98 1.35-2.33 1.2-3.68-1.16.05-2.57.77-3.4 1.75-.75.86-1.4 2.25-1.22 3.57 1.29.1 2.6-.66 3.42-1.64Z" />
    </svg>
  );
}

function GitHubMark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function FacebookMark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true" {...props}>
      <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

const PROVIDERS = {
  google: { name: "Google", Mark: GoogleMark },
  apple: { name: "Apple", Mark: AppleMark },
  github: { name: "GitHub", Mark: GitHubMark },
  facebook: { name: "Facebook", Mark: FacebookMark },
} as const;

export type SocialProvider = keyof typeof PROVIDERS;

export interface SocialButtonProps extends Omit<ButtonProps, "children"> {
  provider: SocialProvider;
  /** "Continue with", "Sign in with", or your own copy. */
  action?: string;
  /** Logo only — remember buttons still need their aria-label (set here). */
  iconOnly?: boolean;
}

export function SocialButton({
  provider,
  action = "Continue with",
  iconOnly = false,
  variant = "outline",
  className,
  ...props
}: SocialButtonProps) {
  const { name, Mark } = PROVIDERS[provider];
  const accessibleLabel = `${action} ${name}`;

  return (
    <Button
      variant={variant}
      aria-label={iconOnly ? accessibleLabel : undefined}
      size={iconOnly ? "icon" : props.size}
      className={cn(!iconOnly && "w-full", className)}
      {...props}
    >
      <Mark className="size-4 shrink-0" />
      {!iconOnly && accessibleLabel}
    </Button>
  );
}

/** Stack or row of providers with one callback. */
export function SocialButtons({
  providers = ["google", "apple", "github"],
  action,
  iconOnly = false,
  onProviderClick,
  className,
}: {
  providers?: SocialProvider[];
  action?: string;
  iconOnly?: boolean;
  onProviderClick?: (provider: SocialProvider) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        iconOnly ? "flex items-center gap-2" : "flex w-full flex-col gap-2",
        className,
      )}
    >
      {providers.map((provider) => (
        <SocialButton
          key={provider}
          provider={provider}
          action={action}
          iconOnly={iconOnly}
          onClick={() => onProviderClick?.(provider)}
        />
      ))}
    </div>
  );
}
