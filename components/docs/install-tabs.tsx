"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock, CommandBlock } from "./code-block";

interface RegistryFile {
  target: string;
  content: string;
}

interface RegistryItem {
  name: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFile[];
}

/** Client-side walk of the same graph the CLI resolves. */
async function resolveGraph(name: string): Promise<RegistryItem[]> {
  const seen = new Map<string, RegistryItem>();
  const queue = [name];

  while (queue.length) {
    const current = queue.shift()!;
    if (seen.has(current)) continue;
    const response = await fetch(`/r/${current}.json`);
    if (!response.ok) throw new Error(`registry returned ${response.status}`);
    const item: RegistryItem = await response.json();
    seen.set(current, item);
    for (const dep of item.registryDependencies ?? []) {
      if (!seen.has(dep)) queue.push(dep);
    }
  }

  return [...seen.values()];
}

export interface InstallTabsProps {
  /** Registry item name — also the component's file name. */
  name: string;
}

/**
 * CLI and Manual installation, as tabs.
 *
 * The manual path shows the *complete* file set — the component plus every
 * registry dependency it pulls in — fetched from the same public registry the
 * CLI reads. Showing one file alone would hand people code that doesn't
 * compile.
 */
export function InstallTabs({ name }: InstallTabsProps) {
  const [items, setItems] = React.useState<RegistryItem[] | null>(null);
  const [failed, setFailed] = React.useState(false);
  const requested = React.useRef(false);

  function loadManual() {
    if (requested.current) return;
    requested.current = true;
    resolveGraph(name)
      .then(setItems)
      .catch(() => setFailed(true));
  }

  const npmDeps = [
    ...new Set((items ?? []).flatMap((item) => item.dependencies ?? [])),
  ].sort();
  const files = (items ?? []).flatMap((item) => item.files ?? []);

  return (
    <Tabs
      defaultValue="cli"
      onValueChange={(value) => value === "manual" && loadManual()}
    >
      <TabsList variant="solid" className="w-fit">
        <TabsTrigger value="cli" className="px-4">
          CLI
        </TabsTrigger>
        <TabsTrigger value="manual" className="px-4">
          Manual
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cli">
        <CommandBlock command={`npx @oratiq-js/ui add ${name}`} />
        <p className="mt-3 text-xs text-muted-foreground">
          Copies the component and everything it depends on into your project,
          then lists the npm packages to install. The code is yours after this.
        </p>
      </TabsContent>

      <TabsContent value="manual">
        {failed ? (
          <p className="text-sm text-muted-foreground">
            Couldn&apos;t reach the registry — the same files are on GitHub.
          </p>
        ) : !items ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-medium">
                1. Install the dependencies
              </p>
              <CommandBlock command={`npm install ${npmDeps.join(" ")}`} />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                2. Copy {files.length === 1 ? "this file" : `these ${files.length} files`}{" "}
                into your project
              </p>
              <p className="mb-3 text-xs text-muted-foreground">
                The full set — the component plus what it imports. Copying the
                first file alone won&apos;t compile.
              </p>
              <div className="flex flex-col gap-3">
                {files.map((file) => (
                  <CodeBlock
                    key={file.target}
                    label={file.target}
                    code={file.content}
                    maxHeight={280}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
