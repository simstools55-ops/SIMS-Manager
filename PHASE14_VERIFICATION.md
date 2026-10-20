# Phase 14 — 集計除外の独立検証と未接続箇所の監査

## 検証結果
- `sbmInfoChangeInterruptionCode_` / `sbmInfoChangeHistoryIsInterrupted_` / `sbmInfoChangePartitionCycles_` / `sbmInfoChangeCheckExclusionContract_` を元の Code.gs から抽出し、Node.js の独立テストで検証。
- 通常1件、途中終了2件（異なる状態列・大文字小文字の差）を正しく分離。
- 履歴IDの重複・欠損、不正な行・引数を拒否。
- 入力配列を変更しないことを確認。
- `productionAggregationWired:false` は依然として返る。**本番相当の集計経路への完全接続は未証明。**

## 重大な残課題
1. HOME改善率・日次処理・再診判定の全経路で、途中終了レコードを除外することを実データで検証する。
2. 終了操作の履歴保存・原子的な更新・障害時の再開を実装する。
3. 新規記事更新の状態と旧改善サイクルの関係をUATで検証する。
4. 実際のGoogle Apps Script環境で、メニュー、Doctor/Writer、改善率、日次処理を結合試験する。

**状態変更は引き続き無効。** Phase 14は監査・テスト追加であり、公開完了処理は実装していない。
