import { Globe2, ShieldCheck, Truck } from "lucide-react";

/** Value-props strip — the e-commerce trust bar. */
export function Banner05() {
  const items = [
    { icon: <Truck className="size-4" />, text: "Free updates forever" },
    { icon: <ShieldCheck className="size-4" />, text: "MIT licensed" },
    { icon: <Globe2 className="size-4" />, text: "RTL included" },
  ];
  return (
    <div className="border-b border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-2.5">
        {items.map((item) => (
          <span key={item.text} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
