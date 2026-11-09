# v9.2.59 — 吸収元記事の処置別チェックリスト
- REDIRECT_CONFIRMED：301/308、転送先、ループ、内部リンク。
- NOINDEX_CONFIRMED：HTTP 200、noindex、robots.txt、canonical。
- REMOVED_CONFIRMED：404/410、内部リンク、代替ページ。
- RETAINED_WITH_REASON：維持理由、検索意図の役割分離、canonical。
- すべて読取専用の手動確認項目であり、外部サイトの自動検証・最終完了は行わない。
- 追加27アサーションを含む戦略回帰試験、構文・ZIP整合性検査を実施。
