# Contributing to Oratiq

Thanks for your interest! Issues and pull requests are welcome.

## Ground rules

Oratiq is RTL-first. Every contribution must hold these invariants:

1. **Logical properties only** — `ms-`/`me-`, `ps-`/`pe-`, `start-`/`end-`,
   `text-start`, `rounded-s-*`, `border-e`. Never `ml-`, `pr-`, `left-`,
   `right-`, `text-left`, `rounded-l-*`.
2. **Mirror directional glyphs** with `.rtl-flip` (chevrons, arrows, trends).
   Never mirror clocks, checkmarks, logos, or anything with numerals.
3. **Isolate inherently-LTR strings** (`<bdi dir="ltr">`): phone numbers,
   shortcuts, codes, URLs, version strings.
4. **Semantic tokens only** — `bg-primary`, `text-muted-foreground`. No raw
   colours, no primitive ramps in components.
5. **Verify all four modes** before opening a PR: light/dark × LTR/RTL
   (toggles are in the docs header).

## Workflow

```bash
npm install
npm run dev        # docs on localhost:3000 — your test bench
npm run registry   # regenerate public/r/ + demo index after component changes
npm run build      # must pass before you open the PR
```

- One component/fix per PR — small PRs merge fast.
- New component? Add its demo (`components/demos/<name>-demo.tsx`) and docs
  section too.
- The maintainer reviews and merges; nothing lands without review.
