# SIMS Manager v6.2.19

- Creator Direct new-article monitoring is explicitly excluded from aDoctor additional-observation classification.
- Existing stale `改善の推移` rows showing Creator Direct as `追加経過観察` are repaired when the view is opened, without rebuilding the whole trend sheet.
- Genuine `Doctor再診→経過観察` / WAIT-MONITOR cycles remain `追加経過観察`.
