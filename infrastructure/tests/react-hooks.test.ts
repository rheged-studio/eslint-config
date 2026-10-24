import { ESLint, type Linter } from "eslint";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { execSync } from "node:child_process";
import { beforeAll, describe, expect, it } from "vitest";

import { base } from "../../dist/index.js";

const SEVERITY = { error: 2, off: 0, warn: 1 } as const;

const upstream = reactHooksPlugin.configs.flat["recommended-latest"].rules;

// Deliberately stricter than upstream — see rules/reactHooks.ts.
const OVERRIDES: Record<string, number> = {
  "react-hooks/exhaustive-deps": SEVERITY.error,
  "react-hooks/unsupported-syntax": SEVERITY.error,
};

const severityOf = (entry: Linter.RuleEntry | undefined) => {
  const level = Array.isArray(entry) ? entry[0] : entry;

  return typeof level === "string" ? SEVERITY[level] : level;
};

describe("React Hooks rules under base", () => {
  beforeAll(() => {
    execSync("pnpm run build", { stdio: "inherit" });
  });

  it.each(["component.tsx", "hooks.ts", "legacy.jsx", "legacy.js"])(
    "match recommended-latest (plus stated overrides) for %s",
    async (file) => {
      const eslint = new ESLint({ baseConfig: base, overrideConfigFile: true });
      const { rules } = await eslint.calculateConfigForFile(file);

      for (const [rule, entry] of Object.entries(upstream)) {
        expect(severityOf(rules[rule]), rule).toBe(
          OVERRIDES[rule] ?? severityOf(entry),
        );
      }
    },
  );
});
