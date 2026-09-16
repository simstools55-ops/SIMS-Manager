# SIMS Manager v6.6.12

## 変更内容
- 改善ナビのModal切り分け診断を終了し、v6.6.8〜v6.6.11で追加した一時診断メニュー／診断コードを削除。
- `ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)` で実行時の認証状態を確認する「外部通信権限を確認」を設定・メンテナンスへ追加。
- 再承認が必要な場合はGoogleが返す正式な承認URLを案内。承認済みの場合は `UrlFetchApp` の最小接続テストを実施。
- 改善ナビ本体、aWriter依頼文、改善判定ロジック、Starter/Full分岐は変更なし。

## 確認済みの切り分け
最小Modal、共通Modal、820×760、約120KB HTML、約120KB Script、実記事Payload、改善ナビ本体Modalはいずれも表示成功。現在の残課題は改善ナビ表示後のSearch Console最新クエリ／記事本文取得で発生する `script.external_request` 権限エラー。
