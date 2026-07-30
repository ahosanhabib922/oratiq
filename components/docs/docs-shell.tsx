"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { COUNTS, FOUNDATIONS, GROUPS } from "@/lib/registry";
import { useDirection } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

function NavLink({
  href,
  children,
  status,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  status?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
      )}
    >
      <span className="flex-1 truncate">{children}</span>
      {status === "planned" && (
        <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
      )}
    </Link>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-7 p-4">
      <div>
        <p className="mb-2 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Getting started
        </p>
        <div className="flex flex-col gap-0.5">
          <NavLink href="/design-library" onNavigate={onNavigate}>
            Overview
          </NavLink>
          <NavLink href="/design-library/introduction" onNavigate={onNavigate}>
            Introduction
          </NavLink>
          <NavLink href="/design-library/installation" onNavigate={onNavigate}>
            Installation
          </NavLink>
          <NavLink href="/design-library/cli" onNavigate={onNavigate}>
            CLI
          </NavLink>
          <NavLink href="/design-library/theming" onNavigate={onNavigate}>
            Theming
          </NavLink>
          <NavLink href="/design-library/dark-mode" onNavigate={onNavigate}>
            Dark mode
          </NavLink>
        </div>
      </div>

      <div>
        <p className="mb-2 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {FOUNDATIONS.name}
        </p>
        <div className="flex flex-col gap-0.5">
          {FOUNDATIONS.items.map((item) => (
            <NavLink
              key={item.slug}
              href={`/design-library/foundations/${item.slug}`}
              onNavigate={onNavigate}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {GROUPS.map((group) => (
        <div key={group.name}>
          <p className="mb-2 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {group.name}
          </p>
          <div className="flex flex-col gap-0.5">
            {group.items.map((item) => (
              <NavLink
                key={item.slug}
                href={`/design-library/components/${item.slug}`}
                status={item.status}
                onNavigate={onNavigate}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

function Toolbar() {
  const { direction, setDirection } = useDirection();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Theme is only known on the client; render a stable placeholder until then.
  React.useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-2">
      <ButtonGroup label="Writing direction">
        {(["ltr", "rtl"] as const).map((option) => (
          <Button
            key={option}
            size="sm"
            variant={direction === option ? "default" : "outline"}
            onClick={() => setDirection(option)}
            aria-pressed={direction === option}
            className="uppercase"
          >
            {option === "ltr" && <Languages className="rtl-flip" />}
            {option}
          </Button>
        ))}
      </ButtonGroup>

      <Button
        size="icon-sm"
        variant="outline"
        aria-label="Toggle theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="flex h-14 items-center gap-3 px-4 lg:px-6">
          <Button
            size="icon-sm"
            variant="ghost"
            className="lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>

          <Link
            href="/design-library"
            className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
              O
            </span>
            <span className="font-semibold">Oratiq</span>
          </Link>

          <Badge variant="muted" size="sm" className="hidden sm:inline-flex">
            {COUNTS.ready}/{COUNTS.total} ready
          </Badge>

          <div className="ms-auto">
            <Toolbar />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <aside
          className={cn(
            "shrink-0 border-e border-sidebar-border bg-sidebar",
            "fixed inset-y-14 z-30 w-64 overflow-y-auto lg:sticky lg:top-14 lg:block lg:h-[calc(100vh-3.5rem)]",
            open ? "block" : "hidden",
          )}
        >
          <Sidebar onNavigate={() => setOpen(false)} />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
