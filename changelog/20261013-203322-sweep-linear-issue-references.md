---
title: Sweep Linear issue references to R and C keys
release_note: ""
version: 1.2.0
created_at: "2026-10-13T20:33:22Z"
merged_at: "2026-10-14T08:06:41Z"
branch: r-2722-eslint-config-sweep-issue-references
pr: 134
commit: e5b0a6e
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues:
  - R-2722
stats:
  files_changed: 50
  loc_added: 218
  loc_removed: 189
  commits: 2
---

## Changed

**Sweep Linear issue references to R and C keys ([R-2722](https://linear.app/rheged-studio/issue/R-2722))**

- Rewrite old `A-`, `SK-`, `ASW-`, `AKW-` and `WTF-` issue references through the committed Linear-migrate mapping after the A to R key flip: 49 files, 217 references, no flags and no unmapped IDs
- Update the Linear URLs in `rules/tsconfigEslintJson.ts` to the new `R-` identifiers
- Leave vendored skills, changelog file names and `branch:` lines verbatim
