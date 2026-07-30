"use client";

import * as React from "react";
import { ChevronDown, Home, Inbox, Search, Settings, Users } from "lucide-react";

import {
  A11yNotes,
  Note,
  Preview,
  PropsTable,
  Section,
} from "@/components/docs/docs-primitives";
import { DemoBlock } from "@/components/docs/demo-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/typography";

/* ── Accordion ──────────────────────────────────────────────────────────── */

function AccordionDocs() {
  return (
    <>
      <Section title="Default">
        <DemoBlock name="accordion-demo" align="stretch" />
      </Section>

      <Section title="Single and multiple">
        <Preview align="stretch">
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How do I re-theme the system?", a: "Override the semantic role tokens in your own CSS. Components never reference raw colour values, so nothing else has to change." },
              { q: "Does it work in RTL?", a: "Yes. Every component uses CSS logical properties and is reviewed in both directions before it ships." },
              { q: "Can I use it without Tailwind?", a: "No. The components are Tailwind classes end to end — the token layer is a Tailwind theme." },
            ].map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Preview>
      </Section>

      <Note>
        The trigger&apos;s chevron rotates on a vertical axis, so it must{" "}
        <em>not</em> be mirrored under RTL — unlike the horizontal chevrons in
        Breadcrumb and Pagination. Direction-aware mirroring is per-glyph, not
        blanket.
      </Note>

      <Section title="Accessibility">
        <A11yNotes
          items={[
            "Triggers are buttons inside headings, so screen readers can navigate by heading.",
            "aria-expanded reflects state; the panel is linked with aria-controls.",
            "Up and down arrows move between triggers; Home and End jump to the ends.",
            "Height animation reads the measured content height from a Radix CSS variable, so it works with dynamic content.",
          ]}
        />
      </Section>
    </>
  );
}

function CollapsibleDocs() {
  return (
    <Section title="Default">
      <Preview align="stretch">
        <Collapsible className="w-full rounded-lg border border-border p-4">
          <div className="flex items-center justify-between">
            <Text size="sm" weight="medium">
              Advanced settings
            </Text>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Toggle">
                <ChevronDown />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="pt-3">
            <Text size="sm" tone="muted">
              Unlike Accordion, Collapsible manages a single region and imposes
              no heading structure — reach for it when there is nothing to group.
            </Text>
          </CollapsibleContent>
        </Collapsible>
      </Preview>
    </Section>
  );
}

/* ── Tabs ───────────────────────────────────────────────────────────────── */

function TabsDocs() {
  return (
    <>
      <Section title="Variants">
        <Preview align="stretch">
          <Tabs defaultValue="account">
            <TabsList variant="solid">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Text size="sm" tone="muted">Account settings panel.</Text>
            </TabsContent>
            <TabsContent value="password">
              <Text size="sm" tone="muted">Password settings panel.</Text>
            </TabsContent>
            <TabsContent value="team">
              <Text size="sm" tone="muted">Team settings panel.</Text>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="all" className="mt-6">
            <TabsList variant="underline">
              <TabsTrigger value="all">All plans</TabsTrigger>
              <TabsTrigger value="paid">Paid plans</TabsTrigger>
              <TabsTrigger value="custom">Custom plans</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Text size="sm" tone="muted">Every plan.</Text>
            </TabsContent>
            <TabsContent value="paid">
              <Text size="sm" tone="muted">Purchased plans.</Text>
            </TabsContent>
            <TabsContent value="custom">
              <Text size="sm" tone="muted">Plans you built.</Text>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="day" className="mt-6">
            <TabsList variant="pill">
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
            <TabsContent value="day">
              <Text size="sm" tone="muted">Daily view.</Text>
            </TabsContent>
            <TabsContent value="week">
              <Text size="sm" tone="muted">Weekly view.</Text>
            </TabsContent>
            <TabsContent value="month">
              <Text size="sm" tone="muted">Monthly view.</Text>
            </TabsContent>
          </Tabs>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "underline" | "pill"', default: '"solid"', description: "Set on TabsList; triggers inherit it via context." },
          ]}
        />
      </Section>

      <Note title="Tabs are not navigation">
        Tabs switch panels within one page. If selecting one should change the
        URL and be linkable, back-buttonable, and shareable, you want links —
        not tabs.
      </Note>
    </>
  );
}

/* ── Breadcrumb / pagination ────────────────────────────────────────────── */

function BreadcrumbDocs() {
  return (
    <>
      <Section title="Default and collapsed">
        <Preview align="stretch">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Deeply nested page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Preview>
      </Section>

      <Note>
        Separators mirror under RTL — the trail must read in the same direction
        as the language. The current page carries{" "}
        <code>aria-current=&quot;page&quot;</code> and is not a link.
      </Note>
    </>
  );
}

function PaginationDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">24</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Preview>
      </Section>

      <Note>
        Previous and next mirror under RTL, so &quot;previous&quot; always
        points toward the start edge. Page numbers use tabular figures — the
        row doesn&apos;t shift width as you move from page 9 to 10.
      </Note>
    </>
  );
}

