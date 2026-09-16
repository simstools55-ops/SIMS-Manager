# Apps Script Manifest Policy — v6.1.27

SIMS Managerの実行単位は `Code.gs` 単体ではなく、`Code.gs + appsscript.json` のペアです。

## 正式なEdition別配置

- Full: `apps-script/full/Code.gs` + `apps-script/full/appsscript.json`
- Starter: `apps-script/starter/Code.gs` + `apps-script/starter/appsscript.json`

両Editionは同じOAuth scopeを使用します。Personal KnowledgeはGoogle Driveへ読み書きするため、次のscopeを必須とします。

`https://www.googleapis.com/auth/drive`

Code.gs更新時だけでなく、manifestも同時に同期・確認してください。manifest変更後はApps Script側で再承認が必要になる場合があります。
