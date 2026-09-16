# SIMS Manager v6.6.14

## 修正
- 「外部通信権限を確認」で発生した「形式が正しくない HTML コンテンツ」エラーを修正。
- 権限確認ダイアログの `<base target="_blank">` を除去し、標準的なHTMLヘッダーへ変更。
- Google承認URLは既存のHTMLエスケープ処理を通した `<a target="_blank">` で表示する。
- 改善ナビ本体、aWriter連携、Full/Starter分岐には変更なし。

## 確認
- Code.gs 5配置を同期。
- JavaScript構文チェック実施。
- 旧 `sbmHtmlEscape_` 参照なし。
- 権限確認HTML内の `<base target="_blank">` 参照なし。
