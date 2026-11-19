# SIMS Manager v9.3.92 — 適用案内

`apps-script/Code.gs` と `apps-script/appsscript.json` を確認して適用してください。旧版からの更新ではマニフェストも更新し再認証してください。

利用者向け5タブのみ表示。内部シートは削除しません。明示的な保守画面は例外です。測定値の既存空欄は自動補完しません。実機試験待ち。

改善経路・履歴URLは非表示。測定値・スキーマは変更しません。

Three primary tables use compact widths and 9pt wrapped headers. Effect daily and repair widths are aligned. Strict timezone-bearing ISO history strings are converted to Date without changing their instant; formulas and unrecognized values are untouched. Existing new-row date normalization retained. Live UAT pending.

改善履歴の改善概要を10pt・上詰め・折り返し、判定欄を10ptに設定。表示内容・列幅が変化した場合のみ行高を自動調整。列幅・データ・マニフェストは維持。実機試験待ち。

FULL限定でカニバリ停止後に「利用者判断でSERPを精査する」を表示。サーバー側でライセンスを確認し、既存候補と続行記録を依頼文・再開データへ引き継ぐ。判定基準とマニフェストは変更なし。実機試験待ち。
