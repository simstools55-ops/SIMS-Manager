from pathlib import Path
import sys
ROOT=Path(__file__).resolve().parents[1]
code=(ROOT/'Code.gs').read_text(encoding='utf-8')
need=[
 'SIMS_PRE_CHANGE_SNAPSHOT_V1',
 'pre_change_snapshot:preChangeSnapshot',
 'RESTORE_DECISION_REVIEW',
 "allowed_values:['KEEP','IMPROVE','RESTORE']",
 "restoreV2=(explicitNextActionV2==='RESTORE')",
 "restore=(explicitNextAction==='RESTORE')",
 "format:'SIMS_RESTORE_PACKAGE_V1'",
 'function sbmDoctorCompleteRestore(',
 "'改善経路':'原状復帰→再観察'",
 '7日目・14日目・21日目・28日目の再観察',
 "sh.getRange('B:B').setWrap(true)",
 'restoreCompleteButton'
]
missing=[x for x in need if x not in code]
if missing:
 print('FAIL: v6.5.2 restore safety')
 for x in missing: print('-',x)
 sys.exit(1)
print('PASS: v6.5.2 pre-change snapshot / restore safety / Today wrapping')
