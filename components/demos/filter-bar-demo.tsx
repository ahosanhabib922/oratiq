import { Button } from "@/components/ui/button";
import { FilterBar, FilterBarSpacer, FilterChip } from "@/components/ui/filter-bar";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { Search, SlidersHorizontal } from "lucide-react";

export default function FilterBarDemo() {
  return (
    <div className="w-full">
      <FilterBar>
        <InputGroup className="max-w-52">
          <InputGroupAddon><Search /></InputGroupAddon>
          <Input size="sm" placeholder="Search…" />
        </InputGroup>
        <FilterChip label="Status" value="Active" onRemove={() => {}} />
        <FilterChip label="Plan" value="Pro" onRemove={() => {}} />
        <FilterBarSpacer />
        <Button variant="outline" size="sm">
          <SlidersHorizontal />
          Filters
        </Button>
      </FilterBar>
    </div>
  );
}
