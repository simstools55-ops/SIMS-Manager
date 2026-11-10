 'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
const name='sbmStrategyVerifyMonitoringAndComplete';
const begin=source.indexOf('function '+name+'(');assert(begin>=0);
const open=source.indexOf('{',begin);let depth=0,quote='',escaped=false,line=false,block=false,end=-1;
for(let i=open;i<source.length;i++){const c=source[i],n=source[i+1];if(line){if(c==='\n')line=false;continue;}if(block){if(c==='*'&&n==='/'){block=false;i++;}continue;}if(quote){if(escaped){escaped=false;continue;}if(c==='\\'){escaped=true;continue;}if(c===quote)quote='';continue;}if(c==='/'&&n==='/'){line=true;i++;continue;}if(c==='/'&&n==='*'){block=true;i++;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&--depth===0){end=i+1;break;}}
assert(end>0);const fn=source.slice(begin,end),CASE='STRATEGY-'+'c'.repeat(24);
const ids=['A000167','A000022'],urls=['https://example.test/167','https://example.test/022'],hids=['H167','H022'];
function scenario(mutate){let writes=0;
 const meta={workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'HISTORY_LINKED',work_route:'WRITER_MULTI'};
 const pairs=ids.map((id,i)=>({articleId:id,url:urls[i],historyId:hids[i]}));
 const work={outcome:'READY_FOR_PUBLICATION',affected_articles:ids.map((id,i)=>({article_id:id,url:urls[i]}))};
 const receipt={outcome:'PUBLISHED',published_article_ids:[...ids]};
 const histories=ids.map((id,i)=>({ArticleID:id,'記事URL':urls[i],'改善履歴ID':hids[i],life:'ACTIVE'}));
 const effects=hids.map(id=>({'改善履歴ID':id}));
 const state={meta,pairs,work,receipt,histories,effects};if(mutate)mutate(state);
 const payload={STRATEGY_HISTORY_BINDINGS:JSON.stringify(pairs),STRATEGY_WORK_RESULT:JSON.stringify(work),STRATEGY_WORK_RECEIPT:JSON.stringify(receipt)};
 const ctx={sbmDoctorWorkflowReadMeta_:()=>meta,sbmDoctorWorkflowReadPayload_:(_,key)=>payload[key]||'',sbmNormalizeUrl_:s=>String(s||'').replace(/\/$/,''),
 sbmRowsAsObjects_:sheet=>sheet==='EFFECT'?effects:histories,SBM_SHEETS:{EFFECT:'EFFECT',FEEDBACK_HISTORY:'HISTORY'},
 sbmDoctorFindHistoryByIdForSelectedEffect_:id=>histories.find(h=>h['改善履歴ID']===id),sbmMonitoringLifecycleFromHistory_:h=>h.life,
 sbmDoctorWorkflowWriteMeta_:(_,patch)=>{Object.assign(meta,patch);writes++},sbmNowText_:()=> '2026-11-10'};
 vm.createContext(ctx);vm.runInContext(fn,ctx,{timeout:2000});return {run:()=>ctx.sbmStrategyVerifyMonitoringAndComplete(CASE),state,get writes(){return writes}};
}
let count=0;function test(label,modify,expected){const x=scenario(modify),r=x.run();assert.equal(r.ok,expected,r.message);assert.equal(x.writes,expected?1:0);if(expected){assert.equal(x.state.meta.status,'COMPLETED');assert.equal(x.state.meta.strategy_monitoring_status,'VERIFIED_ACTIVE')}else assert.equal(x.state.meta.status,modify&&label==='incorrect workflow state cannot complete'?'WORK_REQUEST_READY':'MONITORING_SETUP_PENDING');console.log('PASS',label);count++}
test('two verified active histories complete the strategy',null,true);
test('missing second history binding cannot complete',s=>s.pairs.pop(),false);
test('duplicate history binding cannot complete',s=>s.pairs[1].articleId=s.pairs[0].articleId,false);
test('missing publication acknowledgement cannot complete',s=>s.receipt.published_article_ids.pop(),false);
test('wrong linked URL cannot complete',s=>s.pairs[0].url='https://wrong.test',false);
test('missing effect row cannot complete',s=>s.effects.pop(),false);
test('inactive new monitor cannot complete',s=>s.histories[0].life='COMPLETED',false);
test('competing old active monitor cannot complete',s=>s.histories.push({ArticleID:ids[0],'記事URL':urls[0],'改善履歴ID':'OLD','life':'ACTIVE'}),false);
test('incorrect workflow state cannot complete',s=>s.meta.status='WORK_REQUEST_READY',false);
test('merge route cannot complete without retirement evidence',s=>s.meta.work_route='MERGE',false);
console.log(`${count} actual completion-gate offline tests passed; no live services used.`);
