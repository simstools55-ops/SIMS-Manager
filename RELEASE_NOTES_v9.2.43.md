# v9.2.43 UAT — 戦略作業結果の固定化とaMerge契約チェック

- 検証済み作業結果の差し替えを拒否。再送された同一JSONは読み取り成功として返す。
- aMerge経由の戦略作業結果に `source_contract: SIMS_MERGE_TREATMENT_RESULT_V1` を必須化。
- 作業結果は `SIMS_STRATEGY_WORK_RESULT_V1` のまま。aMerge本来の戻り値からの変換処理は未実装。
- 公開済みの結果を別の記事へ変更する事故を予防。
- GAS実環境・aMerge本来の戻り値による結合試験は未実施。
