# v9.0.0 Phase 12 — 状態遷移実装前の監査（UAT）

## 実装
- `sbmInfoChangeTransitionReadiness(payload)` を追加。公開完了ゲートと改善サイクル監査を再実行する読み取り専用API。
- 異常時は `ok:false,ready:false` で停止。正常でも `ready:false` を返し、**状態変更を許可しない**。
- 既存の通常改善・履歴・測定・記事管理への書き込み処理は追加していない。

## コード監査で判明した未解決事項
1. `sbmInfoChangeCheckExclusionContract_()` が `productionAggregationWired:false` を返す。除外判定が実集計へ完全接続されたことは確認できない。
2. `sbmInfoChangeCompletionGate()` は公開証跡の形式と申告を検証するが、公開先の実際の反映は証明しない。
3. `sbmInfoChangeCycleAudit()` は記事IDまたはURLで履歴を照合する。IDとURLが別記事を指す矛盾の安全性を実データで確認する必要がある。
4. 履歴・記事管理・集計キャッシュの複数箇所を更新する場合、Google Sheets上の部分成功・再試行・日次処理との競合を考慮した復旧仕様が必要。
5. Googleスプレッドシート実動作、既存改善率との回帰比較は未実施。

## 次に必要な試験
- 独立したUATスプレッドシートで、未着手/モニター中/再診待ち/完了の各状態を試す。
- 既存のHOME改善率・改善の推移・今日の改善・日次処理の同一データ比較。
- 履歴ID重複、URL不一致、再実行、処理中断、日次処理競合の異常系。
- 以上が通るまで、モニター終了と未着手復帰は実行しない。

## 静的検査
Code.gs 5コピー一致、JavaScript構文、ZIP整合性を検査。
