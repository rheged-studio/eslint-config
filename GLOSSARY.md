# ESLint Config

The estate's shared ESLint v9 flat-config package, `@rheged-studio/eslint-config`. It exports named presets that consumers compose into their own `eslint.config`, rather than one monolithic config.

## Language

### Packaging

**Preset**:
One named export of the package: a `Linter.Config` or an array of them, defined in `rules/*.ts` and surfaced through `index.ts`.
_Avoid_: Ruleset, plugin, shareable config

**Consumer**:
A repo that installs the package and composes its presets in its own `eslint.config`.
_Avoid_: Downstream, host repo, user

**Composition order**:
The sequence in which a consumer lists presets. Later entries win, so some presets must come after others to take effect.
_Avoid_: Precedence, load order

**Legacy default export**:
The deprecated default export that bundles the v6.x composition for consumers still migrating from `@robeasthope/eslint-config`.
_Avoid_: Default config, kitchen-sink config

### Core presets

**Base stack**:
The `base` preset, the stack almost every consumer wants: plugin alias, global ignores, canonical baseline, `package.json` and `tsconfig.*.json` lint config, CommonJS and ESM overrides, and `preferences`.
_Avoid_: Default preset, core config

**Canonical baseline**:
The upstream `eslint-config-canonical/auto` rules that `base` builds on. Most rules live here, not in `rules/*.ts`.
_Avoid_: Upstream config, canonical preset

**Plugin alias**:
The registration of `eslint-plugin-import-x` under both the `import` and `import-x` names, so the canonical baseline's `import/*` rules resolve.
_Avoid_: import-x hack, plugin shim

**Global ignores**:
The `ignoredFileAndFolders` entry in `base`: build output, tooling state directories, `node_modules`, the lock file and `tsconfig.json`.
_Avoid_: Ignore list, ignore patterns

**Preferences**:
The `preferences` block in `base`, holding the estate's opinionated rule choices (top-level type imports, `func-style: declaration`, Prettier integration, import resolver, `no-console` as a warning).
_Avoid_: Rules block, house style

**TypeScript overrides**:
The `typescript` preset, which switches off `react/no-unused-prop-types` and `react/prop-types` for `**/*.{ts,tsx}` because TypeScript makes them redundant.
_Avoid_: TS preset, TypeScript config

**Framework routing**:
The `frameworkRouting` preset, an ordered pair of configs that relax filename and `func-style` rules for file-routed directories and React Router 7 typed exports. It must be spread after `base`.
_Avoid_: Routing preset, router config

**Testing preset**:
The `testing` preset, which relaxes strict TypeScript rules and `import/no-extraneous-dependencies` for test and setup files.
_Avoid_: Test overrides, test config

### Opt-in presets

**Opt-in preset**:
A preset outside the default composition that a consumer adds only when it needs it: `astro`, `sanity`, `storybook`, `complexity`, `e2e` or `tableComponents`.
_Avoid_: Optional preset, add-on

**Table components preset**:
The `tableComponents` preset, which switches off `react/no-unstable-nested-components` for `**/*Table.tsx` because column-cell renderers trigger false positives.
_Avoid_: Table preset

**Self-lint config**:
The package's own `eslint.config.ts`, which composes a smaller subset of its presets to lint this repo.
_Avoid_: Local config, repo config
