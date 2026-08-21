---
title: Float shared-workflows SHA pins to @v1
release_note: ""
created_at: "2026-08-07T14:26:51Z"
merged_at: "2026-08-11T13:04:33Z"
branch: a-1356-eslint-config-float-shared-workflows-sha-pins-to-v1
pr: 111
commit: 18670d5
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-1356
stats:
  files_changed: 3
  loc_added: 29
  loc_removed: 2
  commits: 2
version: 1.1.4
---

## Changed

- `validate-payload.yml` calls `reusable-validate-payload.yml@v1` instead of a
  pinned commit SHA ([A-1356](https://linear.app/rheged-studio/issue/A-1356)).
- `pkg-release.yml` `changelog-enrich` calls `reusable-changelog-enrich.yml@v1`
  instead of a pinned commit SHA.
