import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 w-full max-w-xs rounded-lg border border-border p-4">
      <div className="space-y-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>
            <p className="text-sm">Exercise {i + 1}</p>
            {i < 19 && <Separator className="mt-3" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
