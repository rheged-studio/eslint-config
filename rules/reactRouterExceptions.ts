import type { Linter } from "eslint";

/**
 * Part of the `frameworkRouting` composition (paired with `frameworkRoutingRule`).
 * Not applied directly by consumers — pull in via `frameworkRouting`.
 *
 * Covers both React Router route-module conventions: flat files
 * (`root.tsx`, `home.route.tsx`) and folder routes
 * (`routes/health/route.tsx`, resource routes such as `routes/sitemap[.]xml/route.ts`).
 *
 * Composition-order constraint: this preset MUST spread after `preferences`
 * (which `base` includes) so its `func-style` override beats the stricter
 * declaration-only default. Re-ordering silently breaks the React Router
 * typed-export pattern. See `index.ts` for the canonical composition.
 */
export const reactRouterExceptions = {
  files: ["**/root.tsx", "**/*.route.tsx", "**/route.tsx", "**/route.ts"],
  rules: {
    // func-style — requires `function foo() {}` over `const foo = function () {}` / arrows.
    // Error + declaration + allowArrowFunctions: React Router typed exports need annotated arrow/const patterns.
    // See: https://github.com/RobEasthope/protomolecule/issues/323
    // https://eslint.org/docs/latest/rules/func-style
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  },
} satisfies Linter.Config;
