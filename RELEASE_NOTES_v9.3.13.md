# SIMS Manager v9.3.13

## 修正
- 初回精密診断Case（OPEN / IN_PROGRESS / ON_HOLD）は `sbmDoctorSubmitInitialPrecisionDiagnosis` 経由で `REVIEW_READY` に保存。
- 承認済み・未引き継ぎ（APPROVED_ACTION_PENDING）のみ既存の再承認経路を使用。
- それ以外の状態では保存ボタンを無効化し、重複・上書きを防止。
- 診断保存後は利用者承認が別途必要。記事の公開・改善履歴・モニター状態は変更しない。

## 検査
- Code.gsおよびモーダル内JavaScriptの構文確認。ZIP整合性確認。
- Apps Script実機動作は未確認。

## 注意
- 既に公開済みの記事は再公開しない。診断承認・記事別返却JSONの登録は別途確認する。
