const fs=require('fs');const s=fs.readFileSync('Code.gs','utf8');function ok(x,m){if(!x)throw new Error(m)}
ok(/SBM_VERSION\s*=\s*'6\.6\.46'/.test(s),'version');
const a=s.indexOf('function sbmOpenDailyUpdateDialog()');const b=s.indexOf('function sbmGetDailyUpdateClientStatus()',a);const block=s.slice(a,b);
ok(!block.includes('sbmDoctorGetHealthRun_();'),'pre-dialog health read remains');
ok(!block.includes('sbmIsSetupComplete_()'),'pre-dialog setup read remains');
ok(!block.includes("sbmGetSetting_('ConnectionStatus'"),'pre-dialog setting read remains');
ok(block.includes('sbmGetDailyDialogPreflight()'),'async preflight missing');
ok(s.includes('function sbmGetDailyDialogPreflight()'),'preflight function missing');
ok(s.includes('var settings = sbmGetSettingsMap_();'),'settings map not batched');
ok(s.includes('sbmDoctorGetHealthRun_(settings)'),'health run does not reuse settings map');
console.log('v6.6.46 daily dialog fast-open static test: OK');
