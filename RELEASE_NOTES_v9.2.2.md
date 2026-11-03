# SIMS Manager v9.2.2 — Backup identity guard (candidate)

- Adds BlogName, optional BlogUrl and Drive folder ancestry verification for bound backup destinations.
- Existing v9.2.1 bindings are upgraded only after successful structural verification; no backup file is moved or deleted.
- Stops on blog name / URL mismatch, ambiguous folders, moved/renamed folders, or inaccessible destination.
- Does not automatically migrate on blog renaming; manual procedure is required.
- Restore rollback failure test and scheduled daily backup test remain pending.
- Code.base.gs is legacy v9.1.32; **do not paste or distribute it as current Code.gs**.
