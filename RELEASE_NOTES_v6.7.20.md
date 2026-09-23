# SIMS Manager v6.7.20

## 後始末監査
- v6.7.19で正常化した「未完了の作業を再開」経路を静的監査。
- `sbmResumeUnfinishedWorkflowCore()` 公開bridgeは現在どこからも参照されていないため削除。
- `sbmResumeUnfinishedWorkflowCore_()` 本体、単一候補の選択画面、再診Case正本化、旧V2契約互換、セル上限時の再診依頼復元は実運用互換に必要なため維持。
- 待機ダイアログは既に存在せず、右下toastのみ維持。
- Workflow/Case判定、aWriter登録、モニター開始ロジックには変更なし。
