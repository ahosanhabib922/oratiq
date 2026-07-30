/**
 * The component registry.
 *
 * Single source of truth for the docs sidebar, and later for the CLI's
 * `add` command — every entry here becomes a fetchable registry item.
 * `status` is honest on purpose: the docs render it as a badge, so nobody
 * ships against something that isn't built yet.
 */

export type ComponentStatus = "ready" | "in-progress" | "planned";

export interface RegistryItem {
  slug: string;
  name: string;
  description: string;
  status: ComponentStatus;
  /** npm packages a consumer needs for this component. */
  dependencies?: string[];
}

export interface RegistryGroup {
  name: string;
  items: RegistryItem[];
}

export const FOUNDATIONS: RegistryGroup = {
  name: "Foundations",
  items: [
    { slug: "colors", name: "Colors", description: "Primitive ramps, semantic roles, and how to re-theme.", status: "ready" },
    { slug: "typography", name: "Typography", description: "The type scale, weights, and usage rules.", status: "ready" },
    { slug: "spacing", name: "Spacing", description: "The 4px-based spacing scale and layout rhythm.", status: "ready" },
    { slug: "radius", name: "Radius", description: "Corner radii, derived from one base value.", status: "ready" },
    { slug: "elevation", name: "Elevation", description: "Shadow and surface levels in light and dark.", status: "ready" },
    { slug: "motion", name: "Motion", description: "Duration and easing tokens, and reduced-motion.", status: "ready" },
    { slug: "icons", name: "Icons", description: "Icon sizing, stroke, alignment, and RTL mirroring.", status: "ready" },
    { slug: "direction", name: "Direction", description: "How LTR/RTL works across the whole system.", status: "ready" },
  ],
};

