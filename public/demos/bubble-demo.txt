import { Bubble, BubbleGroup, BubbleTimestamp } from "@/components/ui/bubble";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <BubbleGroup side="incoming">
        <Bubble side="incoming">How did the session go today?</Bubble>
        <BubbleTimestamp>09:41</BubbleTimestamp>
      </BubbleGroup>
      <BubbleGroup side="outgoing">
        <Bubble side="outgoing">Three sets of twelve at 22.5 kg.</Bubble>
        <BubbleTimestamp>09:43</BubbleTimestamp>
      </BubbleGroup>
    </div>
  );
}
