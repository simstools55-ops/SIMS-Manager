const fs=require('fs');
const code=fs.readFileSync(process.argv[2]||'Code.gs','utf8');
function ok(v,msg){if(!v){console.error('FAIL:',msg);process.exitCode=1}else console.log('PASS:',msg)}
ok(code.includes("const SBM_VERSION = '6.2.12';"),'version is 6.2.12');
ok(code.includes('function sbmDoctorSubmitMergeResult(raw)'),'common Merge result receiver exists');
ok(code.includes("if(destination.indexOf('MERGE')<0)throw new Error('このCaseIDはaMerge紹介案件ではありません"),'receiver validates formal Merge destination');
ok(!code.includes("if(!siteDiagnosisCaseId)throw new Error('このCaseIDはSite Doctor経路の案件ではありません。通常のaDoctor処置結果登録を使用してください。');"),'Site Doctor-only rejection removed');
ok(code.includes('function sbmDoctorSubmitSiteDiagnosisMergeResult(raw){\n  // Backward-compatible public entry point.'),'legacy Site Doctor receiver remains as wrapper');
ok(code.includes('return sbmDoctorSubmitMergeResult(raw);'),'legacy receiver delegates to common receiver');
ok(code.includes('.sbmDoctorSubmitMergeResult(raw)}function retryMergeArtifact()'),'shared treatment dialog uses common receiver');
ok(code.includes('.sbmDoctorSubmitMergeResult(lastMergeResultRaw)}function completeMerge()'),'artifact retry uses common receiver');
ok(code.includes('function sbmDoctorCompleteMergeTreatment(caseId,checks)'),'common Merge completion bridge exists');
ok(code.includes('.sbmDoctorCompleteMergeTreatment(mergeCompletionCaseId,checks)}document.addEventListener'),'shared dialog completes through common bridge');
ok(code.includes('sbmDoctorValidateMergeResultPair_(rec,m);'),'pair safety validation remains');
ok(code.includes('sbmDoctorCreateNextMultiMergeStep_(rec,multi)'),'sequential next-step creation remains');
if(process.exitCode)process.exit(process.exitCode);
