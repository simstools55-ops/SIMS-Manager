# SIMS Manager v6.6.35

## aDoctor精密診断ダイアログ高速化（Settings読込集約）

- `sbmDoctorBuildSingleCaseRequest_` 内で必要なSettingsを1回のスナップショット読込へ集約。
- SiteID / SiteName / BlogName / BlogUrl / SearchConsoleProperty / SearchDaysの個別 `sbmGetSetting_` 呼出しを廃止。
- Personal Knowledgeのsite_id初回解決にも同じ設定スナップショットを渡し、設定シートの重複走査を防止。
- v6.6.34で導入したカニバリEvidenceのGSC一括取得は維持。
- 診断内容・Evidence・判定ルールは変更しない。性能ログは実測確認のため一時的に残す。
