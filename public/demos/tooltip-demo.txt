import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Copy } from "lucide-react";

export default function TooltipDemo() {
  return (
    <SimpleTooltip content="Copy to clipboard">
      <Button variant="outline" size="icon" aria-label="Copy">
        <Copy />
      </Button>
    </SimpleTooltip>
  );
}
