const fs=require('fs');
const code=fs.readFileSync('distribution/Code.gs','utf8');
const checks=[
  ["version 6.2.x", /const SBM_VERSION = '6\.2\.[0-9]+'/],
  ["multi-merge route detector", /function sbmDoctorCaseIsMultiMerge_\(c\)/],
  ["multi-merge route preserved", /sbmDoctorCaseIsMultiMerge_\(c\)\?'連続aMerge':'aDoctor→aMerge'/],
  ["absorbed cycle superseded", /sbmSupersedePreviousMonitoringCyclesFast_\(absorbedId,absorbedUrl,absorbedTitle,''\)/],
  ["merge effect cache helper", /function sbmDoctorRefreshEffectCacheAfterMerge_\(\)/],
  ["cache refresh is view-only", /sbmUpdateEffectivenessCore_\(false,\{viewOnly:true,dailyFast:true,returnStats:true\}\)/],
  ["step refresh", /Step途中でも[\s\S]{0,300}sbmDoctorRefreshEffectCacheAfterMerge_\(\)/],
  ["final refresh", /新しいMerge履歴ID[\s\S]{0,300}sbmDoctorRefreshEffectCacheAfterMerge_\(\)/]
];
let failed=0;
for(const [name,re] of checks){const ok=re.test(code);console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)failed++;}
if(failed) process.exit(1);
