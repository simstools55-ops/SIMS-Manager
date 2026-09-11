# SIMS Manager v6.2.90

## v6.2.90 — 生成HTML / ブラウザJavaScript監査

- 未完了作業再開まわりの生成HTMLとブラウザ側JavaScriptをまとめて監査。
- 通常aDoctor精密診断ダイアログのWriter follow-up UIに残っていた単一 `\n` 5か所を二重escapeへ修正。
- `未完了一覧 / 待機画面 / 個別再開 / aDoctor精密診断` の主要生成scriptを対象に、危険な単一制御文字escapeをZIP作成前に検出する `tests/check_dialog_script_escaping.py` を追加。
- 既存の `node --check`、版整合チェック、Full/Starter一致確認とあわせて実行。
- 診断ロジック、未発芽判定、日次処理、記事情報更新、Merge判断ロジックは変更なし。

