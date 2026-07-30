import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
      >
        16 / 9
      </AspectRatio>
    </div>
  );
}
