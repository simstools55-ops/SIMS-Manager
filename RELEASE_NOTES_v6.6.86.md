# SIMS Manager v6.6.86 Release Notes

## STEP3 深掘り計測

日次処理STEP3の残存ボトルネックを特定するため、処理仕様を変更せず内部区間計測を追加しました。

### 改善の推移・判定計算
- `STEP3_EFFECT_COMPUTE_INDEX`: 改善履歴ID→行番号索引の構築
- `STEP3_EFFECT_COMPUTE_PREP`: 現役履歴抽出・最新履歴化・記事索引準備
- `STEP3_EFFECT_COMPUTE_LOOP`: 記事別の測定・判定・状態処理
- `STEP3_EFFECT_COMPUTE_SORT`: 表示行の並び替え

### 今日の改善整合
- `STEP3_TODAY_SETTINGS`: 保存候補読込
- `STEP3_TODAY_CANDIDATES`: 観察終了候補取得
- `STEP3_TODAY_MERGE`: 通常候補との統合
- `STEP3_TODAY_SETTINGS_WRITE`: 候補設定保存
- `STEP3_TODAY_SHEET_WRITE`: 今日の改善シート描画
- `STEP3_TODAY_WORKSTATE`: 状態反映

記事管理を状態管理の正本とする設計、改善判定、候補選定、Workflowの業務仕様は変更していません。
