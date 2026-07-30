"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/** Navbar with a mega-menu style Product dropdown. */
export function HeaderNavigation03() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">O</span>
          <span className="text-lg font-semibold">Oratiq</span>
        </a>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-1 p-2 md:grid-cols-2">
                    <NavigationMenuListItem href="#" title="Components">
                      81 primitives with docs and demos.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="#" title="Blocks">
                      Marketing sections, ready to ship.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="#" title="Theming">
                      One token layer, your brand.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="#" title="RTL">
                      Both directions from one codebase.
                    </NavigationMenuListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  Docs
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ms-auto flex items-center gap-2">
          <Button size="sm">Get started</Button>
        </div>
      </nav>
    </header>
  );
}
