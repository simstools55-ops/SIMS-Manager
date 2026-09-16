# SIMS Manager v6.1.42

## 修正内容

通常aDoctor→aWriter経路で、Writerが許可範囲内の処置を完了しつつ、一部タスクが実行不能だった理由を `COMPLETED_WITH_REPORTED_EXCEPTION` として報告した場合、SIMS Managerが治療失敗として扱う問題を修正しました。

`COMPLETED_WITH_REPORTED_EXCEPTION` は、`referral_compliance` に違反がない場合に限り正常完了として扱い、改善履歴・記事管理・改善の推移をモニター状態へ移行します。例外理由はWriter結果JSONに保持されます。

Full: v6.1.42 / Starter: v6.1.42-ST
