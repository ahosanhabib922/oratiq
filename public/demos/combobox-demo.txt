import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function ComboboxDemo() {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        options={frameworks}
        label="Framework"
        placeholder="Select a framework"
      />
    </div>
  );
}
