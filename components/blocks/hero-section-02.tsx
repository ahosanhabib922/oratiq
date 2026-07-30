import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

/** Split hero: copy on the start side, product visual on the end side. */
export function HeroSection02() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
      <div>
        <Badge variant="muted" size="sm">New · Blocks are free</Badge>
        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
          The design system that ships in every locale
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          98 components and sections on Radix + Tailwind — RTL, dark mode, and
          accessibility included, not promised.
        </p>
        <ul className="mt-6 flex flex-col gap-2 text-sm">
          {["One command install", "Your repo, your code", "MIT licensed"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-success" strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            Start building
            <ArrowRight className="rtl-flip" />
          </Button>
          <Button size="lg" variant="ghost">View components</Button>
        </div>
      </div>

      <Card padding="default" className="gap-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Weekly goal</span>
          <Switch defaultChecked aria-label="Weekly goal" size="sm" />
        </div>
        <Progress value={72} aria-label="Goal progress" />
        <div className="flex gap-2">
          <Input size="sm" placeholder="you@example.com" aria-label="Email" />
          <Button size="sm" className="shrink-0">Invite</Button>
        </div>
        <p className="text-xs text-muted-foreground">
          ↑ Real Oratiq components — this panel is the product.
        </p>
      </Card>
    </section>
  );
}
