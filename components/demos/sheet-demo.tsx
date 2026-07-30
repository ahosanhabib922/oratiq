import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side="end">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Anchored to the end edge — it opens from the left under RTL.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p className="text-sm text-muted-foreground">Sheet content here.</p>
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
