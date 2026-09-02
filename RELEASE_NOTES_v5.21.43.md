# SIMS Manager v5.21.43-dev

## Purpose
日次処理STEP2の性能回帰を修正。v5.21.41/v5.21.42で導入した設定一括更新・メモリ再利用等の性能変更を撤回し、実運用で安定していたv5.21.40のSTEP2ロジックへ戻す。

## Changes
- v5.21.41/v5.21.42で追加した `sbmSetSettingsBatch_()` の日次経路への横断適用を撤回。
- `sbmSelectTodayRecommendations_(mergeResult.objects)` を撤回し、v5.21.40の通常経路へ復帰。
- 記事DBマージ・Home集計・前回ランク保存をv5.21.40の実測安定実装へ復帰。
- v5.21.40で実施済みの「日次STEP2から外部タイトル/H1/メインクエリ補完を分離」は維持。
- バージョン表記を5.21.43へ統一。

## Operational evidence
- v5.21.40相当: 2026-09-03 04:07のSTEP2は完了。
- v5.21.41/v5.21.42系: DBマージが260秒まで悪化し、360秒上限でタイムアウト。

## Test focus
Apps Script実行履歴と処理ログで `日次処理 STEP2 分析・記事DB更新` の所要時間、特に `DBマージ` を確認する。目安は過去の安定時20〜30秒台。
