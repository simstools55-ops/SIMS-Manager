const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const a=src.indexOf('function sbmStrategyProbeMergeSourceHttp('),b=src.indexOf('/** Complete only when real linked histories',a);
assert(a>=0&&b>a);
let fetches=0, url='https://example.com/source';
const ctx={sbmStrategyMergeSourceAudit:()=>({ok:true,articles:[{articleId:'A2',reported:true,action:'REDIRECT_CONFIRMED',evidenceUrl:url}]}),UrlFetchApp:{fetch:(u,o)=>{fetches++;assert.equal(o.followRedirects,false);assert.equal(o.muteHttpExceptions,true);return {getResponseCode:()=>301,getAllHeaders:()=>({Location:'https://example.com/target'}),getContentText:()=>''}}}};
vm.createContext(ctx);vm.runInContext(src.slice(a,b),ctx);
let r=ctx.sbmStrategyProbeMergeSourceHttp('C','A2');assert(r.ok&&r.httpStatus===301&&!r.externalVerified&&!r.completionAuthorized);assert.equal(fetches,1);
for(const bad of ['http://example.com/','https://127.0.0.1/x','https://localhost/x','https://internal.local/x','https://example.com:8443/x','https://user:pass@example.com/x','https://example..com/x']){
 url=bad;r=ctx.sbmStrategyProbeMergeSourceHttp('C','A2');assert.equal(r.ok,false,bad);
}
assert.equal(fetches,1);
r=ctx.sbmStrategyProbeMergeSourceHttp('C','A9');assert.equal(r.ok,false);assert.equal(fetches,1);
console.log('10 HTTP probe assertions passed');
