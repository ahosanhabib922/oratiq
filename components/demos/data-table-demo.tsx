import { DataTable, type ColumnDef } from "@/components/ui/data-table";

interface Exercise {
  name: string;
  muscle: string;
  sets: number;
}

const data: Exercise[] = [
  { name: "Incline Dumbbell Press", muscle: "Chest", sets: 3 },
  { name: "Barbell Row", muscle: "Back", sets: 4 },
  { name: "Back Squat", muscle: "Quads", sets: 5 },
  { name: "Overhead Press", muscle: "Shoulders", sets: 4 },
  { name: "Romanian Deadlift", muscle: "Hamstrings", sets: 4 },
  { name: "Pull Up", muscle: "Back", sets: 4 },
];

const columns: ColumnDef<Exercise>[] = [
  { accessorKey: "name", header: "Exercise" },
  { accessorKey: "muscle", header: "Muscle" },
  { accessorKey: "sets", header: "Sets" },
];

export default function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterColumn="name"
      filterPlaceholder="Filter exercises…"
      pageSize={4}
    />
  );
}
