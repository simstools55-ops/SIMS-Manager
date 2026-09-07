# SIMS Manager v6.1.6

初回セットアップUIのボタン無反応を根本修正するRepository Baselineです。

## Root cause

v6.1.5のダイアログ生成コードでは、クライアントJavaScript内に埋め込むHTML断片の引用符が最終HTML生成時に失われ、`class="spinner"` 等がJavaScript文字列を途中で終了させていました。そのためscript全体が構文エラーとなり、STEP1〜STEP6のイベント登録が一切実行されませんでした。

## Fix

- spinner/fallbackリンクを`innerHTML`文字列ではなくDOM APIで生成。
- STEP1〜STEP6の生成後scriptを構文テスト。
- セットアップナビゲーター、修復後ナビゲーター、記事情報補完継続ダイアログも監査。
- Full / Starterで同じ修正を同期。
- appsscript.json / Spreadsheet schemaは変更なし。

## Cleanup

- 旧セットアップ入口は現行6 STEPウィザードへ委譲し、重複する旧ダイアログ処理経路を停止。
- 互換用の旧関数名は薄いラッパーとして残し、既存メニュー/呼び出しを壊さない。
- 未使用になった旧APIガイドHTML生成関数を削除。
