---
title: Support React Router folder routes and React Hooks recommended-latest
release_note: frameworkRouting now allows typed arrow exports in folder routes (route.tsx / route.ts), and base enables the full eslint-plugin-react-hooks recommended-latest set.
version:
created_at: "2026-10-24T10:16:39Z"
merged_at: "2026-10-24T13:49:51Z"
branch: r-2929-r-2930-routing-and-react-hooks
pr: 138
commit: bb99f3e
author: rob@rheged.studio
co_authors: []
category: feature
breaking: false
issues:
  - R-2929
  - R-2930
stats:
  loc_added: 220
  loc_removed: 15
  files_changed: 14
---

## Added

**React Hooks rules follow the plugin's `recommended-latest` ([R-2930](https://linear.app/rheged-studio/issue/R-2930))**

- New `reactHooks` preset in `base`, after canonical, spreading `eslint-plugin-react-hooks`'s own `recommended-latest` rules so plugin bumps flow through
- Turns on `void-use-memo`, `globals`, `config` and `gating` (error) and `incompatible-library` (warn), which canonical's older list was missing
- Keeps `exhaustive-deps` and `unsupported-syntax` at error, stricter than upstream's warn, with the rationale recorded inline
- Consumers may see new errors from the added React Compiler rules

## Fixed

**`frameworkRouting` covers React Router folder routes ([R-2929](https://linear.app/rheged-studio/issue/R-2929))**

- `reactRouterExceptions` now matches `**/route.tsx` and `**/route.ts`, so folder routes and resource routes accept typed arrow-function exports like `*.route.tsx` files already did
- JSDoc and README are now version-neutral ("React Router", not "React Router 7")
- Fixture tests cover folder, resource and flat routes, plus a negative case outside route modules
