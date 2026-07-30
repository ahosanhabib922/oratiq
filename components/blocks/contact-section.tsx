import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { FeaturedIcon } from "@/components/ui/featured-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/** Contact info + form, two columns on desktop. */
export function ContactSection() {
  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Talk to us</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about licensing, teams, or the roadmap — we answer within
            one business day.
          </p>
        </div>
        {[
          { icon: <Mail />, label: "Email", value: <bdi dir="ltr">hello@oratiq.com</bdi> },
          { icon: <Phone />, label: "Phone", value: <bdi dir="ltr">+880 1712 000000</bdi> },
          { icon: <MapPin />, label: "Office", value: "Dhaka, Bangladesh" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <FeaturedIcon variant="light" size="sm">{row.icon}</FeaturedIcon>
            <div>
              <p className="text-xs text-muted-foreground">{row.label}</p>
              <p className="text-sm font-medium">{row.value}</p>
            </div>
          </div>
        ))}
      </div>

      <form className="flex flex-col gap-4" action="#">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel required>Name</FieldLabel>
            <Input required autoComplete="name" />
          </Field>
          <Field>
            <FieldLabel required>Email</FieldLabel>
            <Input type="email" required autoComplete="email" />
          </Field>
        </div>
        <Field>
          <FieldLabel required>Message</FieldLabel>
          <Textarea required rows={5} placeholder="How can we help?" />
        </Field>
        <Button type="submit" size="lg" className="self-start">
          Send message
        </Button>
      </form>
    </section>
  );
}
