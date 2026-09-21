# SIMS Manager v6.6.91

## STEP2 読込I/O解析・共有化
- STEP2開始時にSettingsを1回だけ読み込み、初回構築判定・継続判定で共有。
- `__Daily_Update_Work` 読込を「シート参照/行数取得」と「getValues」に分けて計測。
- `STEP2_WORK_META` / `STEP2_WORK_VALUES` / `STEP2_SETTINGS_READ` を処理プロファイルへ追加。
- 記事DB、記事ランク、今日の改善候補、作業状態等の判定仕様は変更なし。

次回の日次処理では、従来の累積値 `STEP2_WORK_READ` だけでなく上記3区間の実時間を確認する。
