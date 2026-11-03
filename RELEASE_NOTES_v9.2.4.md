# SIMS Manager v9.2.4 — aMerge成果物のブログ別保存

- 新規aMerge成果物の保存先: `SIMS/<BlogName>/Merge/Results/<CaseID>/`。
- `sbmBackupDestinationFolder_()` によるブログ識別・保存先階層の照合を再利用。識別不一致時は誤保存を防ぐ。
- 旧 `SIMS-Artifacts/Merge-Results/<CaseID>/` に保存済みのファイルは移動・削除・複製しない。
- 既存案件の保存済みURL・ファイルIDは書き換えない。Google Drive上の元ファイルを維持する限り既存参照を保持。
- 同一案件を再登録した場合、新保存先へ新たな成果物が保存され、案件の参照先が更新される場合がある。
- aMerge結果JSONがセル上限を超える場合はDriveの結果JSON URLを保存する既存動作を維持。
- 保存失敗時は既存どおり警告と任意保存不可情報を記録し、処置登録は継続する。
- Knowledge、バックアップの保存先・データ内容・復元処理は変更しない。
- 静的検査のみ実施。実機試験は未実施。
