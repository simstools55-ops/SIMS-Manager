# SIMS Manager v6.6.17

- `sbmAuthorizeExternalAccess()` を追加。トップレベル関数から `UrlFetchApp.fetch()` を直接実行し、未承認時はGoogle標準のOAuth再承認を促せる構造に変更。
- 設定・メンテナンスに「外部通信権限を初期化」を追加。
- 既存の「外部通信権限を確認」は継続し、承認URLを取得できない場合の案内を直接初期化関数へ変更。
- manifestの `script.external_request` は変更なし。