/* ── Navigation menu ────────────────────────────────────────────────────── */

function NavigationMenuDocs() {
  return (
    <Section title="Default">
      <Preview>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 p-2 md:grid-cols-2">
                  <NavigationMenuListItem href="#" title="Components">
                    Sixty-two components, every state documented.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="#" title="Foundations">
                    Tokens for colour, type, spacing, and motion.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="#" title="Theming">
                    Re-brand by overriding one layer.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="#" title="Direction">
                    RTL support built in, not bolted on.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-2">
                  <NavigationMenuListItem href="#" title="Documentation">
                    Guides and API reference.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="#" title="Changelog">
                    What shipped, and when.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Preview>
    </Section>
  );
}

/* ── Sidebar ────────────────────────────────────────────────────────────── */

function SidebarDocs() {
  return (
    <>
      <Section title="Default" description="Collapses to an off-canvas panel, and to a sheet on mobile.">
        <div className="overflow-hidden rounded-xl border border-border">
          <SidebarProvider className="min-h-[380px]">
            <Sidebar collapsible="offcanvas">
              <SidebarHeader>
                <div className="flex items-center gap-2 px-2">
                  <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    O
                  </span>
                  <span className="text-sm font-semibold">Acme Inc</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Platform</SidebarGroupLabel>
                  <SidebarMenu>
                    {[
                      { icon: <Home />, label: "Home", active: true },
                      { icon: <Inbox />, label: "Inbox" },
                      { icon: <Users />, label: "Team" },
                      { icon: <Search />, label: "Search" },
                      { icon: <Settings />, label: "Settings" },
                    ].map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton isActive={item.active}>
                          {item.icon}
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset className="min-h-[380px] bg-background">
              <div className="flex h-12 items-center gap-2 border-b border-border px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-4" />
                <Text size="sm" tone="muted">
                  Toggle the sidebar, or press ⌘B
                </Text>
              </div>
              <div className="p-6">
                <Text size="sm" tone="muted">
                  Content area. The sidebar sits on the inline-start edge, so it
                  moves to the right under RTL.
                </Text>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "side", type: '"start" | "end"', default: '"start"', description: "Logical edge — flips under RTL." },
            { name: "collapsible", type: '"offcanvas" | "icon" | "none"', default: '"offcanvas"', description: "How the sidebar collapses." },
          ]}
        />
      </Section>

      <Note>
        ⌘B / Ctrl+B toggles the sidebar. Below 768px it becomes a Sheet — a
        persistent rail would eat most of a phone screen.
      </Note>
    </>
  );
}

/* ── Resizable / scroll area / carousel ─────────────────────────────────── */

function ResizableDocs() {
  return (
    <>
      <Section title="Horizontal and vertical">
        <Preview align="stretch">
          <ResizablePanelGroup
            orientation="horizontal"
            className="h-40 overflow-hidden rounded-lg border border-border"
          >
            <ResizablePanel id="nav" defaultSize="35%">
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                Sidebar
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel id="main" defaultSize="65%">
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

          <ResizablePanelGroup
            orientation="vertical"
            className="mt-4 h-40 overflow-hidden rounded-lg border border-border"
          >
            <ResizablePanel id="top" defaultSize="50%">
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                Top
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel id="bottom" defaultSize="50%">
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                Bottom
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Preview>
      </Section>

      <Note title="Hit target">
        The visible divider is a 1px hairline, which is far below the 24px
        minimum target size. The interactive area is widened with a
        pseudo-element, so the line stays thin while the grab region stays
        usable.
      </Note>
    </>
  );
}

function ScrollAreaDocs() {
  return (
    <Section title="Default">
      <Preview>
        <ScrollArea className="h-48 w-full max-w-sm rounded-lg border border-border p-4">
          <div className="flex flex-col gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <React.Fragment key={i}>
                <Text size="sm">Exercise {i + 1}</Text>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </Preview>
    </Section>
  );
}

function CarouselDocs() {
  return (
    <>
      <Section title="Default">
        <Preview align="stretch">
          <div className="px-10">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/2 md:basis-1/3">
                    <Card padding="none" className="aspect-square">
                      <div className="flex size-full items-center justify-center text-2xl font-medium tnum">
                        {i + 1}
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <CarouselDots className="mt-4" />
            </Carousel>
          </div>
        </Preview>
      </Section>

      <Note title="Scroll direction follows the language">
        The carousel is handed the writing direction, so &quot;next&quot; moves
        toward the end edge in both LTR and RTL. Arrow keys follow suit, and the
        arrow icons mirror. Flip the toggle and drag it to confirm.
      </Note>
    </>
  );
}

export const LAYOUT_DOCS: Record<string, () => React.JSX.Element> = {
  accordion: AccordionDocs,
  collapsible: CollapsibleDocs,
  tabs: TabsDocs,
  breadcrumb: BreadcrumbDocs,
  pagination: PaginationDocs,
  "navigation-menu": NavigationMenuDocs,
  sidebar: SidebarDocs,
  resizable: ResizableDocs,
  "scroll-area": ScrollAreaDocs,
  carousel: CarouselDocs,
};
