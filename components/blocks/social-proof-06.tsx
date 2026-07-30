import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";

/** Compact inline strip — drop under any hero. */
export function SocialProof06() {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-8 sm:px-6">
      <AvatarGroup max={5} total={2140}>
        {["LH", "TR", "AC", "NP", "JW", "SW"].map((i) => (
          <Avatar key={i} size="sm"><AvatarFallback>{i}</AvatarFallback></Avatar>
        ))}
      </AvatarGroup>
      <p className="text-sm text-muted-foreground">
        Trusted by <span className="font-semibold text-foreground tnum">2,140+</span> developers shipping worldwide
      </p>
    </div>
  );
}
