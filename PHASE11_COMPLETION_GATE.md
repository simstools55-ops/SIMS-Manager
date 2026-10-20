# Phase 11: 完了登録の安全ゲート（読み取り専用）

追加: `sbmInfoChangeCompletionGate(payload)`。引数は `requestId`, `articleId`, `publishedUrl`, `publishedAt`（タイムゾーン付き ISO8601）, `confirmedPublished: true`。

受付・Doctor・Writerの進捗、公開証跡の形式、記事管理正本、改善履歴の一意性とモニター状態を照合する。返却は `safeForAutomaticCommit: false` 固定。

**注意**: 公開証跡の形式検査は公開済みであることの独立した証明ではない。公開本文やWriter完成原稿の一致は未確認。ユーザーの試験環境では本番公開をしない。

状態変更の実装をブロックする項目:
- HOME以外の日次処理、再診、効果測定、履歴のすべての参照経路を監査
- 実際の改善履歴ヘッダーと列更新の整合性、同時実行、再試行・ロールバック設計
- 更新前後の集計結果を実データで照合
- 試験用Googleスプレッドシート上での結合試験

コード構文とZIPの整合性は検査済み。実動作試験は未実施。
