# SIMS Manager v6.5.5

## 改善ナビ：利用者向け改善ガイド
- 従来の P0 / P1 / P2 形式の「改善ポイント」を、利用者が自分で記事を修正できる「改善ガイド」へ刷新。
- 各ガイドは「なぜ」「どこを」「どうする」「完了の目安」を明示。
- Full Edition は既存の aWriter 依頼文を主導線として維持し、改善ガイドは必要時のみ開く補助表示。
- Starter Edition は aWriter 依頼文を持たないため、改善ガイドを最初から表示。
- aWriter依頼文生成関数 `sbmBuildImprovementPrompt_`、aWriter Contract v4.2、回答登録処理には変更なし。
