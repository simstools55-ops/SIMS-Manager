const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
const checks=[
  ["version",s.includes("const SBM_VERSION = '6.2.22';")],
  ["creator explicit exclusion",s.includes("var isCreatorDirect=routeNow==='Creator Direct';")],
  ["doctor case guard",s.includes("var doctorMonitoring=!isCreatorDirect")],
  ["fallback guard",s.includes("if(!doctorMonitoring&&!isCreatorDirect)")],
  ["stale repair helper",s.includes('function sbmRepairStaleCreatorDirectEffectLabels_()')],
  ["open invokes repair",s.includes('sbmRepairStaleCreatorDirectEffectLabels_();')],
  ["stale label corrected",s.includes("setValue('測定待ち')")],
  ["doctor route preserved",s.includes("routeNow.indexOf('Doctor再診→経過観察')>=0")],
  ["wait monitor preserved",s.includes("changedNow.indexOf('WAIT / MONITOR')>=0")],
  ["no generic monitor trigger",!s.includes("nextNow==='monitor'") && !s.includes("nextNow === 'monitor'")]
];
let fail=0; for(const [n,ok] of checks){console.log((ok?'PASS ':'FAIL ')+n); if(!ok)fail++;} if(fail)process.exit(1);
