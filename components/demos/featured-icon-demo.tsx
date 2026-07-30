import { FeaturedIcon } from "@/components/ui/featured-icon";
import { Rocket, ShieldCheck, Zap } from "lucide-react";

export default function FeaturedIconDemo() {
  return (
    <div className="flex items-center gap-4">
      <FeaturedIcon variant="light"><Zap /></FeaturedIcon>
      <FeaturedIcon variant="solid" tone="success"><ShieldCheck /></FeaturedIcon>
      <FeaturedIcon variant="outline" tone="info" size="lg"><Rocket /></FeaturedIcon>
    </div>
  );
}
