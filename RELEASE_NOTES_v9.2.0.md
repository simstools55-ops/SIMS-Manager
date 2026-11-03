# SIMS Manager v9.2.0 — Backup/Restore Management (Release Candidate)

## Changes
- Rename menu from 「バックアップ一覧・復元（試験用）」 to 「バックアップ一覧・復元」.
- Update main runtime version, release metadata and documentation.
- No changes to backup/restore business logic.

## Real-environment evidence (2026-11-03)
- Daily backup and 3-generation retention: passed.
- Restore preflight and 11-sheet restore: passed.
- Home A1:I1 merge/title after restore: passed.
- Automatic rollback on failure: **not tested**.

## Release gate
This archive is a release candidate pending deployment verification. Retain emergency backups and safety copies until approved.
