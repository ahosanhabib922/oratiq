import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdDemo() {
  return (
    <p className="text-sm text-muted-foreground">
      Press <KbdGroup keys={["⌘", "K"]} /> to open the command palette, or{" "}
      <Kbd>Esc</Kbd> to close it.
    </p>
  );
}
