# SIMS Manager v6.0.0

## Purpose

v6.0.0 is the product baseline for the Starter / Full Edition architecture. It is a repository baseline, not a distribution release.

## Canonical source policy

- `Code.gs` at the repository root is the Full Edition functional canonical source.
- Common fixes and feature changes are implemented in Full first.
- Starter is derived from the Full canonical source and must not evolve independently.
- Both Editions use the same version number.
- Spreadsheet schema/data compatibility is preserved so Starter users can move to Full without rebuilding their data.

## UI baseline

The purpose-based menu structure finalized in v5.24.1 is carried forward as the v6 standard UI baseline.

## Distribution

No user distribution package is produced by this baseline release. Distribution artifacts are generated only when explicitly required.
