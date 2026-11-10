'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert');
const code=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
let n=0;
function check(label,fn){fn();n++;console.log('PASS',label)}
function body(name){const p=code.indexOf('function '+name+'(');assert(p>=0,'missing '+name);const next=code.indexOf('\nfunction ',p+10);return code.slice(p,next<0?undefined:next)}
check('daily finalize invokes effectiveness update',()=>assert.match(body('sbmRunDailyFinalizeStageFromDialog'),/sbmUpdateEffectivenessDailyFast_\s*\(/));
check('daily fast delegates to effectiveness core',()=>assert.match(body('sbmUpdateEffectivenessDailyFast_'),/sbmUpdateEffectivenessCore_\(false,\{dailyFast:true,returnStats:true\}\)/));
const core=body('sbmUpdateEffectivenessCore_');
check('effectiveness core computes per-history due status',()=>assert.match(core,/sbmMeasurementDueStatus_\(h,now\)/));
check('view-only path cannot enter recording loop',()=>assert.match(core,/if\(!options\.viewOnly&&dueReached&&!state\.complete\)/));
check('due history calls weekly recorder',()=>assert.match(core,/sbmRecordWeeklyMeasurement_\(h,currentJudgment,now,/));
check('catchup bounded by target',()=>assert.match(core,/catchupGuard<Math\.max\(4,Number\(state\.target\|\|4\)\)/));
check('catchup recalculates state and due after record',()=>assert.match(core,/state=sbmHistoryMeasurementState_\(h\);\s*dueStatus=sbmMeasurementDueStatus_\(h,now\)/));
check('failed record breaks catchup loop',()=>assert.match(core,/else\{\s*if\(dueOverdue\)[\s\S]*?break;\s*\}/));
const recorder=body('sbmRecordWeeklyMeasurement_');
check('recorder refuses already-complete history',()=>assert.match(recorder,/if\(state\.complete\)return \{recorded:false/));
check('recorder refuses missing history row',()=>assert.match(recorder,/if\(!target\)return \{recorded:false/));
check('recorder uses unique history ID to locate target',()=>assert.match(recorder,/id===historyId/));
check('recorder marks final measurement complete',()=>assert.match(recorder,/var complete=n>=state\.target/));
console.log('RESULT',n+'/'+n,'PASS (source-level wiring assertions; not GAS execution)');
