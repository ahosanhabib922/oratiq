/**
 * Shared styling for the three menu families — Dropdown Menu, Context Menu,
 * and Menubar. They wrap different Radix primitives but are the same control
 * to a user, so the classes live in one place rather than being copied three
 * times and drifting apart.
 */

export const menuContent = [
  "z-50 min-w-[10rem] overflow-hidden rounded-lg border border-border bg-popover p-1",
  "text-popover-foreground shadow-lg",
  "origin-(--radix-dropdown-menu-content-transform-origin)",
  "data-[state=open]:animate-[zoom-in_120ms_ease-out]",
  "data-[state=closed]:animate-[zoom-out_80ms_ease-in]",
].join(" ");

export const menuItem = [
  "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm",
  "outline-none transition-colors",
  "focus:bg-accent focus:text-accent-foreground",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  "data-[variant=destructive]:text-destructive",
  "data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive",
  "[&_svg]:size-4 [&_svg]:shrink-0",
].join(" ");

/** Checkbox and radio items reserve room for their indicator. */
export const menuIndicatorItem = `${menuItem} ps-8`;

export const menuIndicator =
  "absolute start-2 flex size-4 items-center justify-center";

export const menuLabel = "px-2 py-1.5 text-xs font-medium text-muted-foreground";

export const menuSeparator = "-mx-1 my-1 h-px bg-border";

/** Trailing shortcut hint. Pushed to the end edge, so it flips under RTL. */
export const menuShortcut =
  "ms-auto text-xs tracking-widest text-muted-foreground";

/** Sub-triggers keep the same shape as items but always show a chevron. */
export const menuSubTrigger = `${menuItem} data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`;
