import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export default function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Plan saved", {
            description: "Ultimate Workout · 8 weeks",
          })
        }
      >
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Set deleted", {
            action: { label: "Undo", onClick: () => toast.success("Restored") },
          })
        }
      >
        With undo
      </Button>
    </div>
  );
}
