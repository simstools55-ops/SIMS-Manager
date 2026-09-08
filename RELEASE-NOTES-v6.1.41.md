# SIMS Manager v6.1.41 Release Notes

## 修正内容

- 「aDoctor未完了の処置を再開」を通常aDoctor／Site Doctor共通の入口へ統一。
- 通常aDoctor案件の `WRITER_IN_PROGRESS` / `WRITER_REQUEST_READY` / Doctor待ち / Merge待ちを検出した場合、保存済みCaseIDの再開ダイアログを表示。
- 通常aDoctor案件がない場合のみ、Site Doctor経由の共通処置ダイアログへフォールバック。
- 旧メニューが `sbmDoctorResumeSiteDiagnosisTreatments()` を直接呼び、戻り値だけ返してダイアログを表示しなかった不具合を解消。
- 重複していた「aDoctor精密診断を途中から再開」メニューを廃止し、再開入口を一本化。

## バージョン

- Full: v6.1.41
- Starter: v6.1.41-ST
