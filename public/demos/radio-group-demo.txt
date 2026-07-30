import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="yearly">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="yearly" id="yearly" />
        <Label htmlFor="yearly">Yearly — save 20%</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="lifetime" id="lifetime" />
        <Label htmlFor="lifetime">Lifetime</Label>
      </div>
    </RadioGroup>
  );
}
