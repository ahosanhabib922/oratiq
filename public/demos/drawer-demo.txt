import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Log a set</DrawerTitle>
          <DrawerDescription>Drag the handle down to dismiss.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="pb-6 text-sm text-muted-foreground">
            Drawer content here.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
