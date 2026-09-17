# SIMS Manager v6.6.27 Release Notes

## 目的
改善の推移 `sbmOpenImprovementStatus` の残存表示時間（直近実測 9.454秒）を区間計測し、次の高速化対象を特定します。

## 変更
- `sbmOpenEffectiveness()` に `[EffectViewPerf]` 区間ログを追加。
- 計測区間: migrateName / sheetLookup / schema / repairOnce / style / showSheet / activate / TOTAL。
- v6.6.25の `[ArticleListPerf]` 一時診断ログを整理。
- v6.6.26の記事管理書式キャッシュ高速化は維持。
- 改善の推移の表示・判定・データ更新仕様は変更しません。
