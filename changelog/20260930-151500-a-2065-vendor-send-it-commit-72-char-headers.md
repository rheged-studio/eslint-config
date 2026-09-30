---
title: Vendor send-it 0.9.1 and commit 0.2.0 (72-char headers)
release_note: ""
created_at: "2026-09-30T15:15:00Z"
branch: a-2065-fan-out-72-char-commit-headers-eslint-config
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues:
  - A-2065
merged_at: "2026-09-30T16:16:20Z"
commit: 8a9ab42
pr: 129
stats:
  loc_added: 120
  loc_removed: 26
  files_changed: 14
---

## Changed

**Fan-out 72-character Conventional Commit header caps ([A-2065](https://linear.app/rheged-studio/issue/A-2065))**

- Re-vendor `send-it` 0.8.2 → 0.9.1 and `commit` 0.1.3 → 0.2.0 from `rheged-studio/agent-skills` on `.claude` and `.agents` mirrors
- Restore per-skill `config.json` after `skills add --copy` ([A-706](https://linear.app/rheged-studio/issue/A-706))
- Update `skills-lock.json` hashes for the two bundles
