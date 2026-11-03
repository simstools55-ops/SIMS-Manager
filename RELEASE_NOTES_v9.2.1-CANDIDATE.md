# SIMS Manager v9.2.1 — Drive folder candidate

- New backups are stored in My Drive / SIMS / <BlogName> / Manager / Backups.
- Folder IDs are bound to SiteID and spreadsheet ID in DocumentProperties (outside restore scope).
- Existing backup catalog and older backup locations remain unchanged.
- Ambiguous same-name folders and missing site identity fail closed.
- This is a candidate requiring live tests; do not deploy over v9.2.0 production until verified.
- Limitation: preexisting blog-name folders cannot be cryptographically attributed to a SiteID; inspect existing folders before first use.
- Auto rollback remains untested.
