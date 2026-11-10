# v9.2.114 UAT

- `tests/multiwriter-resume-v9.2.114.test.js`: 実関数 `sbmDoctorMultiWriterResumeSnapshot` の9件のローカル試験を追加。
- 中断・再開時の片方のみ登録済み、両方登録済み、重複・不一致などを検証。
- 既存の業務ロジック変更なし。実機未試験。
