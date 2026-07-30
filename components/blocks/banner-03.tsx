import { ArrowRight, Wrench } from "lucide-react";

/** Quiet informational bar — maintenance notices, version pointers. */
export function Banner03() {
  return (
    <div className="border-b border-border bg-muted/40 px-4 py-2">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Wrench className="size-3.5" aria-hidden="true" />
        v0.2 migration guide is available for the new token names.
        <a
          href="#"
          className="ms-auto inline-flex items-center gap-1 font-medium text-foreground hover:underline hover:underline-offset-4"
        >
          Migration guide
          <ArrowRight className="size-3.5 rtl-flip" />
        </a>
      </p>
    </div>
  );
}
