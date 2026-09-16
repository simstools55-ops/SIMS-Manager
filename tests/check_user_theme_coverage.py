from pathlib import Path
import re,sys
code=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
raw=code.count("SpreadsheetApp.getUi().showModalDialog(")
checks={
 "only_wrapper_has_raw_modal": raw==1,
 "global_wrapper":"function sbmShowThemedModalDialog_" in code,
 "global_mono_css":"data-sbm-global-mono" in code,
 "health_report_theme":"function sbmDoctorApplyHealthReportTheme_" in code and "sbmDoctorApplyHealthReportTheme_(report,healthScore)" in code,
 "candidate_theme":"function sbmDoctorApplyCandidateTheme_" in code and "sbmDoctorApplyCandidateTheme_(cand)" in code,
 "article_update_normal_hold":"通常ランクを維持" in code,
 "article_update_true_ungerminated":"未発芽のまま" in code,
 "article_update_restore":"未発芽から通常ランクへ復元" in code,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print("FAIL:",", ".join(bad));sys.exit(1)
print("PASS: user-facing monochrome coverage")
