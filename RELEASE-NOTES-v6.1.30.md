# SIMS Manager v6.1.30

## Fix

- Doctor V2結果のルーティング優先順位を修正。
- `workflow_handoff.next_action` の WRITER / MERGE / MONITOR / USER_CONFIRMATION を LOW_SAMPLE SERP 判定より優先。
- `treatment_plan.strategy=LIGHT_FIX` 等の具体的治療指示や `allowed_scope` がある場合、`LOW_PRIORITY_SERP_STRUCTURE` だけで正常終了しない。
- `LOW_PRIORITY_SERP_STRUCTURE` は具体的処置がない場合のみ正常終了判定に利用。
- A000107型の「LOW_PRIORITY_SERP_STRUCTURE + LIGHT_FIX + WRITER」を正しくaWriter紹介へ送る。

## Edition versions

- Full: v6.1.30
- Starter: v6.1.30-ST
