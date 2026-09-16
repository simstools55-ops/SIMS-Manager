# SIMS Manager v6.5.23 License Test

- License Center接続テストのGoogleアカウント取得をSession API依存から切り離し。
- 初回認証時のみ、License Center発行時に登録したメールアドレスとLicense Keyを入力。
- 認証成功後は登録メール、License ID、Edition、Installation ID等をDocument Propertiesへ保持。
- 再確認時はLicense Keyの再入力不要。
- License Center側のmax_installationsとSpreadsheet ID/Installation ID紐付けを使用。
- 本版では認証失敗時も改善ナビ等の既存Manager機能を停止しない（接続試験専用）。
- Full / Starter双方へ同一License Testモジュールを反映。
