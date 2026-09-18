# SIMS Manager v6.6.46

## v6.6.46 変更点

- 日次処理メニュー実行時、Settings・サイト健康診断Run・当日実施状態をダイアログ表示前に読み込まないよう変更。
- 先に「日次処理」ダイアログを表示し、その後に実行条件を非同期確認する方式へ変更。
- 事前確認ではSettingsを1回だけ一括取得し、SetupBlogInfo / ConnectionStatus / LastSuccessfulDailyUpdateEpoch / DoctorActiveHealthCheckIdを同じMapから参照。
- 事前確認の Settings / 健康診断 / 合計時間をログ計測し、今後の遅延調査を可能化。
- 日次処理STEP1〜3本体の処理内容・判定ロジックは変更なし。

