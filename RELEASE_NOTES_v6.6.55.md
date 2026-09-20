# SIMS Manager v6.6.55

## 目的
未完了Workflowを「再開のための一時データ」として扱い、処置完了後にモニターへ移管した時点で再開用データを残さない構造へ簡素化する。

## 変更
- aDoctor→aWriter処置が改善履歴へ登録されモニター開始した場合、Doctor_Cases / Doctor_Workflow_State の再開用データを削除する。
- 通常改善も改善登録完了時にNORMAL_IMPROVEMENTの再開用WorkflowStateを削除する。
- 改善履歴・改善の推移は削除せず、確定履歴・効果測定データとして保持する。
- aCreator新記事公開登録でモニター開始した場合も再開用データを削除する。
- 経過観察終了後の再診は旧Caseをlegacy救済で再利用しない。新規Caseを発行し explicit_new_cycle=true を保存する。
- EFFECT_AFTER_OBSERVATIONの再開例外は explicit_new_cycle=true の正式Caseだけに限定する。

## 期待結果
モニターへ移管済みの旧Doctor/Writer Caseが、未完了一覧や精密診断再開画面へ復活しない。A000043のような旧Caseの誤昇格を防止する。
