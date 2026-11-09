/* SIMS strategy work intake isolated regression tests. Run: node tests/strategy-work-regression.js */
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname,'../apps-script/Code.gs'),'utf8');
function extract(name){const start=source.indexOf('function '+name+'(');assert(start>=0,name);let i=source.indexOf('{',start),depth=0,quote='',escape=false;for(let j=i;j<source.length;j++){const c=source[j];if(quote){if(escape)escape=false;else if(c==='\\')escape=true;else if(c===quote)quote='';continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&!--depth)return source.slice(start,j+1);}throw Error('unclosed '+name)}
const funcs=['sbmStrategySubmitWorkResult','sbmStrategyConfirmWorkResult'];
const store={};let meta={workflow_type:'STRATEGY_CASE',status:'WORK_REQUEST_READY',work_route:'WRITER',primary_article_id:'A000167',primary_article_url:'https://example.com/a',related_article_id:'A000168',related_article_url:'https://example.com/b'};
const context={JSON,String,Array,Error,Date,console,
 sbmDoctorWorkflowReadMeta_:()=>meta,
 sbmDoctorWorkflowWriteMeta_:(id,patch)=>{Object.assign(meta,patch)},
 sbmDoctorWorkflowReadPayload_:(id,key)=>store[key]||'',
 sbmDoctorWorkflowWritePayload_:(id,key,value)=>{store[key]=value},
 sbmNormalizeUrl_:s=>String(s||'').replace(/\/$/,''),
 sbmNowText_:()=> '2026-11-09 10:00',
 sbmStrategyConfirmWork:(id,r)=>{meta.status=r.outcome==='PUBLISHED'?'MONITORING_SETUP_PENDING':'COMPLETED';return {ok:true,status:meta.status}}};
vm.createContext(context);vm.runInContext(funcs.map(extract).join('\n'),context);
const base={format:'SIMS_STRATEGY_WORK_RESULT_V1',case_id:'STRATEGY-1',route:'WRITER',outcome:'READY_FOR_PUBLICATION',affected_articles:[{article_id:'A000167',url:'https://example.com/a'}],summary:'verified change'};
const submit=(o)=>context.sbmStrategySubmitWorkResult('STRATEGY-1',JSON.stringify(o));
const check=(label,condition)=>{assert(condition,label);console.log('PASS',label)};
check('reject invalid case id',!submit({...base,case_id:'STRATEGY-2'}).ok);
check('reject wrong route',!submit({...base,route:'MERGE'}).ok);
check('reject unrelated article',!submit({...base,affected_articles:[{article_id:'A999999',url:'https://example.com/a'}]}).ok);
check('reject URL mismatch',!submit({...base,affected_articles:[{article_id:'A000167',url:'https://example.com/other'}]}).ok);
check('reject duplicated article',!submit({...base,affected_articles:[...base.affected_articles,...base.affected_articles]}).ok);
check('accept valid result',submit(base).ok);
check('same result is idempotent',submit(base).alreadySaved===true);
check('reject modified accepted result',!submit({...base,summary:'tampered'}).ok);
check('reject publication of other article',!context.sbmStrategyConfirmWorkResult('STRATEGY-1',{published_article_ids:['A000168'],detail:'published'}).ok);
check('accept matching publication receipt',context.sbmStrategyConfirmWorkResult('STRATEGY-1',{published_article_ids:['A000167'],detail:'published'}).ok);
check('reject additional publication after status change',!context.sbmStrategyConfirmWorkResult('STRATEGY-1',{published_article_ids:['A000167'],detail:'published'}).ok);
console.log('11 strategy-work regression tests passed');
