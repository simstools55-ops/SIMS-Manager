const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const a=src.indexOf('function sbmStrategyVerifyMonitoringAndComplete('),b=src.indexOf('\n/** v9.2.36:',a);
assert(a>=0&&b>a);
const code=src.slice(a,b);
const urls={A1:'https://example.test/1',A2:'https://example.test/2'};
let meta,work,receipt,pairs,effects,histories,writes;
function reset(){
 meta={workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'HISTORY_LINKED'};
 work={affected_articles:[{article_id:'A1',url:urls.A1},{article_id:'A2',url:urls.A2}]};
 receipt={outcome:'PUBLISHED',published_article_ids:['A1','A2']};
 pairs=[{articleId:'A1',url:urls.A1,historyId:'H1'},{articleId:'A2',url:urls.A2,historyId:'H2'}];
 histories=[{ArticleID:'A1','記事URL':urls.A1,'改善履歴ID':'H1'},{ArticleID:'A2','記事URL':urls.A2,'改善履歴ID':'H2'}];
 effects=[{'改善履歴ID':'H1'},{'改善履歴ID':'H2'}];writes=[];
}
const context={
 sbmDoctorWorkflowReadMeta_:()=>meta,
 sbmDoctorWorkflowReadPayload_:(id,k)=>JSON.stringify(({STRATEGY_HISTORY_BINDINGS:pairs,STRATEGY_WORK_RESULT:work,STRATEGY_WORK_RECEIPT:receipt})[k]),
 sbmRowsAsObjects_:k=>k==='EFFECT'?effects:histories,
 SBM_SHEETS:{EFFECT:'EFFECT',FEEDBACK_HISTORY:'FEEDBACK_HISTORY'},
 sbmDoctorFindHistoryByIdForSelectedEffect_:hid=>histories.find(x=>x['改善履歴ID']===hid),
 sbmMonitoringLifecycleFromHistory_:h=>h.lifecycle||'ACTIVE',
 sbmNormalizeUrl_:s=>String(s||'').replace(/\/$/,''),
 sbmDoctorWorkflowWriteMeta_:(id,patch)=>writes.push(patch),
 sbmNowText_:()=> '2026-11-09'
};
vm.createContext(context);vm.runInContext(code,context);
function run(ok){const r=context.sbmStrategyVerifyMonitoringAndComplete('CASE');assert.equal(r.ok,ok,r.message);assert.equal(writes.length,ok?1:0,r.message);}
let n=0;
function test(name,change,ok){reset();change();run(ok);n++;}
test('all articles complete',()=>{},true);
test('missing article binding',()=>{pairs.pop()},false);
test('duplicate article binding',()=>{pairs[1]={...pairs[0]}},false);
test('wrong article url',()=>{pairs[1].url='https://example.test/wrong'},false);
test('unpublished article',()=>{receipt.published_article_ids=['A1']},false);
test('duplicate publication receipt',()=>{receipt.published_article_ids=['A1','A1']},false);
test('missing publication receipt',()=>{receipt=null},false);
test('missing effect row',()=>{effects.pop()},false);
test('old monitor still active',()=>{histories.push({ArticleID:'A1','記事URL':urls.A1,'改善履歴ID':'OLD'})},false);
test('history wrong url',()=>{histories[1]['記事URL']='https://example.test/other'},false);
test('history inactive',()=>{histories[1].lifecycle='CLOSED'},false);
console.log(n+' strategic completion coverage tests passed');
