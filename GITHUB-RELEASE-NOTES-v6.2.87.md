# SIMS Manager v6.2.87

## v6.2.87 — 未完了再開処理を一括読込方式へ高速化

- `Doctor_Workflow_State` をCaseごとに繰り返し全件読込していたN+1処理を廃止し、1回の `getValues()` でMETA/Payload索引を構築。
- MONITORING CaseはWriterのfollow-up referralが実際に必要な場合だけ追加診断情報を参照。
- 通常改善Workflow探索も同じ一括索引を再利用し、WorkflowStateの再読込を廃止。
- 「未完了の作業を再開」では旧Merge referral移行や古いCaseの自動書換えを実行せず、候補抽出と表示だけに限定。
- 待機画面に実際の処理内容を表示し、45秒超過時は待ち続けないよう案内。
- 再開/整理ボタンは押下直後に処理中表示へ切替え、二重押下を防止。
- 日次処理、記事情報更新、未発芽判定、Doctor/Writer/Mergeの判断ロジックは変更なし。

