# SIMS Manager Edition Policy v6.6.0

v6.6.0以降、Full / StarterでCode.gsを差し替えない。

- 実行コードは1本。
- Editionの正本はSIMS License Center。
- `sbmEffectiveEdition_()` が保存済みライセンスEditionを返す。
- 未認証時のみ旧定数 `SBM_EDITION` をbootstrap fallbackとして使用する。
- Full→Starter / Starter→Full はLicense Center変更→Manager再確認→再読み込みで反映。
- `apps-script/full/Code.gs` と `apps-script/starter/Code.gs` は互換配置のため残すが、中身は共通Code.gsと同一。
- 今後の改修は共通Code.gsのみを正本として行い、リリース生成時に互換配置へ同期する。
