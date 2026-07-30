import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function InputGroupDemo() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <Input placeholder="Search components…" />
      </InputGroup>
    </div>
  );
}
