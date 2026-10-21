# SIMS Manager v9.0.12 — UAT candidate

- 通常改善ナビのaWriter登録経路に、登録後の改善の推移・改善履歴の軽量整列を追加。
- aDoctor→aWriter登録経路の共通軽量整列を維持。
- 改善履歴の選択列をソート後に非表示化し、実際の非表示状態を検査。
- ソート・非表示失敗時はSystem_Logに警告を記録。履歴の再登録は行わない。
- v9.0.11のアクティブ行優先選択を維持。
- JavaScript構文およびZIP構造検査済み。Google Apps Scriptでの実行・速度は未検証。
