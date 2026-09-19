const fs=require('fs');
const s=fs.readFileSync('Code.gs','utf8');
function ok(cond,msg){if(!cond){console.error('FAIL:',msg);process.exit(1)} console.log('PASS:',msg)}
ok(s.includes("const SBM_VERSION = '6.6.48';"),'version 6.6.48');
ok(s.includes('function sbmDoctorNormalizeV2RequestText_'),'legacy request normalizer exists');
ok(s.includes("var close='[/SIMS_REQUEST]'"),'legacy SIMS-A/1 wrapper can be stripped');
ok(s.includes("return body;"),'aDoctor export returns V2 JSON body');
ok(!s.includes("'PROTOCOL=SIMS-A/1\\n'+"),'new exports do not add SIMS-A/1 envelope');
ok(s.includes("follow=sbmDoctorNormalizeV2RequestText_(follow);"),'virtual unfinished follow-up is normalized on resume');
ok(s.includes("followRaw=sbmDoctorNormalizeV2RequestText_(followRaw);"),'stored follow-up is normalized on resume');
ok(s.includes("p.request.request_id='REQ-RESUME-'+caseId"),'unfinished single-case request is regenerated with same CaseID');
ok(s.includes("if(!sbmIsADoctorEnabled_())throw new Error('Starter EditionではaDoctor関連の未完了作業を再開できません。"),'Starter guard preserved');
console.log('aDoctor V2 unfinished workflow compatibility static audit PASS');
