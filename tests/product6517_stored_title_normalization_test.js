const fs=require('fs');
const vm=require('vm');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const code=fs.readFileSync(path.join(ROOT,'Code.gs'),'utf8');
function extract(name){
  const needle='function '+name+'(';
  const start=code.indexOf(needle); if(start<0) throw new Error('missing '+name);
  let i=code.indexOf('{',start),depth=0,inStr=false,quote='',esc=false;
  for(;i<code.length;i++){
    const ch=code[i];
    if(inStr){ if(esc){esc=false;continue;} if(ch==='\\'){esc=true;continue;} if(ch===quote){inStr=false;quote='';} continue; }
    if(ch==='"'||ch==="'"||ch==='`'){inStr=true;quote=ch;continue;}
    if(ch==='{')depth++; else if(ch==='}'){depth--;if(depth===0)return code.slice(start,i+1);}
  }
  throw new Error('unterminated '+name);
}
const sandbox={
  console,
  sbmNormalizeUrl_:x=>String(x||'').trim(),
  sbmGetSetting_:(k)=>k==='BlogName'?'infohackジャーナル':'',
  sbmCleanHtmlText_:x=>String(x||'').replace(/<[^>]+>/g,'').trim()
};
vm.createContext(sandbox);
vm.runInContext([extract('sbmRegexEscape_'),extract('sbmCleanDataListText_'),extract('sbmNormalizeStoredTitle_'),extract('sbmStoredTitleNeedsLocalNormalization_')].join('\n'),sandbox);
const dirty='Notionの危険性とは？2026年最新のセキュリティリスクと安全対策を徹底解説 - infohackジャーナル';
const clean='Notionの危険性とは？2026年最新のセキュリティリスクと安全対策を徹底解説';
if(sandbox.sbmNormalizeStoredTitle_(dirty,'https://infohack.hatenadiary.com/entry/x')!==clean) throw new Error('configured blog suffix not removed');
if(!sandbox.sbmStoredTitleNeedsLocalNormalization_(dirty,'https://infohack.hatenadiary.com/entry/x')) throw new Error('dirty stored title not detected');
if(sandbox.sbmNormalizeStoredTitle_(clean,'https://infohack.hatenadiary.com/entry/x')!==clean) throw new Error('clean title changed');
if(sandbox.sbmStoredTitleNeedsLocalNormalization_(clean,'https://infohack.hatenadiary.com/entry/x')) throw new Error('clean title falsely flagged');
const unrelated='比較記事 - 別サイト名';
if(sandbox.sbmNormalizeStoredTitle_(unrelated,'https://infohack.hatenadiary.com/entry/x')!==unrelated) throw new Error('unrelated suffix over-normalized');
// Article-info worker must separate local normalization from network fetch.
const worker=extract('sbmArticleInfoUpdateOne_');
if(!worker.includes('titleNeedsLocalFix')) throw new Error('local-fix branch missing');
if(!worker.includes('if (titleNeedsLocalFix)')) throw new Error('local-fix guard missing');
if(!worker.includes('if (titleNeeds) {\n    var meta=sbmFetchArticleMetaInfo_')) throw new Error('network fetch is not restricted to missing/placeholder titles');
// Today detail route must use the clicked row directly, not re-search a now-cleared checkbox.
const brief=extract('sbmShowBriefForRow_');
if(brief.includes('sbmOpenSelectedImprovementNavi()')) throw new Error('Today detail still depends on checked-row rediscovery');
if(!brief.includes('sbmStartNormalImprovementAndShow_')) throw new Error('Today detail direct launch missing');
console.log('PASS: clean stored titles are untouched, configured blog suffix is locally repaired, and Today detail opens directly');
