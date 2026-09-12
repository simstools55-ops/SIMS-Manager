# SIMS Manager v6.3.7

## v6.3.7 — aCreator新記事の改善推移同期

- aCreator新記事を公開登録した直後、対象履歴1件だけ「改善の推移」へ即時同期。
- Full/Starterとも、ACTIVE/REVIEW_REQUIRED履歴に対して推移行が欠けている場合は「改善の推移」を開いた時に軽量自己修復。
- 全件効果再計算やDoctor全体整合は行わず、欠落行だけを補完。
- v6.3.6以前にCreator経路で記事ランク「—」のまま残った新記事は、GSC未観測なら「🆕 新規」へ補正。
