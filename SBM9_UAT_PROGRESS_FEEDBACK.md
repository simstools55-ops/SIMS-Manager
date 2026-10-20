# v9.0.0 UAT — Progress feedback patch

- Opening menu shows a spreadsheet toast while the license and article context are read. Google Sheets may delay toast rendering while a synchronous server call is busy.
- Dialog displays an animated spinner and operation-specific message during server calls; prevents duplicate button presses.
- Existing workflow, diagnosis state and stored data are unchanged.
- UAT test: open A000066 and confirm toast/dialog; click Doctor request and verify spinner and recovery; do not re-register diagnosis.
- This is not a fix for Google Drive latency.

Commit: fix(manager): add progress feedback and prevent duplicate info-change actions
