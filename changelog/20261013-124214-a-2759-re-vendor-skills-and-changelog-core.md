---
title: Re-vendor agent skills for v1.13.0 and bump changelog-core to 1.2.0
release_note: ""
version:
created_at: "2026-10-13T12:42:14Z"
merged_at:
branch: a-2759-eslint-config-re-vendor-the-multi-team-skills-and-changelog
pr:
commit:
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues:
  - A-2759
  - A-2721
  - A-2684
stats:
  loc_added:
  loc_removed:
  files_changed:
---

## Changed

**Roll the multi-team Linear skills and changelog-core onto this repo ([A-2759](https://linear.app/rheged-studio/issue/A-2759), [A-2721](https://linear.app/rheged-studio/issue/A-2721))**

- Re-vendor the Rheged skills from agent-skills v1.13.0 into `.claude/skills` and `.agents/skills` (`linear-sync` now resolves workflow states per issue team)
- Set `issueKeys` to `["R", "A"]` in the `changelog`, `cleanup-repo`, `linear-sync` and `triage-pr` configs
- Bump the `@rheged-studio/changelog-core` devDependency from `^1.1.1` to `^1.2.0`
