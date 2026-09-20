# SIMS Manager v6.6.54

## 修正内容

未完了Workflowの判定経路を全体見直しし、再開対象の抽出を共通候補関数 `sbmDoctorResumeChooserItems_` へ一本化しました。

従来は「未完了の作業を再開」ではモニター移管済み旧Caseを除外できても、「aDoctor精密診断を途中から再開」や共通処置UIがDoctor_Casesを独自に走査していたため、A000042/A000043のような完了済み旧Caseが別画面から再出現する経路が残っていました。

v6.6.54では、精密診断再開・共通処置UIも同じ候補集合だけを使用します。改善の推移へ移管済みの旧Doctor/Writer Caseは全再開入口で除外し、正式な経過観察後再診、Merge、Creator等の現役Workflowは保持します。Doctor_Casesの履歴自体は削除しません。
