const fs=require('fs'),assert=require('assert');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
assert(s.includes("const SBM_VERSION = '6.6.59'"));
assert(s.includes('function sbmPruneObservationEndedFromEffectView_()'));
assert(s.includes('sbmSyncObservationEndedToToday_();sbmPruneObservationEndedFromEffectView_()'));
assert(s.includes("if((aid&&endedIds[aid])||(url&&endedUrls[url]))return;"));
assert(s.includes("candidateId:'OBS_END:'"));
console.log('product6659_observation_end_move_test: PASS');
