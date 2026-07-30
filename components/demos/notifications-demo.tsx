import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NotificationItem,
  NotificationList,
} from "@/components/ui/notifications";

export default function NotificationsDemo() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border">
      <NotificationList>
        <NotificationItem
          unread
          media={
            <Avatar size="sm">
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          }
          title="Chris invited you to Ultimate Workout"
          description="Join as a coach to edit sessions and track members."
          time="2m"
          actions={
            <>
              <Button size="xs">Accept</Button>
              <Button size="xs" variant="ghost">
                Decline
              </Button>
            </>
          }
        />
        <NotificationItem
          unread
          media={
            <Avatar size="sm">
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
          }
          title="Sam commented on Week 3"
          description="“Deload volume looks right now.”"
          time="1h"
        />
        <NotificationItem
          media={
            <Avatar size="sm">
              <AvatarFallback>OQ</AvatarFallback>
            </Avatar>
          }
          title="Your export is ready"
          time="Yesterday"
        />
      </NotificationList>
    </div>
  );
}
