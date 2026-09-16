# SIMS Manager v6.2.84

## v6.2.84 — aDoctor精密診断ダイアログ主要操作の独立化

- aDoctor依頼JSONのコピー処理を独立した安全ハンドラへ分離。
- Doctor結果登録処理を独立した安全ハンドラへ分離。
- 長文Request表示後に既存の大きなclient scriptで問題が起きても、主要2操作を継続可能にした。
- コピーは `execCommand` を先に試し、Clipboard APIをフォールバックとして使用。
- Doctor結果登録後はWriter / Merge / 追加診断の次工程を安全ハンドラ側でも表示可能。
- Code.gs先頭コメントを版整合チェック対象に追加。
- 診断ロジック、未発芽判定、日次処理、Mergeロジックは変更なし。

