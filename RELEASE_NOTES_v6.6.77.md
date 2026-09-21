# SIMS Manager v6.6.77

## 目的
日次処理STEP2（直近約54秒）の実ボトルネックを特定するため、実行経路を詳細区間計測します。

## 追加した計測
- STEP2_DB_READY: 記事DB存在確認・初回構築判定
- STEP2_DB_MERGE: 記事DB差分反映
- STEP2_RECYCLE: 完了記事の再評価準備
- STEP2_SELECT: 今日の改善候補選定
- STEP2_TODAY_WRITE: 今日の改善シート反映
- STEP2_WORK_STATE: 記事管理の作業状態反映
- STEP2_SETTINGS: STEP2設定値保存

## 仕様
記事管理を状態管理の正本とする設計、候補判定条件、ランク判定、未完了判定は変更していません。今回は計測追加のみです。
