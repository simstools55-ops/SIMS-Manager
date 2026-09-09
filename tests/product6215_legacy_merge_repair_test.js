const fs=require('fs');
const s=fs.readFileSync('src/apps-script/Code.gs','utf8');
const checks=[
 ['version',s.includes("const SBM_VERSION = '6.2.15';")],
 ['active-cycle helper',s.includes('function sbmHasActiveMonitoringCycleForArticle_')],
 ['active lifecycle detection',s.includes("life==='ACTIVE'||life==='REVIEW_REQUIRED'")],
 ['audit completed multi step',s.includes("['MONITORING','MERGE_USER_ACTION_REQUIRED','MULTI_MERGE_STEP_COMPLETED'].indexOf(code)<0")],
 ['audit catches lifecycle-only drift',s.includes('!done||sbmHasActiveMonitoringCycleForArticle_')],
 ['repair completed multi step',s.split("['MONITORING','MERGE_USER_ACTION_REQUIRED','MULTI_MERGE_STEP_COMPLETED'].indexOf(code)<0").length>=3],
 ['preserve no redirect',s.includes("redirectMode='NO_REDIRECT'" )],
 ['repair passes redirect mode',s.includes('sbmDoctorFinalizeMergeAbsorbedArticles_(caseId,ctx,sbmNowText_(),redirectMode)')],
 ['repair rebuilds trend view only',s.includes("sbmUpdateEffectivenessCore_(false,{viewOnly:true,dailyFast:true})")],
 ['future prevention remains',s.includes('sbmDoctorRefreshEffectCacheAfterMerge_()')],
 ['multi route remains',s.includes("sbmDoctorCaseIsMultiMerge_(c)?'連続aMerge':'aDoctor→aMerge'")]
];
let bad=0;for(const [n,ok] of checks){console.log((ok?'PASS ':'FAIL ')+n);if(!ok)bad++;}if(bad)process.exit(1);
