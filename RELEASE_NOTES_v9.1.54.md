# SIMS Manager v9.1.54 — UAT candidate

Fix: checkbox cells that were blank in the snapshot could become boolean FALSE when validation was reapplied. After writing validation, restore blank checkbox cells using clearContent(), while preserving validation and strict post-restore comparison. Shared restoration path also applies to rollback.

Scope: Code.gs restore only. No intentional daily backup or retention change.

Status: static checks complete; runtime restore and rollback require testing.
