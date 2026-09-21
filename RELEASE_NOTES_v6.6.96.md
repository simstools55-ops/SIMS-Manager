# SIMS Manager v6.6.96

- aWriter結果の `treatment_status` 完了表現を正規化し、`COMPLETE` / `DONE` / `SUCCESS` / `SUCCEEDED` / 例外付き完了表現を完了として扱います。
- 未知の `treatment_status` を「登録成功」と表示しながら `TREATMENT_FAILED` にする矛盾を修正しました。未知値は明示エラーにして、再登録可能な `WRITER_IN_PROGRESS` に戻します。
- 既存の `TREATMENT_FAILED` Caseも未完了再開からaWriter結果登録画面へ戻せるようにしました。
- 既存の完了済みWriter結果を自己修復するReconcile処理も同じステータス正規化を使用します。
- 高速化処理には変更ありません。
