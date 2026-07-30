import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-2 md:grid-cols-2">
              <NavigationMenuListItem href="#" title="Components">
                Sixty-two components, every state documented.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="#" title="Theming">
                Re-brand by overriding one token layer.
              </NavigationMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
