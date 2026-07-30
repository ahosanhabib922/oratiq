import {
  ActivityDescription,
  ActivityFeed,
  ActivityItem,
  ActivityTime,
  ActivityTitle,
} from "@/components/ui/activity-feed";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, GitCommit, Rocket } from "lucide-react";

export default function ActivityFeedDemo() {
  return (
    <div className="w-full max-w-md">
      <ActivityFeed>
        <ActivityItem media={<Rocket />}>
          <ActivityTitle>
            <strong>v0.2.0</strong> deployed to production
          </ActivityTitle>
          <ActivityTime>2 minutes ago</ActivityTime>
        </ActivityItem>
        <ActivityItem
          media={
            <Avatar size="sm">
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          }
        >
          <ActivityTitle>
            <strong>Chris</strong> approved the release
          </ActivityTitle>
          <ActivityDescription>
            "RTL snapshots all green — ship it."
          </ActivityDescription>
          <ActivityTime>10 minutes ago</ActivityTime>
        </ActivityItem>
        <ActivityItem media={<GitCommit />}>
          <ActivityTitle>3 commits pushed to main</ActivityTitle>
          <ActivityTime>1 hour ago</ActivityTime>
        </ActivityItem>
        <ActivityItem media={<CheckCircle2 />} last>
          <ActivityTitle>CI passed</ActivityTitle>
          <ActivityTime>1 hour ago</ActivityTime>
        </ActivityItem>
      </ActivityFeed>
    </div>
  );
}
