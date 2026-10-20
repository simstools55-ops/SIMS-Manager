# SBM9 Doctor回答判定（UAT）

- `SIMS_INFO_CHANGE_DOCTOR_RESPONSE_V1` のJSONを要求。
- request_id/article_id/article_urlの一致、findings構造、診断状態を検査。
- READYのみWriter依頼を生成。NEEDS_EVIDENCEはDOCTOR_NEEDS_EVIDENCE、NO_CHANGE_NEEDEDはNO_CHANGE_NEEDEDとして保存。
- 診断結果の事実性はこの検査では保証しない。
- 既存の通常改善、公開、モニター、履歴には書き込まない。
- 既存の自由文Doctor回答は新契約で受け付けない。実際のClaude診断は未実施。
- 既存の保存済み受付INFO-20261018234150-A000066は保持する。
