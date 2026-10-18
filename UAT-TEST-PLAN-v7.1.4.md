# UAT v7.1.4
1. Confirm H000030 ACTIVE before/after all tests.
2. Inject failure in Doctor payload write: PREPARING must persist, no orphan payload; new intake blocked until cancellation.
3. Normal intake -> Doctor -> Writer -> PUBLISH_PENDING.
4. Close dialog, reopen and lookup by ArticleID; finalize only after manual publication confirmation.
5. Repeat completion: must return COMPLETED without duplicate record.
6. Wrong RequestID/CaseID/URL must fail closed.
7. Starter must not expose or run emergency workflow.
8. Check article management and GSC/normal improvement unchanged.
