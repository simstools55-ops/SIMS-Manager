# SIMS Manager v6.7.82

## 修正内容
- aDoctor診断結果が `WRITER` または `MERGE` への正式な引継ぎを指示している場合、診断時の安全ロックを処置ロックとして引き継がないよう修正しました。
- これによりaWriter紹介状の `workflow.locked` / `treatment_allowed` が引継ぎ状態と整合し、誤って `BLOCKED` になる問題を防止します。

## 影響範囲
- Doctor結果の正規化とWriter/Merge引継ぎ判定のみ。
- MONITOR、USER_CONFIRMATION、その他の本来ロックを維持すべき経路は従来どおりです。
