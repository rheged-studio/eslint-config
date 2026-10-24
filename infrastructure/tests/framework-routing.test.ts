import { ESLint, type Linter } from "eslint";
import { execSync } from "node:child_process";
import { beforeAll, describe, expect, it } from "vitest";

import { base, frameworkRouting, typescript } from "../../dist/index.js";

const FIXTURES = "infrastructure/tests/fixtures/routing";

const config: Linter.Config[] = [...base, typescript, ...frameworkRouting];

const funcStyleMessages = async (file: string) => {
  const eslint = new ESLint({ baseConfig: config, overrideConfigFile: true });
  const [result] = await eslint.lintFiles([`${FIXTURES}/${file}`]);

  // A fatal parse error would leave no func-style messages and mask a regression.
  expect(result?.messages.filter((m) => m.fatal)).toEqual([]);

  return result?.messages.filter((m) => m.ruleId === "func-style") ?? [];
};

describe("frameworkRouting func-style exceptions", () => {
  beforeAll(() => {
    execSync("pnpm run build", { stdio: "inherit" });
  });

  it("allows typed arrow exports in a folder route (route.tsx)", async () => {
    expect(await funcStyleMessages("app/routes/health/route.tsx")).toEqual([]);
  });

  it("allows typed arrow exports in a folder resource route (route.ts)", async () => {
    expect(
      await funcStyleMessages("app/routes/sitemap[.]xml/route.ts"),
    ).toEqual([]);
  });

  it("still allows typed arrow exports in a flat *.route.tsx file", async () => {
    expect(await funcStyleMessages("app/routes/home.route.tsx")).toEqual([]);
  });

  it("keeps declaration-only func-style outside route modules", async () => {
    expect(await funcStyleMessages("lib/helper.ts")).not.toEqual([]);
  });
});
