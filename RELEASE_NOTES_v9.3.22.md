# SIMS Manager v9.3.22

- Fix: When aMerge result is registered but its completed article is too large for a Sheets cell, restore the complete result from the case-linked Google Drive artifact at resume.
- Verify result contract, CaseID, completed article, and stored treatment result ID before showing publication/redirect completion.
- If the artifact is absent or inaccessible, stop safely. Do not register the same result again or infer publication.
- No automatic publication, 301 redirect, monitoring state, or history mutation.
- Static verification only; requires Apps Script live test.
