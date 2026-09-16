# SIMS Manager v6.2.72

Merge完了時のArticleID安全照合をMergeの役割に合わせて修正しました。Case対象が吸収元である通常の統合でも、`absorbed_article_ids` との一致を確認して安全に完了できます。完了後の効果測定・モニター対象は統合先Primary記事です。
