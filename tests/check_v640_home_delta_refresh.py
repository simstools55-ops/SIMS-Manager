from pathlib import Path
import sys,re
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
start=c.index('function sbmDoctorCompleteCloseMonitoring')
end=c.index('\nfunction ',start+20)
seg=c[start:end]
checks={
 'delta_helper':'function sbmRefreshHomeMonitoringDelta_()' in c,
 'close_uses_delta':'sbmRefreshHomeMonitoringDelta_();' in seg,
 'close_no_full_refresh':'sbmRefreshHome_();' not in seg,
 'delta_reads_article':"sbmHomeReadRowsOnce_(SBM_SHEETS.ARTICLE_DB)" in c[c.index('function sbmRefreshHomeMonitoringDelta_'):c.index('\nfunction ',c.index('function sbmRefreshHomeMonitoringDelta_')+20)],
 'delta_reads_effect':"sbmHomeReadRowsOnce_(SBM_SHEETS.EFFECT)" in c[c.index('function sbmRefreshHomeMonitoringDelta_'):c.index('\nfunction ',c.index('function sbmRefreshHomeMonitoringDelta_')+20)],
 'no_theme_in_delta':'sbmApplyHomeDisplayTheme_' not in c[c.index('function sbmRefreshHomeMonitoringDelta_'):c.index('\nfunction ',c.index('function sbmRefreshHomeMonitoringDelta_')+20)],
 'mono_no_standard_prepaint':"if(monoHome){\n    sh.getRange('A4:J4').setBackground('#ffffff');" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.4.0 Home delta refresh')
