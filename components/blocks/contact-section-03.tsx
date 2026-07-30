import { MessagesSquare, Mail, BookOpen } from "lucide-react";
import { FeaturedIcon } from "@/components/ui/featured-icon";
import { Card } from "@/components/ui/card";

/** Channel cards — route people before they write. */
export function ContactSection03() {
  const channels = [
    { icon: <MessagesSquare />, title: "Community", body: "Questions and show-and-tell.", cta: "Join the Discord" },
    { icon: <Mail />, title: "Email", body: "Licensing and partnerships.", cta: <bdi dir="ltr">hello@oratiq.com</bdi> },
    { icon: <BookOpen />, title: "Docs", body: "Most answers live here already.", cta: "ui.oratiq.com" },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {channels.map((c) => (
          <Card key={c.title} padding="default" className="items-center gap-3 text-center">
            <FeaturedIcon variant="light" size="lg">{c.icon}</FeaturedIcon>
            <h3 className="text-base font-medium">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.body}</p>
            <a href="#" className="mt-auto text-sm font-medium text-primary hover:underline hover:underline-offset-4">
              {c.cta}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
