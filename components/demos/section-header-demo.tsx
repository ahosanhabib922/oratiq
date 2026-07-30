import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function SectionHeaderDemo() {
  return (
    <div className="w-full">
      <SectionHeader
        title="Team members"
        description="Invite and manage access."
        actions={<Button size="sm">Invite</Button>}
        divider
      />
    </div>
  );
}
