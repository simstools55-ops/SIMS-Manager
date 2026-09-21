# SIMS Manager v6.6.94

## 修正
- 未完了再開で `WRITER_REQUEST_READY` / `WRITER_IN_PROGRESS` のCaseに `Writer依頼JSON` が空、またはセル上限による要約保存しかない場合、保存済みDoctor結果・Case情報・記事情報からaWriter紹介状全文を再開ダイアログ内に復元するよう修正。
- 復元時にaDoctor再診、新Case発行、Workflowの巻き戻しは行わず、既存CaseIDを維持する。
- 完全版の再構築結果はセルへ再保存せず、Google Sheetsのセル上限を再度超えない設計を維持。

## 実運用確認
- A000103 / CASE-20260917-A000103-001 を「未完了の作業を再開」から開き、aWriter紹介状本文が表示されること。
- 紹介状コピー後、同じCaseのaWriter結果登録へ継続できること。
