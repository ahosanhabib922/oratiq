import { TagInput } from "@/components/ui/tag-input";

export default function TagInputDemo() {
  return (
    <div className="w-full max-w-sm">
      <TagInput
        defaultValue={["strength", "hypertrophy"]}
        placeholder="Add a tag…"
        max={6}
      />
    </div>
  );
}
