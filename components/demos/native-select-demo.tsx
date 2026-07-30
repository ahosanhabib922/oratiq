import { NativeSelect } from "@/components/ui/native-select";

export default function NativeSelectDemo() {
  return (
    <div className="w-full max-w-xs">
      <NativeSelect defaultValue="">
        <option value="" disabled>
          Choose a plan…
        </option>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
        <option value="team">Team</option>
      </NativeSelect>
    </div>
  );
}
