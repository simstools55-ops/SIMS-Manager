 'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
const name='sbmStrategyLinkRegisteredHistories';
const begin=source.indexOf('function '+name+'(');assert(begin>=0);
const open=source.indexOf('{',begin);let depth=0,quote='',escaped=false,line=false,block=false,end=-1;
for(let i=open;i<source.length;i++){const c=source[i],n=source[i+1];if(line){if(c==='\n')line=false;continue;}if(block){if(c==='*'&&n==='/'){block=false;i++;}continue;}if(quote){if(escaped){escaped=false;continue;}if(c==='\\'){escaped=true;continue;}if(c===quote)quote='';continue;}if(c==='/'&&n==='/'){line=true;i++;continue;}if(c==='/'&&n==='*'){block=true;i++;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&--depth===0){end=i+1;break;}}
assert(end>0);
const fn=source.slice(begin,end),CASE='STRATEGY-'+ 'c'.repeat(24);
const ids=['A000167','A000022'],urls=['https://example.test/167','https://example.test/022'],hids=['H167','H022'];
function scenario(mutate){let writes=0,lockReleased=0;
 const meta={workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'PREFLIGHT_ACKNOWLEDGED'};
 const baseline=ids.map((id,i)=>({articleId:id,url:urls[i],articleState:'未着手',allHistoryIds:['OLD'+i]}));
 const current=ids.map((id,i)=>({articleId:id,url:urls[i],articleState:'モニター中',allHistoryIds:['OLD'+i,hids[i]],activeHistoryIds:[hids[i]]}));
 const history=ids.map((id,i)=>({ArticleID:id,'記事URL':urls[i],'改善履歴ID':hids[i],life:'ACTIVE'}));
 const payload={STRATEGY_MONITORING_PREFLIGHT:JSON.stringify({fingerprint:'abc',articles:baseline}),STRATEGY_WORK_RECEIPT:JSON.stringify({outcome:'PUBLISHED',published_article_ids:ids})};
 const pairs=ids.map((id,i)=>({article_id:id,history_id:hids[i]}));
 const state={meta,baseline,current,history,payload,pairs};if(mutate)mutate(state);
 const ctx={LockService:{getDocumentLock:()=>({tryLock:()=>true,releaseLock:()=>{lockReleased++}})},sbmDoctorWorkflowReadMeta_:()=>meta,
 sbmStrategyMonitoringPreflight:()=>({ok:true,articles:current}),sbmDoctorWorkflowReadPayload_:(_,key)=>payload[key]||'',
 sbmDoctorFindHistoryByIdForSelectedEffect_:id=>history.find(h=>h['改善履歴ID']===id),sbmNormalizeUrl_:s=>String(s||'').replace(/\/$/,''),
 sbmMonitoringLifecycleFromHistory_:h=>h.life,sbmDoctorWorkflowWritePayload_:(_,key,value)=>{payload[key]=value;writes++},
 sbmDoctorWorkflowWriteMeta_:(_,patch)=>{Object.assign(meta,patch);writes++},sbmNowText_:()=> '2026-11-10'};
 vm.createContext(ctx);vm.runInContext(fn,ctx,{timeout:2000});
 return {run:()=>ctx.sbmStrategyLinkRegisteredHistories(CASE,pairs),state,get writes(){return writes},get lockReleased(){return lockReleased}};
}
let count=0;function test(label,fn){fn();console.log('PASS',label);count++}
test('real linker accepts two new histories after baseline',()=>{const x=scenario();const r=x.run();assert(r.ok,r.message);assert.equal(r.pairs.length,2);assert.equal(x.writes,2);assert.equal(x.lockReleased,1)});
test('reject history already in baseline',()=>{const x=scenario(s=>{s.baseline[0].allHistoryIds.push('H167');s.payload.STRATEGY_MONITORING_PREFLIGHT=JSON.stringify({fingerprint:'abc',articles:s.baseline})});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject wrong history URL',()=>{const x=scenario(s=>{s.history[1]['記事URL']='https://wrong.test'});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject old active monitor',()=>{const x=scenario(s=>{s.current[0].activeHistoryIds.push('OLD0')});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject missing baseline approval',()=>{const x=scenario(s=>{s.meta.strategy_monitoring_status='PENDING_USER_REGISTRATION'});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject missing one article binding',()=>{const x=scenario(s=>{s.pairs.pop()});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject duplicate article binding',()=>{const x=scenario(s=>{s.pairs[1].article_id='A000167'});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject removed old baseline history',()=>{const x=scenario(s=>{s.current[0].allHistoryIds=['H167']});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject conflicting saved linkage',()=>{const x=scenario(s=>{s.payload.STRATEGY_HISTORY_BINDINGS=JSON.stringify([{articleId:'X',historyId:'Y'}])});assert(!x.run().ok);assert.equal(x.writes,0)});
test('reject wrong case state',()=>{const x=scenario(s=>{s.meta.status='WORK_REQUEST_READY'});assert(!x.run().ok);assert.equal(x.writes,0)});
console.log(`${count} real-linker offline tests passed; no live services used.`);
