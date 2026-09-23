# SIMS Manager v6.7.22

## 変更点
- SERP参入余地チェックのYELLOW案件で、利用者が「aCreatorで記事作成へ進む」を選択しても、紹介状のSERP判定をYELLOWのまま保持します。
- 利用者判断は `serp_entry_assessment.user_decision = "GO"` として判定とは分離して記録します。
- GREEN/PINK/REDの判定ロジック、既存Workflow、高速化、未完了再開、Doctor再診関連は変更していません。
