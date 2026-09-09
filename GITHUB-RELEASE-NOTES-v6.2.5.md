# SIMS Manager v6.2.5 Release Notes

## 修正

- 「未完了の作業を再開」で最新のDoctor Caseを特定できていても、共通処置ダイアログがシート行順で古い未完了案件を先頭表示していた問題を修正しました。
- Dispatcherが選んだCaseIDを共通処置ダイアログへ引き継ぎ、該当Caseを必ず先頭に表示します。
- 2件目以降の未完了案件は消さず、更新日時の新しい順に並べて「前の紹介状 / 次の紹介状」で継続できます。
- 通常改善、診断前のaDoctor再開、MONITORING除外など既存のWorkflow再開仕様は変更していません。

## Version

- Full: v6.2.5
- Starter: v6.2.5-ST
