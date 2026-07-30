import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { CalendarDays, Settings, User } from "lucide-react";

export default function CommandDemo() {
  return (
    <Command className="w-full max-w-md rounded-lg border border-border">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarDays />
            Calendar
          </CommandItem>
          <CommandItem>
            <User />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
