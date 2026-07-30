import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  );
}
