# Oratiq

An **RTL-first, token-driven design system** for Next.js 16, React 19, and
Tailwind CSS v4. 62 components built on Radix primitives — every one verified
in both writing directions, both themes.

**Docs & gallery:** https://ui.oratiq.com

## Why another component library?

Most libraries treat right-to-left as an afterthought. Oratiq is built the
other way around:

- **Logical properties everywhere** — `ms-`/`pe-`/`start-`/`end-`, never
  `ml-`/`pr-`/`left-`/`right-`. Layouts mirror under `dir="rtl"` with zero
  per-component work.
- **Bidi-safe by default** — phone numbers, shortcuts, URLs, and codes are
  isolated so the Unicode bidi algorithm can't scramble them.
- **Direction-aware behavior** — keyboard navigation, sheet/toast edges,
  carousel scroll, progress fill, and calendar grids all follow the writing
  direction via a single `DirectionProvider`.
- **Three-layer tokens** — primitive ramps → semantic roles → utilities.
  Re-branding is a CSS override, never a component edit.

## Install

```bash
npx @oratiq-js/ui init
npx @oratiq-js/ui add button input field
```

Components are copied into your repo — the code is yours to edit. See the
[installation guide](https://ui.oratiq.com/design-library/installation).

## Repository layout

| Path | What it is |
|---|---|
| `components/ui/` | The 62 components (source of truth) |
| `components/providers/` | Theme + direction + toast providers |
| `app/design-library/` | The documentation site |
| `public/r/` | Generated registry items (`npm run registry`) |
| `packages/cli/` | The `@oratiq-js/ui` CLI |
| `scripts/build-registry.mjs` | Generates the registry from source |

## Development

```bash
npm install
npm run dev        # docs site on localhost:3000
npm run registry   # regenerate public/r/ from components/ui
npm run build      # production build (docs + registry)
```

## License

MIT — see [LICENSE](LICENSE). Free to use in personal and commercial projects.
