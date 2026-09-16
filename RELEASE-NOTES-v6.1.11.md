# SIMS Manager v6.1.11

## Changes

- Deduplicate improvement advice when P1/P2 point to substantially the same query intent or heading. The next-best distinct query is selected instead.
- Starter completion now writes the active monitoring row through a dedicated verified upsert path instead of reusing the broader Writer/Doctor synchronization path.
- Opening `改善の推移` in Starter repairs missing rows for the latest active monitoring histories without running a full effectiveness rebuild.

## Scope

- Spreadsheet schema: unchanged
- appsscript.json: unchanged
- Full / Starter share the same schema; Edition behavior remains controlled in Code.gs.
