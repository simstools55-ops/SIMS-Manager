# SIMS Manager v9.1.37 — Syntax recovery

- Fixed an unterminated JavaScript string in the HTML-building expression around Code.gs line 17369 introduced in v9.1.36.
- Corrected quoting and concatenation for the aWriter retry handler.
- No changes to registration semantics or article state.
- Checked full Code.gs syntax with Node.js `node --check`. Google Apps Script runtime remains unverified.
