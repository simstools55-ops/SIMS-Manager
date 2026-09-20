const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(x,m){if(!x)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.60'"),'version');
ok(s.includes("var ms=sbmHistoryMeasurementState_(h);"),'measurement-state based observation candidate');
ok(s.includes("return finalOutcome!=='改善完了';"),'completed successful observations excluded');
ok(s.includes("return isObservationEnd || !sbmIsPendingArticleIdentity_"),'observation candidates bypass pending query filter');
ok(!s.includes("return sbmMonitoringLifecycleFromHistory_(h)==='REVIEW_REQUIRED' && sbmHistoryMeasurementState_(h).complete;"),'old lifecycle-only gate removed');
console.log('product6660_observation_today_restore_test: PASS');
