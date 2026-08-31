# SIMS Manager v5.21.2 - Product Edition operational test fix

- Optimize Daily STEP 3 by preloading Doctor_Cases once per run.
- Reuse improvement-history row indexes during weekly measurement recording.
- Remove per-measurement SpreadsheetApp.flush().
- When STEP 3 fails, the dialog retries STEP 3 only instead of restarting STEP 1.
- Synchronize development Code.gs copies under root, apps-script, and src/apps-script.
- Distribution artifacts are intentionally not regenerated during the operational test.
