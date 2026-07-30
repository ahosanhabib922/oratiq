import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex-1">
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}
