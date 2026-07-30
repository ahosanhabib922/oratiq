import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/** Location panel beside the form — for businesses with a place. */
export function ContactSection04() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-muted), var(--color-card))",
            backgroundImage:
              "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <span className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MapPin className="size-5" />
          </span>
        </span>
        <p className="absolute inset-x-0 bottom-0 bg-background/80 p-3 text-center text-xs text-muted-foreground backdrop-blur">
          Dhaka, Bangladesh · replace with your map embed
        </p>
      </div>
      <form className="flex flex-col gap-4" action="#">
        <Field>
          <FieldLabel required>Email</FieldLabel>
          <Input type="email" required />
        </Field>
        <Field>
          <FieldLabel required>Message</FieldLabel>
          <Textarea required rows={5} />
        </Field>
        <Button type="submit" size="lg" className="self-start">Send</Button>
      </form>
    </section>
  );
}
