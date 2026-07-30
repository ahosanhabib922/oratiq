import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Search } from "lucide-react";

export default function EmptyDemo() {
  return (
    <Empty className="w-full rounded-lg border border-dashed border-border">
      <EmptyMedia>
        <Search />
      </EmptyMedia>
      <EmptyTitle>No results found</EmptyTitle>
      <EmptyDescription>
        Try a different search term, or clear your filters.
      </EmptyDescription>
      <EmptyActions>
        <Button size="sm" variant="outline">
          Clear filters
        </Button>
      </EmptyActions>
    </Empty>
  );
}
