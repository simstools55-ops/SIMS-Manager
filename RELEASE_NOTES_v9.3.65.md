# SIMS Manager v9.3.65 — sidebar effect view navigation hotfix

- Sidebar 「改善の推移」 now navigates to the existing view without executing view-time sheet repair, row sorting, formatting, visibility resets or bulk clearing.
- Missing effect sheet falls back to the existing initializer; top menu and all other sidebar commands remain unchanged.
- Daily processing, Home, article management, Doctor workflow and state management are unchanged.
- Existing effect values are not recalculated on navigation; daily processing and registration remain authoritative for updates.
- Runtime performance must be measured in Apps Script; static verification alone cannot prove a particular time reduction.
