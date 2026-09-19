const fs=require('fs');
const s=fs.readFileSync('Code.gs','utf8');
function ok(cond,msg){if(!cond){console.error('FAIL:',msg);process.exit(1)} console.log('PASS:',msg)}
ok(s.includes("const SBM_VERSION = '6.6.47';"),'version 6.6.47');
ok(s.includes('function sbmDoctorBuildSimsRequestEnvelope_'),'protocol envelope builder exists');
for(const x of ['PROTOCOL=SIMS-A/1','SOURCE=SIMS_MANAGER','EDITION=FULL','TARGET=ADOCTOR','REQUEST_TYPE=ARTICLE_DIAGNOSIS'])ok(s.includes(x),x);
ok(s.includes("var exportText=sbmDoctorBuildSimsRequestEnvelope_(payload,jsonText);"),'copy dialog exports envelope');
ok(s.includes('addText=sbmDoctorBuildSimsRequestEnvelope_(addReq,addJson)'), 'additional diagnosis exports envelope');
ok(s.includes('text=sbmDoctorBuildSimsRequestEnvelope_(follow,followJson)'), 'follow-up exports envelope');
ok(s.includes("if(!sbmIsADoctorEnabled_())return sbmAlert_('Starter Edition'"),'Starter aDoctor guard preserved');
console.log('SIMS Request Protocol static audit PASS');
