# SIMS Manager v9.3.12

- Fix aDoctor precision diagnosis request template: provide `actions` for both target articles when selecting `ROLE_SEPARATION`.
- Explicitly require each action to include `article_id`, `article_url`, `tool: WRITER`, and `instructions`.
- No automatic case, article, monitoring, or approval mutations.
- Static checks only; Apps Script execution remains to be tested.
