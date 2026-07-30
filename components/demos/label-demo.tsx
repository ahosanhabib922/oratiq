import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="email" required>
        Email
      </Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}
