# SIMS Manager v6.2.6 Release Notes

## 修正

- セル保存上限を超えたWriter/Merge紹介状の短縮stubから、完全版を復元できない問題を修正しました。
- 共通再開UIは通常aDoctorとSite Doctorの両方を扱うため、復元処理で `SiteDiagnosisCaseID` を必須にしないよう修正しました。
- Site Doctor案件はSite Diagnosis文脈、通常aDoctor案件はArticle Doctor文脈から、記事本文・Evidence・保存済みDoctor結果を使って完全版を再構築します。
- 復元した完全版はGoogle Sheetsセルには再保存せず、現在のダイアログへだけ返します。これにより同じセル上限エラーを繰り返しません。
- UI表記を「全文を再生成」から「紹介状の全文を復元」（Mergeは「Package全文を復元」）へ変更しました。
- 復元ボタン押下時は「復元中…」を表示し、成功後は完全版を表示してから別操作でコピーできる二段階方式にしました。

## Version

- Full: v6.2.6
- Starter: v6.2.6-ST
