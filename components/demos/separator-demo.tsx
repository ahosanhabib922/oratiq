import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <p className="text-sm">Sign in with your email address.</p>
      <Separator label="or" />
      <p className="text-sm">Continue with Google.</p>
    </div>
  );
}
