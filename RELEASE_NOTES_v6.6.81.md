# SIMS Manager v6.6.81 Release Notes

## Purpose
Diagnose the 435 x 3 daily date-field updates in STEP2 before changing update semantics.

## Changes
- Adds diagnostic counters to STEP2_DB_MERGE for matched articles, metric changes, search-metric presence, and whether each of the three date fields actually differs.
- Keeps Article DB as the authoritative state store.
- Does not change ranking, candidate selection, missing-data handling, or date-field update behavior.
- Retains all v6.6.80 I/O optimizations and profiling.
