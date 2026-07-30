import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-sm rounded-lg border border-border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Advanced settings</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle">
            <ChevronDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-3">
        <p className="text-sm text-muted-foreground">
          Extra options revealed on demand.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
