import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center" variant="outline" attached>
      <ToggleGroupItem value="start">Start</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="end">End</ToggleGroupItem>
    </ToggleGroup>
  );
}
