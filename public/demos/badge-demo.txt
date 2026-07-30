import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success" dot>
        Live
      </Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  );
}
