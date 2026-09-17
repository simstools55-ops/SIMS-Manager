# SIMS Manager v6.6.37

## 修正
- aDoctor精密診断を途中から再開した際など、WRITER処置の診断結果に `allowed_scope` がない場合の処理を改善。
- 明示的なscope別名は互換吸収する。
- 治療範囲を確認できない場合はManagerが推測せず、同一CaseでaDoctorへ治療範囲だけを確認する追加依頼を生成する。
- 診断結果そのものは保持し、全面的な再診を要求しない。

## 安全性
- ArticleID / CaseIDの既存照合は維持。
- `allowed_scope` が確認できないままaWriterへ処置を渡すことはしない。
