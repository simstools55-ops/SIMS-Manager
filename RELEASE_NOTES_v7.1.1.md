# SIMS Manager v7.1.1 — UAT候補

基準: v6.8.5から再構築したv7.1.0。特別改善の独立完結方式を維持し、Doctor/Writer回答の識別子と記事ID/URLを照合。

## 制約
- 回答は request_id, case_id, article_id, article_url を含むJSONオブジェクトで提出すること。
- 実際のApps Script環境でのUAT、ライセンス移行、記事公開は未実施。
- 通常改善履歴・効果測定に特別改善の注記を自動反映しない（非干渉を優先）。
