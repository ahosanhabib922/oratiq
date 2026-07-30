import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

export default function ToggleDemo() {
  return (
    <Toggle variant="outline" aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  );
}
