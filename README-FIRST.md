# SIMS Manager v6.2.6 Repository Baseline

## v6.2.6の位置付け

v6.2.5の未完了Workflow再開順序を維持しつつ、セル保存上限を超えたWriter/Merge紹介状の復元を通常aDoctor / Site Doctor共通で修正したパッチ版です。

- 通常aDoctor案件でも、短縮stubから紹介状全文を復元可能
- Site Doctor案件は従来どおりSite Diagnosis識別情報を保持して復元
- 完全版はセルへ再保存せず、復元時のダイアログへ直接返す
- 「全文を再生成」を「紹介状の全文を復元」へ明確化
- 復元とコピーを二段階に分離し、復元完了を画面で確認可能
- Full v6.2.6 / Starter v6.2.6-ST
