# SIMS Manager v6.8.0

- aDoctor個別精密診断の再開時、RequestIDを `REQ-RESUME-<CaseID>` に設定する処理がEvidence Package側へ反映されない問題を修正。
- 再開依頼の `request.request_id` と `evidence_package.request_id` を一致させる。
- 新規診断の採番方式、CaseID、診断・処置の分岐は変更しない。
