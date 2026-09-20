# SIMS Manager v6.6.53

## 修正内容

「未完了の作業を再開」のDoctor/Writer抽出条件を修正しました。

改善登録が完了し「改善の推移」へ移管された記事は、残存する旧aDoctor/aWriter CaseがDoctor_Cases上で未完了状態でも、未完了一覧には表示しません。従来のCase作成日時比較は補助互換として残し、主判定は改善の推移への移管有無とします。

ただし、経過観察終了後に「改善の推移」から正式に開始した `EFFECT_AFTER_OBSERVATION` 再診Workflowは新しい処置サイクルとして保持します。Merge / Creator系は対象外です。
