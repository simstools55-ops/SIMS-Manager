# SIMS Manager v6.6.90

## 日次処理 STEP2 Settings I/O 高速化

- `sbmStorePreviousRankCounts_()` の7回の個別設定書込を `sbmSetSettingsBatch_()` 1回へ集約。
- `sbmUpdateHomeArticleDbCounts_()` の10回の個別設定書込を `sbmSetSettingsBatch_()` 1回へ集約。
- 記事DB・ランク判定・今日の改善候補・作業状態などの判定仕様は変更なし。
- v6.6.89で解消したSTEP3ログI/O高速化を維持。

## 検証ポイント

日次処理後、処理プロファイルの `STEP2_DB_MERGE` と `STEP2_EXIT` をv6.6.89と比較する。基準はSTEP2_DB_MERGE約27秒、STEP2_EXIT約73秒。
