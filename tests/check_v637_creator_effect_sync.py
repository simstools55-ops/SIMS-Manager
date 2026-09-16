from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
'generic_upsert':'function sbmUpsertEffectRowForHistory_' in c,
'generic_repair':'function sbmRepairMissingActiveEffectRows_' in c,
'open_repair':"try{sbmRepairMissingActiveEffectRows_();" in c,
'direct_sync':"CreatorDirectEffectSync" in c and "sbmUpsertEffectRowForHistory_(creatorHistoryId,articleId,url)" in c,
'doctor_creator_sync':"DoctorCreatorEffectSync" in c and "sbmUpsertEffectRowForHistory_(histId,articleId,url)" in c,
'legacy_new_rank':"rank==='—'" in c and "setValue('🆕 新規')" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.3.7 Creator improvement-status synchronization')
