import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" />
    </div>
  );
}
