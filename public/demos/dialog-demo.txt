import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Changes are saved to your account immediately.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="Jack Ryan" />
        </Field>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
