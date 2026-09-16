# SIMS Manager v6.2.0

Workflow resume/recovery architecture release.

## Main changes
- Unified unfinished-work resume dispatcher.
- Direct aDoctor and Site Doctor cases are routed by Case state.
- Resume mode opens directly at the saved treatment step instead of showing a new Doctor-result intake form.
- Consolidated maintenance entry: `データ整合性を点検・修復`.
- Integrity audit covers failed treatments, missing Writer/Merge request/result data, monitoring/history linkage, and Creator Direct duplicate/incomplete history.
- Destructive or semantic repairs are not guessed automatically; existing safe backup-based repair paths are reused.

Full: v6.2.0 / Starter: v6.2.0-ST
