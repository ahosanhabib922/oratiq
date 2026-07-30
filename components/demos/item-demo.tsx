import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Dumbbell } from "lucide-react";

export default function ItemDemo() {
  return (
    <div className="w-full max-w-sm">
      <Item variant="outline">
        <ItemMedia>
          <Dumbbell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Incline Dumbbell Press</ItemTitle>
          <ItemDescription>3 sets · 12 reps · 22.5 kg</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="muted" size="sm">
            Done
          </Badge>
        </ItemActions>
      </Item>
    </div>
  );
}
