import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Copy, Edit, Trash2 } from "lucide-react";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
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
  );
}
