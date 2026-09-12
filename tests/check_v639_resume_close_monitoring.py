from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
 'state_label':"'DOCTOR_NORMAL_CLOSE':'aDoctor診断済み・モニター終了待ち'" in c,
 'next_label':"'DOCTOR_NORMAL_CLOSE':'aDoctorの終了判定を確認し、モニターを終了して完了登録します。'" in c,
 'dispatcher':"'DOCTOR_NORMAL_CLOSE':1" in c,
 'resume_mode':"info.mode='CLOSE_MONITORING';" in c,
 'close_card':'id="closeCard"' in c,
 'no_rediagnosis':"completeCloseMonitoringResume()" in c and "sbmDoctorCompleteCloseMonitoring(info.caseId" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.3.9 unfinished CLOSE_MONITORING resume')
