# SIMS Manager v9.1.32 — Clipboard Reliability Fix

- Fixed aWriter referral copy button in post-monitoring dialog: direct inline handler, temporary selectable textarea and verified `execCommand` return value.
- Added Clipboard API fallback and explicit manual-copy selection guidance when browser permissions block both methods.
- Synchronized all six Code.gs repository/distribution copies (v9.1.31 had mismatched copies).
- Preserved data columns, monitoring, aDoctor/aWriter registration and Starter/Full branching.
- Runtime clipboard permission and user-click verification still require Google Sheets UAT.
