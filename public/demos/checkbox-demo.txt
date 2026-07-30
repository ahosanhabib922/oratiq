import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">I accept the terms and conditions</Label>
    </div>
  );
}
