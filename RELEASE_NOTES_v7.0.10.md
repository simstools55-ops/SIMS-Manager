# SIMS Manager v7.0.11 UAT
- Legacy special-improvement history IDs linked through 特別改善Case対応 → Doctor_Cases are rejected by the ordinary effect-row synchronization path.
- The check is read-only and matches CaseID, not merely ArticleID.
- Does not modify H000033, H000055, or the existing 改善の推移 row.
- Historical repair remains pending; no production Apps Script regression test has been run.
