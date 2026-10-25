---
title: Bump the npm dependency group, holding ESLint-10-only majors
release_note: ""
version:
created_at: "2026-10-25T10:37:23Z"
merged_at:
branch: bump-npm-deps-hold-typescript-6
pr:
commit:
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues: []
stats:
---

## Changed

**npm dependency group**, minus the majors that can't run here:

- Takes Dependabot's grouped bump (#136) for `eslint-plugin-jsdoc` 65, `eslint-plugin-n` 18, `typescript-eslint` 8.72, vitest 5, lint-staged 17, markdownlint-cli2 0.23, sort-package-json 4, `@rheged-studio/commitlint-config` 2 and the remaining minor and patch updates
- Holds `typescript` on 6.x: `typescript-eslint` 8.72.0 peers `typescript <6.1.0` and throws on load under TypeScript 7
- Holds `eslint-plugin-astro` and `astro-eslint-parser` on 1.x and `eslint-plugin-unicorn` on 64: their newer majors peer ESLint 10, and this package supports ESLint 8.57 and 9
- Resolved rules for `base`, `typescript`, `frameworkRouting`, `testing` and `astro` are unchanged, so consumers see no new lint results

**Dependabot** holds the same majors:

- `.github/dependabot.yml` ignores those majors, each with its lift condition: `typescript-eslint` support for TypeScript 7, or [R-2782](https://linear.app/rheged-studio/issue/R-2782) (ESLint 10 support)
