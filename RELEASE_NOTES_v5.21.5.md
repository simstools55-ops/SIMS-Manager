# SIMS Manager v5.21.5 - Home snapshot cache

- Add Home snapshot stored in DocumentProperties.
- Daily STEP 3 rebuilds the Home snapshot once after effectiveness update.
- Opening Home uses the saved snapshot and does not reread Article DB, Effect, or Improvement History.
- Data-changing calls using normal sbmRefreshHome_() rebuild the snapshot.
- Home version synchronization remains independent and lightweight.
- Distribution artifacts are intentionally not regenerated during operational testing.
