import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDemo() {
  return (
    <div className="w-full max-w-sm">
      <Field description="We'll only use this for receipts.">
        <FieldLabel required>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
  );
}
