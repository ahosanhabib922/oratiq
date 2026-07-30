"use client";

import * as React from "react";
import {
  Calculator,
  CalendarDays,
  Copy,
  CreditCard,
  Edit,
  Settings,
  Smile,
  Trash2,
  User,
} from "lucide-react";

import {
  A11yNotes,
  Note,
  Preview,
  PropsTable,
  Section,
} from "@/components/docs/docs-primitives";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  useCommandShortcut,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Text } from "@/components/ui/typography";
import { toast } from "@/components/ui/toast";

/* ── Dialog ─────────────────────────────────────────────────────────────── */

function DialogDocs() {
  return (
    <>
      <Section title="Default">
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Edit profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Changes are saved to your account immediately.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Jack Ryan" />
                </Field>
                <Field>
                  <FieldLabel>Username</FieldLabel>
                  <Input defaultValue="@jack" />
                </Field>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
      </Section>

      <Section title="Sizes and scrolling body">
        <Preview>
          {(["sm", "default", "lg", "xl"] as const).map((size) => (
            <Dialog key={size}>
              <DialogTrigger asChild>
                <Button variant="outline">{size}</Button>
              </DialogTrigger>
              <DialogContent size={size}>
                <DialogHeader>
                  <DialogTitle>Size: {size}</DialogTitle>
                  <DialogDescription>
                    The body scrolls independently, so the header and footer stay
                    pinned on short viewports.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </Preview>
      </Section>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Focus is trapped inside the dialog and returned to the trigger on close.",
            "Escape closes; clicking the overlay closes. Both are expected of a non-destructive dialog.",
            "DialogTitle is required — without it the dialog has no accessible name. Use sr-only if it shouldn't be visible.",
            "Content behind is inert and hidden from the accessibility tree while open.",
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "size", type: '"sm" | "default" | "lg" | "xl" | "full"', default: '"default"', description: "Maximum width." },
            { name: "hideClose", type: "boolean", default: "false", description: "Removes the built-in close button." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Alert dialog ───────────────────────────────────────────────────────── */

function AlertDialogDocs() {
  return (
    <>
      <Section title="Destructive confirmation">
        <Preview>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 />
                Delete workout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this workout?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes all logged sets and can&apos;t be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Preview>
      </Section>

      <Note title="Not the same as Dialog">
        An alert dialog has no close button and can&apos;t be dismissed by
        clicking outside. It asks a question and requires an answer. Use it only
        when proceeding accidentally would cost the user something — deleting
        data, discarding work, spending money. Everything else is a Dialog.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Renders role=\"alertdialog\", which tells assistive tech this interrupts rather than merely appears.",
            "Focus lands on the Cancel action by default, so a stray Enter key doesn't confirm a destructive action.",
            "Escape maps to Cancel, never to the confirm action.",
            "Name the action after what it does — 'Delete', not 'OK'.",
          ]}
        />
      </Section>
    </>
  );
}

/* ── Sheet ──────────────────────────────────────────────────────────────── */

function SheetDocs() {
  return (
    <>
      <Section
        title="Logical sides"
        description="`start` and `end` follow the writing direction. Switch to RTL and the same sheet opens from the opposite edge — which is what a trailing panel means in that direction."
      >
        <Preview>
          {(["start", "end", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Side: {side}</SheetTitle>
                  <SheetDescription>
                    Panels anchored to an edge, for secondary flows that
                    don&apos;t warrant a full page.
                  </SheetDescription>
                </SheetHeader>
                <SheetBody>
                  <Text size="sm" tone="muted">
                    The body scrolls on its own, so the header and footer stay
                    fixed.
                  </Text>
                </SheetBody>
                <SheetFooter>
                  <Button fullWidth>Apply</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "side", type: '"start" | "end" | "top" | "bottom"', default: '"end"', description: "Anchor edge. start/end are logical." },
            { name: "hideClose", type: "boolean", default: "false", description: "Removes the built-in close button." },
          ]}
        />
      </Section>
    </>
  );
}

/* ── Drawer ─────────────────────────────────────────────────────────────── */

function DrawerDocs() {
  return (
    <>
      <Section title="Default">
        <Preview>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Log a set</DrawerTitle>
                <DrawerDescription>
                  Drag the handle down to dismiss.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-4 pb-4">
                  <Field>
                    <FieldLabel>Weight (kg)</FieldLabel>
                    <Input type="number" defaultValue={22.5} />
                  </Field>
                  <Field>
                    <FieldLabel>Reps</FieldLabel>
                    <Input type="number" defaultValue={12} />
                  </Field>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button fullWidth>Save set</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Preview>
      </Section>

      <Note title="Drawer or Sheet?">
        On touch, prefer Drawer. The drag handle sits within thumb reach at the
        bottom of the screen; a close button in the top corner of a 6.7-inch
        phone does not. On desktop, prefer Sheet — there&apos;s no drag
        affordance with a mouse.
      </Note>
    </>
  );
}

/* ── Popover / tooltip / hover card ─────────────────────────────────────── */

function PopoverDocs() {
  return (
    <>
      <Section title="Default">
        <Preview>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium">Dimensions</p>
                  <p className="text-xs text-muted-foreground">
                    Set the layout dimensions.
                  </p>
                </div>
                <Field>
                  <FieldLabel>Width</FieldLabel>
                  <Input size="sm" defaultValue="100%" />
                </Field>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">With arrow</Button>
            </PopoverTrigger>
            <PopoverContent showArrow>
              <Text size="sm">Anchored with a visible arrow.</Text>
            </PopoverContent>
          </Popover>
        </Preview>
      </Section>

      <Note>
        <code>align=&quot;start&quot;</code> is resolved against the writing
        direction by Radix, so an aligned popover lands on the correct edge in
        both LTR and RTL with no extra handling.
      </Note>
    </>
  );
}

function TooltipDocs() {
  return (
    <>
      <Section title="Default">
        <Preview>
          <SimpleTooltip content="Copy to clipboard">
            <Button variant="outline" size="icon" aria-label="Copy">
              <Copy />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Delete permanently" side="bottom">
            <Button variant="outline" size="icon" aria-label="Delete">
              <Trash2 />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip
            content={
              <span className="flex items-center gap-2">
                Command palette <KbdGroup keys={["⌘", "K"]} />
              </span>
            }
          >
            <Button variant="outline">Search</Button>
          </SimpleTooltip>
        </Preview>
      </Section>

      <Note title="A tooltip can never be the only source of information">
        Touch devices have no hover, and a tooltip on a non-focusable element is
        unreachable by keyboard. Anything it alone says is lost for those users.
        Note the buttons above still carry their own <code>aria-label</code> —
        the tooltip supplements, it doesn&apos;t supply.
      </Note>
    </>
  );
}

function HoverCardDocs() {
  return (
    <>
      <Section title="Default">
        <Preview>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@chrisbumstead</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Chris Bumstead</p>
                  <p className="text-xs text-muted-foreground">
                    Coach · 4 published plans
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Joined March 2021
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Preview>
      </Section>

      <Note>
        For sighted mouse users only — treat everything inside as a preview of
        content reachable another way. Never put an action in here that
        exists nowhere else.
      </Note>
    </>
  );
}

/* ── Menus ──────────────────────────────────────────────────────────────── */

function DropdownMenuDocs() {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <>
      <Section title="Default">
        <Preview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={notifications}
                onCheckedChange={setNotifications}
              >
                Email notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Edit />
                  More options
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2 />
                Delete account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Preview>
      </Section>

      <Note title="Submenus open toward the reading direction">
        In RTL the submenu opens to the left, and the trigger&apos;s chevron
        mirrors with it. Both come free — Radix resolves placement from the
        DirectionProvider, and the chevron carries{" "}
        <code>.rtl-flip</code>.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Full keyboard support: arrows move, Enter activates, Escape closes, typing jumps to a matching item.",
            "Arrow-key direction inverts under RTL.",
            "Destructive items are marked with data-variant, giving them colour and a distinct focus state — not colour alone.",
            "Shortcut hints are pinned dir=\"ltr\" so ⌘K never renders as K⌘.",
          ]}
        />
      </Section>
    </>
  );
}

