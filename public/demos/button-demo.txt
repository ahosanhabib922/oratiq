import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Preview</Button>
      <Button variant="ghost">Dismiss</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
