# @oratiq-js/ui

CLI for [Oratiq](https://ui.oratiq.com) — an RTL-first, token-driven component
registry for Next.js, React 19, and Tailwind CSS v4.

Components are **copied into your repo**, not installed as a dependency. After
`add`, the code is yours: every line is editable, and updates are an explicit
re-add reviewed through `git diff` — never a silent version bump.

## Usage

```bash
# create components.json and the token layer
npx @oratiq-js/ui init

# copy components (transitive dependencies resolve automatically)
npx @oratiq-js/ui add button input field

# everything
npx @oratiq-js/ui add --all

# what's available
npx @oratiq-js/ui list
```

`add` skips files that already exist so your edits are never clobbered;
re-run with `--overwrite` to pull the latest version of a component, then
review the diff.

## Configuration

`components.json` in your project root:

```json
{
  "aliases": { "ui": "components/ui", "lib": "lib", "components": "components" },
  "registry": "https://ui.oratiq.com/r"
}
```

Point `registry` at any compatible registry — including your own fork.

## Documentation

Full docs, component gallery, and theming guide: **https://ui.oratiq.com**

MIT © Oratiq
