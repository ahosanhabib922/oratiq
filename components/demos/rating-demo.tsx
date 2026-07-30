import { Rating } from "@/components/ui/rating";

export default function RatingDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating defaultValue={4} label="Rate this plan" />
      <Rating value={4} readOnly size="sm" label="Average rating" />
    </div>
  );
}
