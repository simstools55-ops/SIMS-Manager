# SIMS Manager v6.2.42 Repository Baseline

## v6.2.42の位置付け

最後に正常動作を確認できた v6.2.37 の Code.gs を正本として再構築した版です。v6.2.38～v6.2.40の試験コードは継承していません。

- Full v6.2.42 / Starter v6.2.42-ST
- 「記事情報を更新」の点検は ArticleID・記事URL・記事タイトル・メインクエリの保存値だけを確認
- 点検段階ではWebアクセス・GSC API・H1/SEOタイトル解析・表示回数判定を実行しない
- 記事タイトルまたはメインクエリが空・未取得・推定状態の記事だけをArticleID＋URLで更新キューへ登録
- タイトル不足記事は対象URLからタイトルを取得
- クエリ不足記事は既存の過去6か月GSC取得関数を使用
- 書込前はv6.2.37のArticleID＋正規化URL＋更新前値照合を維持
- 書込後にArticleID＋URL＋保存値を再読込し、更新結果をダブルチェック
- 過去6か月でもクエリを取得できない記事は完了画面にArticleID・記事タイトル・URLを表示
- 日次処理は変更しない
- 1件だけ診断は現段階では互換維持

Repository root `Code.gs` がFull Editionの機能正本です。Starterは同一コードから `SBM_EDITION = 'STARTER'` のみを派生させています。
