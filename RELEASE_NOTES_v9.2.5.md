# SIMS Manager v9.2.5 — Doctor IMPROVE→Writer引き継ぎ修正

- Doctor V2で`workflow_handoff.next_action=IMPROVE`かつ`referral_target=WRITER`の場合、Writer紹介状生成へ進む。
- SINGLE_CASE_RESULT_V1互換経路にも同じ条件を適用。
- 引き継ぎ先が不明なIMPROVEは成功扱いで終了せず、エラーを返す。
- バックアップ、Knowledge、aMergeの保存先と既存データには変更なし。
- 静的監査のみ。Apps Script実機試験は未実施。
