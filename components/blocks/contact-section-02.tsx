import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

/** Single centred form card with a topic selector. */
export function ContactSection02() {
  return (
    <section className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-2 text-muted-foreground">We reply within one business day.</p>
      </div>
      <Card padding="default" className="mt-8 gap-4">
        <form className="flex flex-col gap-4" action="#">
          <Field>
            <FieldLabel required>Email</FieldLabel>
            <Input type="email" required autoComplete="email" />
          </Field>
          <Field>
            <FieldLabel>Topic</FieldLabel>
            <NativeSelect defaultValue="">
              <option value="" disabled>Choose…</option>
              <option>Licensing</option>
              <option>Support</option>
              <option>Partnership</option>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel required>Message</FieldLabel>
            <Textarea required rows={4} />
          </Field>
          <Button type="submit" size="lg">Send message</Button>
        </form>
      </Card>
    </section>
  );
}
