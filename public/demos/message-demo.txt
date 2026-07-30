import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageBody,
  MessageContent,
  MessageHeader,
  MessageTimestamp,
} from "@/components/ui/message";

export default function MessageDemo() {
  return (
    <div className="w-full max-w-md rounded-lg border border-border py-2">
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>
            <MessageAuthor>Chris Bumstead</MessageAuthor>
            <MessageTimestamp>09:41</MessageTimestamp>
          </MessageHeader>
          <MessageBody>
            Nice work on the volume this week. Let&apos;s add a deload in W5.
          </MessageBody>
        </MessageContent>
      </Message>
    </div>
  );
}
