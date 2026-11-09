'use strict';
const assert=require('assert'),fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
function extract(name){const start=src.indexOf('function '+name+'(');assert(start>=0,name);let i=src.indexOf('{',start),depth=0,quote='',esc=false;for(let j=i;j<src.length;j++){const c=src[j];if(quote){if(esc)esc=false;else if(c==='\\')esc=true;else if(c===quote)quote='';continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&!--depth)return src.slice(start,j+1);}throw Error('unterminated '+name);}
const meta={workflow_type:'STRATEGY_CASE',work_route:'MERGE',status:'WORK_REQUEST_READY',primary_article_id:'A1',primary_article_url:'https://example.org/1',related_article_id:'A2',related_article_url:'https://example.org/2'};
let stored={},nativeId='DOCTOR-CASE-009';
const native={format:'SIMS_MERGE_TREATMENT_RESULT_V1',case_id:nativeId,treatment_result_id:'RESULT-1',result_status:'COMPLETED',merge_decision:{primary_article_id:'A1',absorbed_article_ids:['A2']},merged_article:{article_id:'A1',article_url:'https://example.org/1',content_markdown:'complete article',publication_ready:true}};
const ctx={JSON,Array,String,Error,console,
 sbmDoctorWorkflowReadMeta_:()=>meta,
 sbmDoctorExtractContractJsonText_:(raw)=>raw,
 sbmDoctorNormalizeMergeResult_:(o)=>({caseId:o.case_id,resultId:o.treatment_result_id,status:o.result_status,decision:o.merge_decision,plan:{},mergedArticle:o.merged_article}),
 sbmNormalizeUrl_:(x)=>String(x).replace(/\/$/,''),
 sbmDoctorMergeHasCompletedArticle_:(n)=>!!(n.mergedArticle.content_markdown&&n.mergedArticle.publication_ready),
 sbmDoctorWorkflowReadPayload_:(id,k)=>stored[k]||'',
 sbmDoctorWorkflowWritePayload_:(id,k,v)=>{stored[k]=v;},
 sbmStrategySubmitWorkResult:(id,raw)=>({ok:true}),
};vm.createContext(ctx);vm.runInContext(['sbmStrategyInspectNativeMergeResult','sbmStrategyConvertNativeMergeResult'].map(extract).join('\n'),ctx);
let n=0;function check(desc,fn){fn();n++;console.log('PASS',desc);}
check('native Doctor CaseID can differ from strategic case',()=>{let a=ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(native));assert(a.ok,JSON.stringify(a));assert.equal(a.result.merge_context.native_case_id,nativeId);assert.equal(a.result.case_id,'STRATEGY-CASE');});
check('source is persisted for provenance',()=>assert.equal(JSON.parse(stored.STRATEGY_NATIVE_MERGE_SOURCE).case_id,nativeId));
check('destination article identity is validated',()=>{let bad=JSON.parse(JSON.stringify(native));bad.merged_article.article_id='WRONG';assert.equal(ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(bad)).ok,false);});
check('source article identity is validated',()=>{let bad=JSON.parse(JSON.stringify(native));bad.merge_decision.absorbed_article_ids=['WRONG'];assert.equal(ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(bad)).ok,false);});
check('missing publication content is blocked',()=>{let bad=JSON.parse(JSON.stringify(native));bad.merged_article.content_markdown='';assert.equal(ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(bad)).ok,false);});
check('same source retry is idempotent',()=>{stored.STRATEGY_WORK_RESULT=JSON.stringify(ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(native)).result);let a=ctx.sbmStrategyConvertNativeMergeResult('STRATEGY-CASE',JSON.stringify(native));assert(a.ok&&a.alreadySaved);});
console.log(n+' native merge case provenance tests passed');
