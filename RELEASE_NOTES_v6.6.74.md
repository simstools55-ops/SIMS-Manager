# SIMS Manager v6.6.74 Release Notes

## STEP3高速化 第2弾 — 未完了整理

- v6.6.73実測で119秒だった `STEP3_未完了整理` を一括処理化。
- 対象記事ごとに Doctor_Cases / Doctor_Workflow_State を再読込し `deleteRow()` していた処理を廃止。
- EFFECT、Doctor_Cases、Doctor_Workflow_State は原則各1回だけ読み込み、ArticleID / 正規化URL / CaseID の索引でメモリ上照合。
- 削除対象を除いた行を一括書き戻しし、余剰領域を一括クリアする方式へ変更。
- `EFFECT_AFTER_OBSERVATION` かつ `explicit_new_cycle=true` のCase/Workflowを保持する既存ルールは維持。
- 経過観察終了案件を未完了掃除から除外する既存ルールも維持。
- 記事管理を状態管理の正本とする設計、未完了判定条件、候補選定条件は変更していない。
- 処理プロファイルに Case一括整理 / Workflow一括整理の内訳を追加。

## 実測基準

v6.6.73: STEP3未完了整理 119秒（対象50件）。v6.6.74では同一区間の短縮を確認する。
