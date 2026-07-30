import { ProgressSteps } from "@/components/ui/progress-steps";

export default function ProgressStepsDemo() {
  return (
    <div className="w-full">
      <ProgressSteps
        current={1}
        steps={[
          { title: "Account", description: "Your details" },
          { title: "Plan", description: "Pick a tier" },
          { title: "Payment", description: "Card or invoice" },
          { title: "Done" },
        ]}
      />
    </div>
  );
}
