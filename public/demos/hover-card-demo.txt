import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@chrisbumstead</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Chris Bumstead</p>
            <p className="text-xs text-muted-foreground">
              Coach · 4 published plans
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
