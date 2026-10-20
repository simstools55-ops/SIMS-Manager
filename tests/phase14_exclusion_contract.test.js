const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(require('path').join(__dirname,'..','Code.gs'),'utf8');
function extract(name){let i=src.indexOf('function '+name+'(');if(i<0)throw Error('missing '+name);let start=src.indexOf('{',i),depth=0;for(let j=start;j<src.length;j++){if(src[j]==='{')depth++;if(src[j]==='}'&&!--depth)return src.slice(i,j+1);}throw Error('unclosed '+name);}
const names=['sbmInfoChangeInterruptionCode_','sbmInfoChangeHistoryIsInterrupted_','sbmInfoChangePartitionCycles_','sbmInfoChangeCheckExclusionContract_'];
const sandbox={};vm.createContext(sandbox);vm.runInContext(names.map(extract).join('\n'),sandbox);
const run=(rows)=>JSON.parse(JSON.stringify(sandbox.sbmInfoChangeCheckExclusionContract_(rows)));
const base=[{'改善履歴ID':'H1','モニター状態':'完了'},{'改善履歴ID':'H2','モニター状態':'INTERRUPTED_INFO_UPDATE'},{'改善履歴ID':'H3','効果測定状態':'interrupted_info_update'}];
assert.deepStrictEqual(run(base),{ok:true,total:3,included:1,interrupted:2,excludedIds:['H2','H3'],productionAggregationWired:false});
assert.equal(run([{'改善履歴ID':'H1'},{'改善履歴ID':'H1'}]).ok,false);
assert.equal(run([{'改善履歴ID':''}]).ok,false);
assert.equal(run([null]).ok,false);
assert.equal(run('invalid').ok,false);
assert.equal(run(base).productionAggregationWired,false);
assert.equal(base[1]['モニター状態'],'INTERRUPTED_INFO_UPDATE');
console.log('PASS: 7 classification and fail-closed assertions');
