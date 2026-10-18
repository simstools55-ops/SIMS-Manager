# v7.1.4 UAT candidate — emergency workflow safety

- Reserve a PREPARING case row before writing Doctor request payload, so a failed payload write cannot create an ownerless request.
- Treat PREPARING as active; it blocks duplicate intake until explicitly cancelled.
- Add read-only lookup of exactly one PUBLISH_PENDING case by ArticleID for finalization after a dialog closes.
- Make completed finalization retry idempotent and commit COMPLETED last.
- Preserve normal improvement state and history.

## Limitations
- Not tested in actual Apps Script runtime; no real publication verification (user confirms manually).
- Multi-sheet operations are not transactional; PREPARING cases require explicit cancellation after failures.
- Do not install into production until UAT passes.
