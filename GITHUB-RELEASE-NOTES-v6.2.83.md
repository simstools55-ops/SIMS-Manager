# SIMS Manager v6.2.83

## v6.2.83 — カニバリ精密診断依頼JSONの空欄表示を修正

- 長文化する追加診断Requestの表示方式を、Base64化＋ブラウザ側復号からtextareaへのサーバー側直接埋め込みへ変更。
- JSONはHTML escapeして安全に表示し、画面表示内容とコピー対象を一致。
- 保存済みaDoctor回答の復元も同じ直接埋め込み方式へ統一。
- Request生成、Doctor/Writer判定、未発芽判定、日次処理、Mergeロジックは変更なし。

