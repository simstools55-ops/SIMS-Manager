# v7.1.5 UAT checklist

1. Simulate failed initial payload write, verify PREPARING reservation.
2. Look up the PREPARING case by article ID and confirm before abandoning.
3. Verify new intake is possible after abandonment.
4. Verify published article cannot be silently reprocessed; use finalization lookup.
5. Verify A000006 normal history H000030 stays ACTIVE.
6. Verify Full and Starter edition menu behavior in real Apps Script.
