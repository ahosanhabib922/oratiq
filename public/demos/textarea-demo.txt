import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea placeholder="Tell us what happened…" showCount maxLength={280} />
    </div>
  );
}
