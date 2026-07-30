import { CodeSnippet } from "@/components/ui/code-snippet";

export default function CodeSnippetDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <CodeSnippet inline code="npx @oratiq-js/ui add code-snippet" />
      <CodeSnippet
        label="app/page.tsx"
        code={`import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Get started</Button>;
}`}
      />
    </div>
  );
}
