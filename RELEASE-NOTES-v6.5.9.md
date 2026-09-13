# SIMS Manager v6.5.9

## 修正

- 改善ナビのクライアントJavaScriptに発生していた構文エラーを修正しました。
- v6.5.6で追加した改善ガイド表示HTMLの属性引用符が、Apps Script側の文字列生成後に二重引用符として残り、`<script>` 全体を構文エラーにしていました。
- このためダイアログ自体は表示されても、`sbmLoadImprovementNaviQueries` / `sbmLoadImprovementNaviSource` が起動しないことがありました。
- 改善ガイドの表示内容、aWriter依頼文生成、Search Console取得ロジック、本文取得ロジック、内部リンク候補判定は変更していません。

## 検証

- 改善ナビHTMLを代表データで実生成し、生成後の`<script>`をNode.jsで構文検査する回帰テストを追加。
- Full / Starter双方で同一修正を反映。
