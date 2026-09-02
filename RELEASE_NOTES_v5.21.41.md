# SIMS Manager v5.21.41-dev

## 目的
日次処理STEP2が429記事で約4分43秒かかっていたため、外部補完分離後も残っていた不要なGoogle Sheets I/Oを削減します。

## 変更
- 記事DBの日次更新で `clearContent()` を行わず、一括 `setValues()` のみで既存値を更新。
- 日次処理から記事DB全行の背景色再描画を除外。
- 新規行だけチェックボックスと数値書式を追加。
- マージ済み記事オブジェクトを「今日の改善」候補選定へ直接渡し、記事DBの再読込を省略。
- 前回ランク件数、Home集計、日次集計のSettings書込を `sbmSetSettingsBatch_()` に集約。
- 日次分析中のSettings参照を一括マップ化。

## 互換性
手動メンテナンスや初期構築の完全再構築経路は従来どおり維持します。日次処理だけを軽量化します。

## バージョン管理
`SBM_VERSION`、ルートVERSION、PRODUCT_IDENTITY、README-FIRST、CHANGELOG、リリースノート、Code.gs全5コピーを5.21.41に同期しています。
