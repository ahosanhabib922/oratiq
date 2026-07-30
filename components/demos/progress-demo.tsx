import { Progress, ProgressCircle } from "@/components/ui/progress";

export default function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <Progress value={62} aria-label="Upload progress" />
      <ProgressCircle value={62} label="Upload progress">
        <span className="text-lg font-medium tnum">62%</span>
      </ProgressCircle>
    </div>
  );
}
