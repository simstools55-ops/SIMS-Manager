# SIMS Manager v6.2.9

- Writer follow-upで3記事以上の統合が選択された場合、aMergeへ一括投入せず「統合先1記事 + 吸収記事1記事」のPairへ分解します。
- `SIMS_MULTI_MERGE_WORKFLOW_V1` をDoctor Case内へ保持し、Step 1/2 → Step 2/2 のように連続管理します。
- 各Stepの利用者処置完了後、次のaMerge Case/Packageを自動生成します。
- 最終Stepが完了するまで統合先記事をモニタリングへ移しません。
- v6.2.7/v6.2.8で既に生成済みの3記事Merge Caseも、結果受付前なら未完了再開時に2記事Pairへ安全にアップグレードします。
- aMergeの既存2記事契約・結果照合・利用者の301/noindex確認フローは維持します。
