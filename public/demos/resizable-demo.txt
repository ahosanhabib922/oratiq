import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-40 w-full max-w-md overflow-hidden rounded-lg border border-border"
    >
      <ResizablePanel id="nav" defaultSize="35%">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Sidebar
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel id="main" defaultSize="65%">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Content
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
