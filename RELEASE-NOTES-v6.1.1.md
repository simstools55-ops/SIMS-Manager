# SIMS Manager v6.1.1

## Repository baseline update

- Full / Starter 共通のSpreadsheet正本を `spreadsheet/SIMS-Manager-Template-v6.1.1-Official.xlsx` に一本化。
- 旧 `Product5.0` / `Product5.4.3` のOfficial / Leanテンプレートを正本対象から除外。
- `distribution/` に残っていた旧Spreadsheetテンプレートも削除。配布物は必要時のみ生成する運用へ統一。
- Spreadsheet schemaは現行Code.gsの主要シート・ヘッダー定義（記事管理、今日の改善、改善の推移、改善履歴、Doctor/Platform内部シート等）に同期。
- Full / Starter は同一Spreadsheetを使用し、Edition差分はCode.gs側で管理。

Runtime feature behavior is unchanged from v6.1.0 except for version identification.
