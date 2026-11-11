# SIMS Manager v9.2.117 — Precision Diagnosis Resume Menu Hotfix

- Fix: `精密診断の未完了案件を再開` now invokes `sbmDoctorResumePrecisionDiagnosisFromMenu`, not `sbmStrategyOpenSavedCases`.
- Uses existing Doctor_Cases and workflow resume chooser; does not create a Case, change a state, or run strategy navigation when opening the menu.
- Select a case explicitly; preserves its existing CaseID and RequestID when the saved request is restored.
- The unrelated `精密診断案件を今日の改善へ反映` strategy-linked menu is not changed in this hotfix.
- Live Apps Script validation is still required; static syntax check alone does not prove persisted data behavior.
