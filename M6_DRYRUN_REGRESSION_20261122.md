# M6 Registration Dry-run regression — 2026-11-22

Baseline: SBM v9.3.105 M6 Registration DryRun UAT Candidate.

Change: if `Strategy_Cases` is missing, include it in `unverified_sources` and set `existing_case_evidence_complete=false`, matching the fail-closed handling of missing `Doctor_Cases`. This is a conservative UAT behavior; sites without a Strategy_Cases sheet will remain held until the intended storage contract is finalized. No production activation, registration, publishing, or aDoctor case creation.

Checks: 12/12 dry-run mocked-spreadsheet checks passed; 5/5 existing state-gate checks passed; canonical Code.gs JavaScript syntax passed (copied to .js for Node syntax check). GAS real-environment verification pending.

GitHub commit: `fix(sbm): fail closed on missing strategy case store and add M6 dry-run regression tests`
