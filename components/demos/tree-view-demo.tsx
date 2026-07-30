import { TreeView } from "@/components/ui/tree-view";

export default function TreeViewDemo() {
  return (
    <div className="w-full max-w-xs">
      <TreeView
        defaultExpanded={["app", "components"]}
        data={[
          {
            id: "app",
            label: "app",
            children: [
              { id: "layout", label: "layout.tsx" },
              { id: "page", label: "page.tsx" },
            ],
          },
          {
            id: "components",
            label: "components",
            children: [
              {
                id: "ui",
                label: "ui",
                children: [
                  { id: "button", label: "button.tsx" },
                  { id: "dialog", label: "dialog.tsx" },
                ],
              },
            ],
          },
          { id: "package", label: "package.json" },
        ]}
      />
    </div>
  );
}
