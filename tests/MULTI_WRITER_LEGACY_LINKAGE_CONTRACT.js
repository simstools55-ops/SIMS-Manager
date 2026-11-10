/* node tests/MULTI_WRITER_LEGACY_LINKAGE_CONTRACT.js
 * Executes actual production legacy linker with mocked Apps Script collaborators.
 * No real Google services, no production writes, no 28-day time travel.
 */
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(require('path').join(__dirname,'../apps-script/Code.gs'),'utf8');
const start=code.indexOf('function sbmStrategyLinkRegisteredHistories(caseId,bindings){');
assert(start>=0,'legacy linker missing');
const end=code.indexOf('/** v9.2.57:',start);assert(end>start);
const fn=code.slice(start,end);
const id='STRATEGY-'+'a'.repeat(24);
const url1='https://example.com/a',url2='https://example.com/b';
let baseline=['oldA','oldB'],writes=[],historyIds=['newA','newB'],status='PREFLIGHT_ACKNOWLEDGED';
let articleState='モニター中';
const entries=[{articleId:'A000167',url:url1,allHistoryIds:['oldA','newA'],articleState,activeHistoryIds:['newA']},{articleId:'A000022',url:url2,allHistoryIds:['oldB','newB'],articleState,activeHistoryIds:['newB']}];
const histories={newA:{ArticleID:'A000167','記事URL':url1},newB:{ArticleID:'A000022','記事URL':url2}};
const ctx={
 LockService:{getDocumentLock:()=>({tryLock:()=>true,releaseLock:()=>{}})},
 sbmDoctorWorkflowReadMeta_:()=>({workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:status}),
 sbmStrategyMonitoringPreflight:()=>({ok:true,articles:entries}),
 sbmDoctorWorkflowReadPayload_:(c,k)=> k==='STRATEGY_MONITORING_PREFLIGHT'?JSON.stringify({fingerprint:'f',articles:[{articleId:'A000167',url:url1,allHistoryIds:baseline.includes('newA')?['oldA','newA']:['oldA'],articleState:'未着手'},{articleId:'A000022',url:url2,allHistoryIds:baseline.includes('newB')?['oldB','newB']:['oldB'],articleState:'未着手'}]}):k==='STRATEGY_WORK_RECEIPT'?JSON.stringify({outcome:'PUBLISHED',published_article_ids:['A000167','A000022']}):null,
 sbmDoctorFindHistoryByIdForSelectedEffect_:h=>histories[h],
 sbmNormalizeUrl_:u=>u,
 sbmMonitoringLifecycleFromHistory_:()=> 'ACTIVE',
 sbmDoctorWorkflowWritePayload_:(...a)=>writes.push(a),
 sbmDoctorWorkflowWriteMeta_:(...a)=>writes.push(a),
 sbmNowText_:()=> '2026-11-10'
};
vm.createContext(ctx);vm.runInContext(fn,ctx);
const pairs=[{article_id:'A000167',history_id:'newA'},{article_id:'A000022',history_id:'newB'}];
let result=ctx.sbmStrategyLinkRegisteredHistories(id,pairs);assert(result.ok,result.message);assert.equal(writes.length,2);
writes=[];baseline=['oldA','oldB','newA'];result=ctx.sbmStrategyLinkRegisteredHistories(id,pairs);assert(!result.ok&&result.message.includes('事前確認時点'),result.message);assert.equal(writes.length,0);
baseline=['oldA','oldB'];writes=[];result=ctx.sbmStrategyLinkRegisteredHistories(id,[{article_id:'A000167',history_id:'newA'},{article_id:'A000022',history_id:'newA'}]);assert(!result.ok);assert.equal(writes.length,0);
status='HISTORY_LINKED';result=ctx.sbmStrategyLinkRegisteredHistories(id,pairs);assert(!result.ok);assert.equal(writes.length,0);
console.log('PASS: valid two-article linkage; retrospective baseline rejection; duplicate history rejection; state guard');