function ContextMenuDocs() {
  return (
    <>
      <Section title="Right-click the area below">
        <Preview>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                <Copy />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Edit />
                Rename
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <Trash2 />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Preview>
      </Section>

      <Note>
        A context menu is always a shortcut, never the only path. Every action
        in it must also be reachable from a visible control — there is no
        right-click on touch, and no discoverability for anyone.
      </Note>
    </>
  );
}

function MenubarDocs() {
  return (
    <Section title="Default">
      <Preview>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New plan <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open… <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Export <MenubarShortcut>⇧⌘E</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom in</MenubarItem>
              <MenubarItem>Zoom out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Preview>
    </Section>
  );
}

/* ── Select / combobox ──────────────────────────────────────────────────── */

function SelectDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <Select>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Choose a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Personal</SelectLabel>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Business</SelectLabel>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="enterprise" disabled>
                  Enterprise (contact sales)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Preview>
      </Section>

      <Section title="Sizes">
        <Preview align="stretch">
          {(["sm", "default", "lg"] as const).map((size) => (
            <Select key={size}>
              <SelectTrigger size={size} className="max-w-xs">
                <SelectValue placeholder={`Size ${size}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
          ))}
        </Preview>
      </Section>

      <Note title="Custom Select vs. Native Select">
        This one supports grouping, icons, and rich option content. It also
        replaces the OS picker, which on mobile is usually a downgrade. Default
        to Native Select unless you specifically need what this adds.
      </Note>
    </>
  );
}

function ComboboxDocs() {
  const options = [
    { value: "chest", label: "Chest" },
    { value: "back", label: "Back" },
    { value: "shoulders", label: "Shoulders" },
    { value: "biceps", label: "Biceps" },
    { value: "triceps", label: "Triceps" },
    { value: "quads", label: "Quadriceps" },
    { value: "hamstrings", label: "Hamstrings" },
    { value: "calves", label: "Calves" },
    { value: "abs", label: "Abdominals" },
    { value: "glutes", label: "Glutes" },
  ];

  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <div className="max-w-xs">
            <Combobox options={options} label="Muscle group" placeholder="Select a muscle group" />
          </div>
        </Preview>
      </Section>

      <Note>
        Switch to a Combobox once the option count passes roughly ten, where
        typing three characters beats scanning a list.
      </Note>
    </>
  );
}

/* ── Command ────────────────────────────────────────────────────────────── */

function CommandDocs() {
  const [open, setOpen] = React.useState(false);
  useCommandShortcut("k", () => setOpen((o) => !o));

  return (
    <>
      <Section title="Inline">
        <Preview align="stretch">
          <Command className="rounded-lg border border-border">
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarDays />
                  Calendar
                </CommandItem>
                <CommandItem>
                  <Smile />
                  Search emoji
                </CommandItem>
                <CommandItem>
                  <Calculator />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Preview>
      </Section>

      <Section title="Dialog" description="The ⌘K pattern.">
        <Preview>
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open palette
            <KbdGroup keys={["⌘", "K"]} />
          </Button>
          <Text size="sm" tone="muted" className="w-full text-center">
            Or press <Kbd>⌘</Kbd> <Kbd>K</Kbd> anywhere on this page.
          </Text>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => setOpen(false)}>
                  <CalendarDays />
                  Go to schedule
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <User />
                  Go to profile
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </Preview>
      </Section>

      <Note title="The dialog needs a name">
        <code>CommandDialog</code> renders a visually hidden title and
        description. Radix warns without them, and a screen reader would
        otherwise announce an unnamed dialog.
      </Note>
    </>
  );
}

/* ── Toast ──────────────────────────────────────────────────────────────── */

function ToastDocs() {
  return (
    <>
      <Section title="Variants">
        <Preview>
          <Button variant="outline" onClick={() => toast("Workout logged")}>
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Plan saved", { description: "Ultimate Workout · 8 weeks" })}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Upload failed", { description: "The file exceeded 25 MB." })}
          >
            Error
          </Button>
          <Button variant="outline" onClick={() => toast.warning("Storage almost full")}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => toast.info("New version available")}>
            Info
          </Button>
        </Preview>
      </Section>

      <Section title="With an action and promises">
        <Preview>
          <Button
            variant="outline"
            onClick={() =>
              toast("Set deleted", {
                action: { label: "Undo", onClick: () => toast.success("Restored") },
              })
            }
          >
            With undo
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 1800)),
                {
                  loading: "Uploading…",
                  success: "Upload complete",
                  error: "Upload failed",
                },
              )
            }
          >
            Promise
          </Button>
        </Preview>
      </Section>

      <Note title="Position follows the direction">
        Toasts default to the trailing edge —{" "}
        <code>bottom-right</code> in LTR, <code>bottom-left</code> in RTL. Flip
        the toggle above and fire one to see it move.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Toasts are announced politely and don't steal focus.",
            "Anything with an action needs enough dwell time to reach it — never auto-dismiss an undo in under five seconds.",
            "Never put information that exists nowhere else in a toast. It disappears, and screen-reader users may miss it entirely.",
          ]}
        />
      </Section>
    </>
  );
}

export const OVERLAY_DOCS: Record<string, () => React.JSX.Element> = {
  dialog: DialogDocs,
  "alert-dialog": AlertDialogDocs,
  sheet: SheetDocs,
  drawer: DrawerDocs,
  popover: PopoverDocs,
  tooltip: TooltipDocs,
  "hover-card": HoverCardDocs,
  "dropdown-menu": DropdownMenuDocs,
  "context-menu": ContextMenuDocs,
  menubar: MenubarDocs,
  select: SelectDocs,
  combobox: ComboboxDocs,
  command: CommandDocs,
  toast: ToastDocs,
};
