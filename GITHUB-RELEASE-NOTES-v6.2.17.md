# SIMS Manager v6.2.17

## UI consistency audit
- Clarifies referral navigation counters as unfinished-work position (`未完了 x / y`) rather than Merge target counts.
- Renames the ambiguous `処置せず終了` action to `この処置を行わず終了` and explains its non-destructive effect before confirmation.
- Adds explicit `コピーしました ✓` feedback to shared referral/Package copy and direct aDoctor resume copy actions.
- Uses route-specific restore wording for aWriter referral vs aMerge Package.
- Removes the hard-coded `aDoctor→aMerge` explanation from Merge completion and describes intermediate/final Multi-Merge behavior accurately.
- Aligns Creator publication UI naming to `aCreator` and distinguishes `検索露出待ち` from monitoring lifecycle wording.
- Aligns Creator Direct review cadence to the platform standard 28-day cycle.
- Unifies direct aDoctor resume button geometry with the common dialog style.

## Compatibility
- No workflow contract changes.
- Full and Starter remain on the same canonical v6.2.17 code line.