export const GROUPS: RegistryGroup[] = [
  {
    name: "Form",
    items: [
      { slug: "button", name: "Button", description: "Triggers an action.", status: "ready" },
      { slug: "button-group", name: "Button Group", description: "Joins related buttons into one control.", status: "ready" },
      { slug: "label", name: "Label", description: "Names a form control.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "field", name: "Field", description: "Label, control, description, and error as one unit.", status: "ready" },
      { slug: "input", name: "Input", description: "Single-line text entry.", status: "ready" },
      { slug: "input-group", name: "Input Group", description: "Input with addons, prefixes, and suffixes.", status: "ready" },
      { slug: "input-otp", name: "Input OTP", description: "One-time code entry.", status: "ready" },
      { slug: "textarea", name: "Textarea", description: "Multi-line text entry.", status: "ready" },
      { slug: "checkbox", name: "Checkbox", description: "Binary or indeterminate choice.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "radio-group", name: "Radio Group", description: "One choice from a set.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "switch", name: "Switch", description: "Immediate on/off toggle.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "toggle", name: "Toggle", description: "Two-state button.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "toggle-group", name: "Toggle Group", description: "Single or multiple selection from toggles.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "slider", name: "Slider", description: "Select a value from a range.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "native-select", name: "Native Select", description: "Platform select, for long or mobile-first lists.", status: "ready" },
      { slug: "select", name: "Select", description: "Custom-styled single select.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "combobox", name: "Combobox", description: "Searchable select.", status: "ready", dependencies: ["cmdk"] },
      { slug: "calendar", name: "Calendar", description: "Date grid.", status: "ready", dependencies: ["react-day-picker"] },
      { slug: "date-picker", name: "Date Picker", description: "Calendar in a popover.", status: "ready" },
      { slug: "multi-select", name: "Multi Select", description: "Select many options as removable tags.", status: "ready", dependencies: ["cmdk"] },
      { slug: "rating", name: "Rating", description: "Star rating, display and input.", status: "ready" },
      { slug: "tag-input", name: "Tag Input", description: "Dismissible tags with free entry.", status: "ready" },
      { slug: "social-buttons", name: "Social Buttons", description: "OAuth sign-in buttons.", status: "ready" },
      { slug: "color-picker", name: "Color Picker", description: "Pick a colour with swatches and input.", status: "ready" },
      { slug: "file-uploader", name: "File Uploader", description: "Drag-and-drop upload zone.", status: "ready" },
      { slug: "rich-text-editor", name: "Rich Text Editor", description: "Formatted text entry with a toolbar.", status: "ready" },
    ],
  },
  {
    name: "Display",
    items: [
      { slug: "typography-component", name: "Typography", description: "Heading, Text, Code, List, Blockquote.", status: "ready" },
      { slug: "badge", name: "Badge", description: "Short status or metadata label.", status: "ready" },
      { slug: "avatar", name: "Avatar", description: "User image with fallback.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "card", name: "Card", description: "Grouped content surface.", status: "ready" },
      { slug: "separator", name: "Separator", description: "Divides content.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "skeleton", name: "Skeleton", description: "Loading placeholder.", status: "ready" },
      { slug: "spinner", name: "Spinner", description: "Indeterminate loading.", status: "ready" },
      { slug: "progress", name: "Progress", description: "Determinate loading.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "kbd", name: "Kbd", description: "Keyboard key.", status: "ready" },
      { slug: "empty", name: "Empty", description: "Empty state.", status: "ready" },
      { slug: "item", name: "Item", description: "Generic list row.", status: "ready" },
      { slug: "alert", name: "Alert", description: "Inline message.", status: "ready" },
      { slug: "aspect-ratio", name: "Aspect Ratio", description: "Constrains content to a ratio.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "marker", name: "Marker", description: "Annotates a point on a surface.", status: "ready" },
      { slug: "attachment", name: "Attachment", description: "File attachment chip.", status: "ready" },
      { slug: "featured-icon", name: "Featured Icon", description: "An icon on a styled tile.", status: "ready" },
      { slug: "metric", name: "Metric", description: "Stat card with delta and trend.", status: "ready" },
      { slug: "code-snippet", name: "Code Snippet", description: "Code with a copy button.", status: "ready" },
      { slug: "qr-code", name: "QR Code", description: "Generate a themed QR code.", status: "ready" },
      { slug: "video-player", name: "Video Player", description: "Media player with themed controls.", status: "ready" },
    ],
  },
  {
    name: "Overlay",
    items: [
      { slug: "dialog", name: "Dialog", description: "Modal window.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "alert-dialog", name: "Alert Dialog", description: "Modal that interrupts for confirmation.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "sheet", name: "Sheet", description: "Panel anchored to an edge.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "drawer", name: "Drawer", description: "Draggable bottom panel.", status: "ready", dependencies: ["vaul"] },
      { slug: "popover", name: "Popover", description: "Floating content anchored to a trigger.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "tooltip", name: "Tooltip", description: "Short hint on hover or focus.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "hover-card", name: "Hover Card", description: "Rich preview on hover.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "dropdown-menu", name: "Dropdown Menu", description: "Menu from a trigger.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "context-menu", name: "Context Menu", description: "Menu on right-click.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "menubar", name: "Menubar", description: "Application menu bar.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "command", name: "Command", description: "Command palette.", status: "ready", dependencies: ["cmdk"] },
      { slug: "toast", name: "Toast", description: "Transient notification.", status: "ready", dependencies: ["sonner"] },
    ],
  },
  {
    name: "Navigation & layout",
    items: [
      { slug: "accordion", name: "Accordion", description: "Vertically stacked collapsible sections.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "collapsible", name: "Collapsible", description: "Show and hide a region.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "tabs", name: "Tabs", description: "Switch between panels.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "breadcrumb", name: "Breadcrumb", description: "Path to the current page.", status: "ready" },
      { slug: "pagination", name: "Pagination", description: "Navigate paged content.", status: "ready" },
      { slug: "navigation-menu", name: "Navigation Menu", description: "Site navigation with panels.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "sidebar", name: "Sidebar", description: "Collapsible application sidebar.", status: "ready" },
      { slug: "resizable", name: "Resizable", description: "Draggable split panes.", status: "ready", dependencies: ["react-resizable-panels"] },
      { slug: "scroll-area", name: "Scroll Area", description: "Styled cross-browser scrolling.", status: "ready", dependencies: ["radix-ui"] },
      { slug: "carousel", name: "Carousel", description: "Horizontal slide rail.", status: "ready", dependencies: ["embla-carousel-react"] },
    ],
  },
  {
    name: "Data",
    items: [
      { slug: "table", name: "Table", description: "Static tabular data.", status: "ready" },
      { slug: "data-table", name: "Data Table", description: "Sorting, filtering, pagination, selection.", status: "ready", dependencies: ["@tanstack/react-table"] },
      { slug: "chart", name: "Chart", description: "Themed chart wrappers.", status: "ready", dependencies: ["recharts"] },
    ],
  },
  {
    name: "App patterns",
    items: [
      { slug: "page-header", name: "Page Header", description: "Title, meta, and actions atop a page.", status: "ready" },
      { slug: "section-header", name: "Section Header", description: "Heading row with supporting actions.", status: "ready" },
      { slug: "filter-bar", name: "Filter Bar", description: "Search, filters, and view controls in one row.", status: "ready" },
      { slug: "activity-feed", name: "Activity Feed", description: "Timeline of events with actors and times.", status: "ready" },
      { slug: "progress-steps", name: "Progress Steps", description: "Multi-step wizard indicator.", status: "ready" },
      { slug: "tree-view", name: "Tree View", description: "Nested, keyboard-navigable hierarchy.", status: "ready" },
      { slug: "notifications", name: "Notifications", description: "Inbox-style notification list.", status: "ready" },
    ],
  },
  {
    name: "Messaging",
    items: [
      { slug: "bubble", name: "Bubble", description: "Chat message bubble.", status: "ready" },
      { slug: "message", name: "Message", description: "Message with author and metadata.", status: "ready" },
      { slug: "message-scroller", name: "Message Scroller", description: "Virtualised, stick-to-bottom message list.", status: "ready" },
    ],
  },
];

export const ALL_ITEMS = GROUPS.flatMap((group) => group.items);

export function getItem(slug: string) {
  return ALL_ITEMS.find((item) => item.slug === slug);
}

export const COUNTS = {
  total: ALL_ITEMS.length,
  ready: ALL_ITEMS.filter((i) => i.status === "ready").length,
  planned: ALL_ITEMS.filter((i) => i.status === "planned").length,
};
