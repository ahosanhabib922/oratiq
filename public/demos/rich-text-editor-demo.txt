import { RichTextEditor } from "@/components/ui/rich-text-editor";

export default function RichTextEditorDemo() {
  return (
    <div className="w-full max-w-lg">
      <RichTextEditor
        defaultValue="<p>Write your <strong>coaching notes</strong> here — lists, quotes, and formatting included.</p>"
        placeholder="Write something…"
      />
    </div>
  );
}
