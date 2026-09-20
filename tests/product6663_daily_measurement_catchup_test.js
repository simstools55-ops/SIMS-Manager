const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.63';"),'version');
ok(s.includes('reached: nowDay >= dueDay'),'due date must be date-based');
ok(s.includes("if(!options.viewOnly&&dueReached&&!state.complete)"),'daily effect update must record due measurement');
ok(s.includes("judgment='測定待ち（予定日超過）';"),'overdue label');
ok(s.includes('var n=state.count+1;'),'only next measurement is recorded');
console.log('product6663_daily_measurement_catchup_test: PASS');
