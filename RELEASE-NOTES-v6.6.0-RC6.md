# SIMS Manager v6.6.0-RC6

RC5の通信障害テストメニューが無反応だった問題を修正。

原因:
Google Sheetsのカスタムメニューから、末尾がアンダースコアの内部用関数を直接指定していた。
Apps Scriptでは末尾アンダースコア関数はprivate扱いとなるため、メニューから実行できない。

修正:
- 公開ラッパー sbmLicenseCommunicationTest を追加
- 公開ラッパー sbmLicenseCommunicationTestReset を追加
- メニューは公開ラッパーを呼び出す
- 認証ロジック・onOpen・業務機能には変更なし

期待結果:
「通信障害テスト（RC6）」を押すと必ず結果ダイアログが表示される。
