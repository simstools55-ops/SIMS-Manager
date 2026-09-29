const fs=require('fs');
const s=fs.readFileSync('Code.base.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("if(final==='改善完了'){g.success=true;g.closed=true;}"),'success must require 改善完了');
ok(s.includes("else if(life==='COMPLETED'){g.closed=true;}"),'COMPLETED must close assessment only');
ok(!s.includes("if(life==='COMPLETED'||final==='改善完了'){g.success=true;g.closed=true;}"),'old success conflation remains');
ok(!s.includes("if(v.indexOf('改善中')>=0){r[0]='👀 モニター中'"),'legacy 改善中->モニター中 conversion remains');
console.log('PASS v6.7.73 home rate/state semantics');
