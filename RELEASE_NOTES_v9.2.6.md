# SIMS Manager v9.2.6 — SERP entry opportunity 4-color classification

- Four tiers: LIGHT_BLUE (1–10), GREEN (11–20), YELLOW (21–30), RED (31+).
- Manager's rank-based classification is authoritative; Claude request accepts new tier names.
- LIGHT_BLUE and GREEN may proceed to aCreator; YELLOW requires explicit GO; RED is blocked.
- Restore old checkpoints by rank, or legacy grade mapping when rank is absent.
- Existing Doctor/Writer and daily improvement paths are unchanged.
- UAT: static checks only; live Apps Script UI remains to be tested.
