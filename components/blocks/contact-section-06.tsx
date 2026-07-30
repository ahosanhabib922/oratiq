/** The minimalist's contact page: one address, said plainly. */
export function ContactSection06() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight">Say hello</h2>
      <p className="mt-3 text-muted-foreground">
        No forms, no queues. Email us and a human replies.
      </p>
      <a
        href="mailto:hello@oratiq.com"
        className="mt-6 inline-block text-2xl font-medium text-primary underline-offset-8 hover:underline"
      >
        <bdi dir="ltr">hello@oratiq.com</bdi>
      </a>
    </section>
  );
}
