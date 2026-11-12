# SIMS Manager v9.3.18 — 旧Case保守メニューの既定非表示

- Full版の「サイト健康診断」に残っていた旧Case保守メニュー3項目を通常時は非表示としました。
- `SBM_SHOW_LEGACY_PRECISION_MAINTENANCE_MENU=true` のときだけ表示します。Starterでは表示されません。
- 対応する関数本体、既存Case・改善履歴、精密診断の承認ゲート、UATメニュー制御は変更していません。
- `Code.gs`、README、PRODUCT_IDENTITY、CHANGELOGをv9.3.18に同期しました。
- 静的検査のみ実施。Google Apps Script実機のonOpen表示検証は未実施です。
