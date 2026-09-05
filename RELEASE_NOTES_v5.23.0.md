# SIMS Manager v5.23.0

Date: 2026-09-06

## New
- 1件単位のSERP参入余地チェック。
- 外部AIへ依頼する前に、Manager保有のSearch Consoleクエリ・記事情報でカニバリ候補を確認。
- カニバリ疑いがある場合は、関連クエリ・記事を表示してSERP処理を終了。
- 問題がなければClaude/Gemini等へ検索上位30件の実測精査依頼文を生成。
- AI回答は上位30件の取得完了を検証してから受理。
- `estimated_reachable_rank` をManager側で GREEN（10位以内）/ YELLOW（20位以内）/ PALE_PINK（30位以内）/ RED（31位以下）へ判定。
- PALE_PINK以上は必要に応じてaCreator紹介状を生成。

## Included cumulative fixes
- v5.22.4: aDoctor WAIT/MONITOR登録時の重い全体再計算を削減し処理中表示を追加。
- v5.22.5: aDoctor精密診断の再開経路とSite Doctor処置再開を分離。
- v5.22.6: aDoctor回答全文からRESULT JSONを堅牢に抽出。
- v5.22.7: 機械的に一意な軽微JSONキー引用符欠落のみ防御修復。
- v5.22.8: 精密診断途中再開からaWriter/aMerge回答登録まで連続化。
- v5.23.0: 利用者向け精密診断候補名を `aDoctor_精密診断候補` へ統一。
