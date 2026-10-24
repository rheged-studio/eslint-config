---
title: Re-vendor agent skills for mattpocock/skills v1.3.1
release_note: ""
version: 1.2.0
created_at: "2026-10-08T15:20:12Z"
merged_at: "2026-10-08T16:03:58Z"
branch: a-2308-re-vendor-skills-for-v131-eslint-config
pr: 130
commit: cbba4c5
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues:
  - R-2308
  - R-2299
stats:
  loc_added: 6487
  loc_removed: 1753
  files_changed: 121
  commits: 2
---

## Changed

**Roll shared skill bundles to current catalogue ([R-2308](https://linear.app/rheged-studio/issue/R-2308), [R-2299](https://linear.app/rheged-studio/issue/R-2299))**

- Re-vendor Rheged and Matt mirrors via `fleet-update.mjs` (catalogue defaults — `rheged-skills-setup` replaces legacy `initialise-skills` in the install set)
- Drop upstream `resolving-merge-conflicts`; add `implement-spec`, Matt `pr`, and `retro`; retain repo-specific extras (`find-skills`, `github-actions-docs`, `pnpm`, `shellcheck-configuration`, `vitest`)
- Align both `triage-pr` configs for unattended Phase B (`humanEnvelope: false`, `followUpLabel: follow-up`)
- Rename vendored `CONTEXT-FORMAT.md` → `GLOSSARY-FORMAT.md` in domain-modeling (mattpocock/skills 1.3.x)
