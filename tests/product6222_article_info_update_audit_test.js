const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
const checks=[
 ['current version',s.includes("const SBM_VERSION = '6.2.24';")],
 ['audit helper',s.includes('function sbmArticleInfoUpdateAudit_(')],
 ['user-facing dialog',s.includes('function sbmOpenArticleInfoUpdate()')],
 ['real query distinction',s.includes('sbmIsInferredQueryDisplay_(rawQuery)')],
 ['search exposure waiting split',s.includes('queryDailyTarget') && s.includes('queryWaiting')],
 ['all-db worker',s.includes('function sbmArticleInfoUpdateWorker_()')],
 ['title update',s.includes("updates['記事タイトル']=fetchedTitle")],
 ['seo update',s.includes("updates['SEOタイトル']=fetchedSeo")],
 ['description update',s.includes("updates['メタディスクリプション']=fetchedDesc")],
 ['menu uses new dialog',s.includes(".addItem('記事情報を更新','sbmOpenArticleInfoUpdate')")],
 ['legacy alias retained',/function sbmSupplementNewArticlesManual\(\) \{[\s\S]*?return sbmOpenArticleInfoUpdate\(\);/.test(s)],
 ['query acquisition moved to daily',s.includes('function sbmFetchDailyMainQueryMap_(')]
];let fail=0;for(const [n,ok] of checks){console.log((ok?'PASS':'FAIL')+' '+n);if(!ok)fail++;}if(fail)process.exit(1);
