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
import { Home, Inbox, Settings } from "lucide-react";

export default function SidebarDemo() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border">
      <SidebarProvider className="min-h-[300px]">
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <span className="px-2 text-sm font-semibold">Acme Inc</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Inbox />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="min-h-[300px] bg-background p-4">
          <SidebarTrigger />
          <p className="mt-4 text-sm text-muted-foreground">Content area.</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
