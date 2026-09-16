# SIMS Manager v6.6.16

## 修正
- `ScriptApp.getAuthorizationInfo(AuthMode.FULL, [external_request])` を使用し、UrlFetchAppに必要なscopeを個別確認。
- REQUIRED時のみAuthorization URLを取得し、利用者へ再承認導線を表示。
- 承認済み時はUrlFetchAppの最小接続テストを実施。

## 変更なし
- 改善ナビの改善判定、aWriter依頼文、記事本文解析、Full/StarterランタイムEdition判定。
