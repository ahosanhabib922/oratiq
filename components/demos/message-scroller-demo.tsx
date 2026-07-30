"use client";

import * as React from "react";
import { Bubble } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { MessageScroller } from "@/components/ui/message-scroller";

export default function MessageScrollerDemo() {
  const [messages, setMessages] = React.useState(
    Array.from({ length: 10 }, (_, i) => `Message ${i + 1}`),
  );

  return (
    <div className="w-full max-w-sm">
      <div className="flex h-56 flex-col rounded-lg border border-border">
        <MessageScroller dependency={messages.length} className="p-3">
          <div className="flex flex-col gap-2">
            {messages.map((m) => (
              <Bubble key={m} side="incoming">
                {m}
              </Bubble>
            ))}
          </div>
        </MessageScroller>
      </div>
      <Button
        size="sm"
        className="mt-3"
        onClick={() => setMessages((p) => [...p, `Message ${p.length + 1}`])}
      >
        Add message
      </Button>
    </div>
  );
}
