import type { Linter } from "eslint";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/**
 * Part of `base` — applied to every consumer. Spread after canonical's
 * React Hooks block so these severities win.
 *
 * Canonical registers `eslint-plugin-react-hooks` but pins an older rule list.
 * We own the rule set by spreading the plugin's own `recommended-latest`, so a
 * plugin bump brings in new React Compiler rules without a preset change.
 * Rules only — the plugin instance is the one canonical already registers.
 *
 * Two deliberate deviations from upstream (both stay at error, as canonical had them):
 * - `exhaustive-deps` — upstream warns; stale effect/memo dependencies are real bugs.
 * - `unsupported-syntax` — upstream warns; syntax the React Compiler can't
 * optimise should be rewritten, not left to drift.
 *
 * `component-hook-factories` still arrives via canonical; see R-2911.
 * @see https://react.dev/reference/eslint-plugin-react-hooks
 */
export const reactHooks = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  rules: {
    ...reactHooksPlugin.configs.flat["recommended-latest"].rules,
    // react-hooks/exhaustive-deps — verifies the dependency arrays of effects, memos and callbacks.
    // Error (upstream: warn): a missing dependency is a stale-closure bug, not a style nit.
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
    "react-hooks/exhaustive-deps": "error",
    // react-hooks/unsupported-syntax — flags syntax the React Compiler cannot analyse (e.g. `with`, `eval`).
    // Error (upstream: warn): keeps components compiler-optimisable; matches canonical's previous setting.
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
    "react-hooks/unsupported-syntax": "error",
  },
} satisfies Linter.Config;
