import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar size="lg">
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
      <AvatarGroup max={3} total={9}>
        <Avatar>
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
