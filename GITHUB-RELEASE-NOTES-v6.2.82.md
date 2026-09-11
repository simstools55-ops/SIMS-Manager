# SIMS Manager v6.2.82

## v6.2.82 — 既存Caseのカニバリ精密診断依頼をオンデマンド復元

- Writer結果に `follow_up_referrals: MERGE` がある既存Caseで `FOLLOW_UP_REQUEST` が未保存でも、追加診断依頼をその場で再生成。
- 保存済みWriter結果、Doctor_Cases、記事DBから元のArticle Doctor requestを再構築し、同一CaseIDを維持。
- 再生成したRequestはWorkflow payloadへ保存し、次回以降も再利用。
- 記事詳細とWriter結果登録直後の両方から同じ復元処理を利用。
- 復元失敗時は元ダイアログを維持し、具体的なエラーを表示。
- 日次処理、未発芽判定、14日ゲート、記事情報更新、Doctor/Writer処置判定、Merge判定ロジックは変更なし。

