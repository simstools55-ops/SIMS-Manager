# SIMS Manager v6.1.17

## Summary

経過観察終了後のaDoctor再診を「やり直し」ではなく「続きから再開」できるようにしました。

## Changes

- aDoctor再診依頼をCase単位でチェックポイント保存。
- 大きな依頼JSON／回答JSONは hidden `Doctor_Workflow_State` へチャンク保存し、Google Sheetsの1セル上限を回避。
- aDoctor回答登録時は、診断結果の本登録より先に回答JSONを保存。
- 登録エラー時は `REGISTRATION_ERROR` と最終エラーを保持。
- 「改善の推移」→「観察終了後の処置」を再実行した場合、保存済みCaseがあればSearch Console／Evidenceの再収集を行わず②回答登録から再開。
- 保存済み回答がある場合は回答欄へ自動復元し、そのまま再登録可能。
- v6.1.16以前の `DOCTOR_DIAGNOSIS_PENDING` Caseも、対象記事が一致する場合は旧Case救済として回答登録工程へ復元。
- Doctor_Casesへ改善履歴IDを依頼生成時点から保存し、再診元サイクルとの対応を明確化。
- Full / Starter双方に共通基盤として反映。Starterの内部リンク候補3件制限は維持。

## Operational rule

完了済み工程は原則として再実行しません。再生成は利用者が明示的に要求した場合のみ行う設計へ移行します。
