# SIMS Manager v9.2.110 — UAT candidate

精密診断の通常メニューから開発用UAT項目3件を隠し、利用者導線を整理しました。既存の処理と保存データは変更していません。

## 開発者向け表示
Script Propertiesに `SBM_SHOW_MULTIWRITER_UAT_MENU` = `true` を設定し、Full版でスプレッドシートを再読込するとUAT項目が表示されます。未設定・false・読み取り失敗時は非表示。Starter版では表示されません。

## 検証範囲
静的検査・JavaScript構文検査のみ。実機画面遷移とライセンス環境での動作は未検証。
