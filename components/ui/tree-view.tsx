"use client";

import * as React from "react";
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
}

export interface TreeViewProps {
  data: TreeNode[];
  /** Expanded node ids (controlled) or initial set. */
  expanded?: string[];
  defaultExpanded?: string[];
  onExpandedChange?: (ids: string[]) => void;
  selected?: string;
  onSelectedChange?: (id: string) => void;
  /** Fallback icons for branches/leaves when a node has none. */
  showDefaultIcons?: boolean;
  label?: string;
  className?: string;
}

interface FlatNode {
  node: TreeNode;
  depth: number;
  parent: string | null;
}

/** Visible rows in order — the keyboard model works over this list. */
function flatten(
  nodes: TreeNode[],
  expandedSet: Set<string>,
  depth = 0,
  parent: string | null = null,
): FlatNode[] {
  return nodes.flatMap((node) => {
    const row: FlatNode[] = [{ node, depth, parent }];
    if (node.children && expandedSet.has(node.id)) {
      row.push(...flatten(node.children, expandedSet, depth + 1, node.id));
    }
    return row;
  });
}

/**
 * Keyboard-complete tree (role=tree / treeitem):
 * Up/Down move; the arrow toward the reading direction expands (or steps
 * into children); the opposite arrow collapses (or steps to the parent) —
 * inverted automatically under RTL. The chevron mirrors with it.
 */
export function TreeView({
  data,
  expanded,
  defaultExpanded = [],
  onExpandedChange,
  selected,
  onSelectedChange,
  showDefaultIcons = true,
  label = "Tree",
  className,
}: TreeViewProps) {
  const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded);
  const [internalSelected, setInternalSelected] = React.useState<string | undefined>();
  const [focusedId, setFocusedId] = React.useState<string | null>(null);
  const treeRef = React.useRef<HTMLUListElement>(null);

  const expandedIds = expanded ?? internalExpanded;
  const selectedId = selected ?? internalSelected;
  const expandedSet = React.useMemo(() => new Set(expandedIds), [expandedIds]);
  const rows = React.useMemo(() => flatten(data, expandedSet), [data, expandedSet]);

  function commitExpanded(next: string[]) {
    if (expanded === undefined) setInternalExpanded(next);
    onExpandedChange?.(next);
  }

  function toggleNode(id: string) {
    commitExpanded(
      expandedSet.has(id)
        ? expandedIds.filter((e) => e !== id)
        : [...expandedIds, id],
    );
  }

  function select(id: string) {
    if (selected === undefined) setInternalSelected(id);
    onSelectedChange?.(id);
  }

  function focusRow(id: string) {
    setFocusedId(id);
    treeRef.current
      ?.querySelector<HTMLElement>(`[data-tree-id="${CSS.escape(id)}"]`)
      ?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent, flat: FlatNode, index: number) {
    const rtl =
      treeRef.current && getComputedStyle(treeRef.current).direction === "rtl";
    const expandKey = rtl ? "ArrowLeft" : "ArrowRight";
    const collapseKey = rtl ? "ArrowRight" : "ArrowLeft";
    const { node } = flat;
    const isBranch = !!node.children?.length;

    if (e.key === "ArrowDown" && index < rows.length - 1) {
      e.preventDefault();
      focusRow(rows[index + 1].node.id);
    } else if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      focusRow(rows[index - 1].node.id);
    } else if (e.key === expandKey) {
      e.preventDefault();
      if (isBranch && !expandedSet.has(node.id)) toggleNode(node.id);
      else if (isBranch && node.children![0]) focusRow(node.children![0].id);
    } else if (e.key === collapseKey) {
      e.preventDefault();
      if (isBranch && expandedSet.has(node.id)) toggleNode(node.id);
      else if (flat.parent) focusRow(flat.parent);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(node.id);
      if (isBranch) toggleNode(node.id);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusRow(rows[0].node.id);
    } else if (e.key === "End") {
      e.preventDefault();
      focusRow(rows[rows.length - 1].node.id);
    }
  }

  const tabbableId = focusedId ?? selectedId ?? rows[0]?.node.id;

  return (
    <ul ref={treeRef} role="tree" aria-label={label} className={cn("text-sm", className)}>
      {rows.map((flat, index) => {
        const { node, depth } = flat;
        const isBranch = !!node.children?.length;
        const isExpanded = expandedSet.has(node.id);
        const isSelected = selectedId === node.id;

        return (
          <li key={node.id} role="none">
            <div
              role="treeitem"
              data-tree-id={node.id}
              aria-expanded={isBranch ? isExpanded : undefined}
              aria-selected={isSelected}
              aria-level={depth + 1}
              tabIndex={node.id === tabbableId ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, flat, index)}
              onFocus={() => setFocusedId(node.id)}
              onClick={() => {
                select(node.id);
                if (isBranch) toggleNode(node.id);
              }}
              style={{ paddingInlineStart: `${depth * 16 + 8}px` }}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 rounded-md py-1.5 pe-2",
                "transition-colors outline-none",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring",
                isSelected && "bg-accent font-medium text-accent-foreground",
              )}
            >
              {isBranch ? (
                <ChevronRight
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-150 rtl-flip",
                    isExpanded && "rotate-90 rtl:-rotate-90",
                  )}
                />
              ) : (
                <span className="size-4 shrink-0" />
              )}
              <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
                {node.icon ??
                  (showDefaultIcons &&
                    (isBranch ? (
                      isExpanded ? (
                        <FolderOpen aria-hidden="true" />
                      ) : (
                        <Folder aria-hidden="true" />
                      )
                    ) : (
                      <File aria-hidden="true" />
                    )))}
              </span>
              <span dir="auto" className="truncate">
                {node.label}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
