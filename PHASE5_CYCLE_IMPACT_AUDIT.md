# v9.0.0 Phase 5: 改善サイクルと改善率の横断監査

## 実装済み
- `sbmInfoChangeCycleAudit`: 選択記事・依頼ID照合、改善履歴の紐付け、ACTIVE/REVIEW_REQUIREDの列挙、履歴ID欠損・重複・状態不一致を検出。
- **読み取り専用**。旧モニター終了、記事状態変更、改善率再計算は未実装。 `safeToAutoClose` は常に false。

## コード調査で判明した注意点
1. `sbmMonitoringLifecycleFromHistory_` が認識する状態は `ACTIVE`, `REVIEW_REQUIRED`, `SUPERSEDED`, `COMPLETED` の4種類。途中終了状態を新設する場合は、全参照箇所の更新が必要。
2. `sbmUpdateEffectivenessCore_` は `ACTIVE` と `REVIEW_REQUIRED` を対象に測定を更新。終了後は対象から外す必要がある。
3. `sbmHomeTreatmentHistoryStats_` は記事単位で履歴を統合し、`COMPLETED`・`REVIEW_REQUIRED`・`SUPERSEDED` などから分母・分子を算定。途中終了サイクルを除外するには、**サイクル単位の単純な行除外では不十分**。既に確定済みの別サイクルを持つ記事を保護する必要がある。
4. 累計改善実績は別集計。途中終了による過去の改善実績の削除は禁止。
5. `REVIEW_REQUIRED` は診断待ち状態でもあり、現役 `ACTIVE` と同一視して一律終了させると再診処置に影響する。

## 次の実装ゲート
- 公開の事実と公開日時の証跡、Writer完成原稿の確認を必須にする。
- 対象の改善履歴IDを一意に特定し、履歴バックアップ・途中終了記録・作業状態の遷移を整合的に行う。
- Home改善率・改善の推移・今日の改善・日次処理・履歴正規化の全経路に途中終了を反映する。
- 正常系・重複履歴・再診待ち・履歴なし・過去に完了サイクルあり、の試験を行う。

現時点では実スプレッドシートでの動作確認なし。既存環境への適用禁止。
