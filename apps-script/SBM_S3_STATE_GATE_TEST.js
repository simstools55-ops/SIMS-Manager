// S3 state-gate regression: extract only the two pure functions from the canonical Code.gs.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(__dirname+'/Code.gs','utf8');
function extract(name){
 const start=code.indexOf('function '+name+'(');
 if(start<0)throw Error('Missing function in Code.gs: '+name);
 const next=code.indexOf('\nfunction ',start+1);
 return code.slice(start,next<0?code.length:next);
}
const ctx=vm.createContext({});
vm.runInContext(extract('sbmS3TriageDecision_')+'\n'+extract('sbmS3ReconcileRows_'),ctx);
const review={format:'SBM_S3_INTAKE_REVIEW_V1',site_id:'site-a',items:[{proposal_id:'p',article_id:'A000026',query:'q',sbm_state_snapshot:'モニター中'}]};
const hdr=['ArticleID','作業状態'];const run=rows=>ctx.sbmS3ReconcileRows_(review,rows,hdr);
assert.equal(run([['A000026','モニター中']]).items[0].execution_allowed,false);
assert.match(run([['A000026','未着手']]).items[0].decision_reason,/変わって/);
assert.match(run([]).items[0].decision_reason,/ありません/);
assert.match(run([['A000026','モニター中'],['A000026','モニター中']]).items[0].decision_reason,/複数/);
assert.throws(()=>ctx.sbmS3ReconcileRows_(review,[],['wrong','作業状態']));
console.log('PASS SBM state gate 5 checks (Code.gs canonical)');
