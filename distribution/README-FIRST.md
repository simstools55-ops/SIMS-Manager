# SIMS Manager v6.2.37 Repository Baseline

## v6.2.37の位置付け

記事管理の「記事情報を更新」を、実運用で確認済みの軽量・安全な補完フローとして正本化した版です。

- Full v6.2.37 / Starter v6.2.37-ST
- 点検・補完対象は記事タイトルとメインクエリ
- 記事DB点検は全件走査を軽量化し、実運用200件で約1秒を確認
- メインクエリ未取得記事のみSearch Consoleの過去6か月データを照会
- 更新はArticleID＋正規化URL＋更新前値の三重照合
- 取得成功／書込成功／安全保留／取得不可を分離集計
- 日次処理へメインクエリ取得を戻さない
- SEOタイトル・メタディスクリプションの既存処理は変更しない

Repository root `Code.gs` がFull Editionの機能正本です。Starterは同一コードから `SBM_EDITION = 'STARTER'` のみを派生させています。
