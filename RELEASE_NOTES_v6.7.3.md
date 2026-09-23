# SIMS Manager v6.7.3 Release Notes

## Purpose

aWriter改善結果の登録ボタン押下後に時間がかかる原因を、推測ではなく実測で特定するための計測版です。

## Changes

登録処理を次の区間に分けて計測します。

1. 旧観察履歴終了
2. 記事管理行確認・復元
3. 改善履歴登録
4. 改善の推移1行同期
5. Doctor Case保存
6. 精密診断候補からの削除
7. 利用者向けシート表示整形
8. aWriter follow-up判定
9. 未完了Workflow整理

登録成功時、ダイアログに総処理時間と各区間の秒数を表示します。同じ情報を `DoctorWriterRegisterProfile` としてログにも記録します。

## Scope

既存の登録・モニタリング・Personal Knowledge・follow-up判定ロジックは変更していません。計測結果を確認した後、最大のボトルネックだけを対象に最適化し、計測コードは撤去する方針です。
