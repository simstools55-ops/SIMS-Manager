# SIMS Manager v9.3.34

- サイドバー「選択候補の精密診断を実施」を、上部メニューと同じ `sbmDoctorOpenCandidateProgressDialog` に統一。
- サイドバーの直接診断呼び出しを廃止し、共通の処理中モーダルを先に開いてから診断を開始。
- 診断生成・保存の内部処理、既存の重複防止は変更しない。
- 静的検査のみ。Google Apps Script上での表示速度・動作は未検証。
