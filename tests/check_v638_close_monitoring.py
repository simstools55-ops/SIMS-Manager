from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={'normalize':"explicitNextActionV2==='CLOSE_MONITORING'" in c,'route':"route:'CLOSE_MONITORING'" in c,'title':"③ 診断結果：経過観察を終了します" in c,'button':"モニターを終了して完了登録" in c,'finalizer':"function sbmDoctorCompleteCloseMonitoring(" in c,'history':"sbmSetMonitoringLifecycleByHistoryId_(historyId,'COMPLETED')" in c,'article':"sbmMarkArticleMeasurementComplete_(articleId)" in c}
bad=[k for k,v in checks.items() if not v]
if bad:print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.3.8 CLOSE_MONITORING terminal workflow')
