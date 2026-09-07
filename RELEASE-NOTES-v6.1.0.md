# SIMS Manager v6.1.0 — Starter Edition Repository Baseline

## Purpose

This release makes the Starter Edition an actual repository-managed code artifact while keeping Full as the canonical implementation.

## Repository sources

- Full Edition: `/Code.gs`
- Starter Edition: `/editions/starter/Code.gs`

## Starter boundary

Starter retains existing-article management, daily improvement guidance, improvement-effect tracking, article management, site health diagnosis and aDoctor precision diagnosis. Full-only new-article, aWriter, aMerge, Creator Direct and advanced Site Doctor treatment routes are hidden from the Starter UI.

## Upgrade compatibility

Starter and Full use the same Spreadsheet schema. The intended upgrade path is to replace the Starter `Code.gs` with the Full root `Code.gs`.

No Distribution ZIP is included as a release deliverable.
