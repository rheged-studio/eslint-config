---
title: Sweep @acme-skunkworks identifiers to @rheged-studio (A-1414)
release_note: ""
created_at: "2026-08-21T10:43:16Z"
merged_at: "2026-08-21T12:01:19Z"
branch: a-1414-sweep-rheged-studio-identifiers
pr: 119
commit: "2698355"
author: rob.studio
co_authors: []
category: chore
breaking: false
issues:
  - A-1414
stats:
  files_changed: 48
  loc_added: 3288
  loc_removed: 5554
  commits:
---

## Changed

**Sweep remaining @acme-skunkworks identifiers to @rheged-studio ([A-1414](https://linear.app/rheged-studio/issue/A-1414))**

- Migrate npm dependency keys, config extends, skill package names, and docs to `@rheged-studio/*`
- Refresh lockfile to resolve published bootstrap packages on npm
- Second-pass brand prose sweep where A-1220 missed
