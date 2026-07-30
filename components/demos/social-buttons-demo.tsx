import { SocialButtons } from "@/components/ui/social-buttons";

export default function SocialButtonsDemo() {
  return (
    <div className="w-full max-w-xs">
      <SocialButtons providers={["google", "apple", "github"]} />
    </div>
  );
}
