import { MultiSelect } from "@/components/ui/multi-select";

const muscles = [
  { value: "chest", label: "Chest" },
  { value: "back", label: "Back" },
  { value: "shoulders", label: "Shoulders" },
  { value: "biceps", label: "Biceps" },
  { value: "triceps", label: "Triceps" },
  { value: "quads", label: "Quadriceps" },
  { value: "hamstrings", label: "Hamstrings" },
];

export default function MultiSelectDemo() {
  return (
    <div className="w-full max-w-sm">
      <MultiSelect
        options={muscles}
        defaultValue={["chest", "back"]}
        label="Muscle groups"
        placeholder="Select muscle groups"
      />
    </div>
  );
}
