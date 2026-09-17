# SIMS Manager v6.6.34

## aDoctor精密診断ダイアログ高速化

- Personal Knowledgeのsite_id取得で、確定済みDocumentPropertiesを優先しDriveの再検証を通常経路から除外。
- カニバリEvidenceのSearch Console照会を最大15回の逐次APIから、query+pageの一括取得1回へ集約。
- 一括取得が25,000行上限に達した場合は診断精度を守るため従来のクエリ別照会へ自動フォールバック。
- DoctorLastRequestの3項目をSettingsバッチ更新へ統合。
- 診断Evidenceの内容・判定ルールは維持。性能ログは効果確認のため一時的に残す。
