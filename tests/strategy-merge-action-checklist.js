const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const a=code.indexOf('function sbmStrategyMergeSourceAudit('),b=code.indexOf('/** Complete only when real linked histories',a);
assert(a>=0&&b>a);
let rows=[];let writes=0;
const ctx={sbmStrategyMergeSourceActionStatus:()=>({ok:true,articles:rows}),sbmDoctorWorkflowWritePayload_:()=>writes++};
vm.createContext(ctx);vm.runInContext(code.slice(a,b),ctx);
const expected={REDIRECT_CONFIRMED:['301/308','転送先','転送ループ','内部リンク'],NOINDEX_CONFIRMED:['200','noindex','robots.txt','canonical'],REMOVED_CONFIRMED:['404/410','内部リンク','代替ページ'],RETAINED_WITH_REASON:['理由','役割分離','canonical']};
let count=0;
for(const [kind,terms] of Object.entries(expected)){
 rows=[{articleId:'A2',action:{article_id:'A2',action:kind,evidence_url:'https://example.org/source',note:'確認済み'}}];
 const result=ctx.sbmStrategyMergeSourceAudit('C');
 assert.equal(result.ok,true);assert.equal(result.externalVerified,false);assert.equal(result.completionAuthorized,false);count+=3;
 for(const term of terms){assert(result.articles[0].requiredChecks.some(x=>x.includes(term)),kind+' '+term);count++;}
}
assert.equal(writes,0);count++;
console.log(count+' merge action checklist assertions passed');
