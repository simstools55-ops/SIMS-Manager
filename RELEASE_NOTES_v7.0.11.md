# v7.0.11 UAT — Special history exclusion hardening

- Prevent legacy special Case histories from entering the bulk/daily effect-row upsert path.
- Exclude explicitly tagged special histories from ordinary monitoring-cycle selection, active-row repair, and Home cumulative improvement metrics.
- Exclude special histories from Doctor active monitoring cutoff calculation.
- Preserve H000033 measured history and H000055 special Case link; no data migration is executed on install.
- Verification: static syntax and mirrored Code.gs consistency only. Apps Script runtime/daily-run verification pending.
