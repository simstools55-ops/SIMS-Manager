# SIMS Manager v6.1.36

## 修正

「改善の推移」を開くだけではv6.1.35の日付修復が実行されない問題を修正しました。

- `sbmEffectDateRepairNeededV6136_()` を追加し、改善履歴のSheetsシリアル値、異常年、改善の推移の異常日付、`#NUM!` を検出します。
- `sbmRepairHistoryDateValuesV6136_()` は一度限りフラグを使用せず、必要な行だけ安全に日付へ戻す冪等処理です。
- 異常を検出した場合のみ `sbmUpdateEffectivenessCore_(..., {dailyFast:true, viewOnly:true})` で表示を再生成します。
- 正常時は再生成しないため、改善の推移の通常表示速度は維持します。

対象例: A000046 の `46265/12/31`, `#NUM!`, `46266/01/07`。正本の改善日は2026/9/1です。
