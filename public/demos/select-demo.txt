import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <div className="w-full max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="team">Team</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
