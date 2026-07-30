import { DocsShell } from "@/components/docs/docs-shell";

export default function DesignLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsShell>{children}</DocsShell>;
}
