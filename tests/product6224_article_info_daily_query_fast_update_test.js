const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
const checks=[
 ['version 6.2.24',s.includes("const SBM_VERSION = '6.2.24';")],
 ['daily main query batch helper',s.includes('function sbmFetchDailyMainQueryMap_(')],
 ['single query-page API batch',s.includes("dimensions:['query','page'],rowLimit:limit")],
 ['daily query candidates only missing with impressions',s.includes('map[url].impressions>0&&qMissing')],
 ['daily fresh rows carry main query',s.includes("String((queryBatch.map||{})[url]||'')")],
 ['daily merge only fills missing query',s.includes('oldMainMissing&&freshMain') && s.includes("r['メインクエリ']=freshMain")],
 ['daily merge writes main query column',s.includes("['記事URL'],['メインクエリ'],['クリック数'")],
 ['worker contains no sbmFetchMainQueryForUrl call',(()=>{const m=s.match(/function sbmArticleInfoUpdateWorker_\(\) \{[\s\S]*?\n\}\n\nfunction sbmSupplementNewArticlesManual/);return !!m&&!m[0].includes('sbmFetchMainQueryForUrl_(');})()],
 ['article update uses fetchAll meta batch',s.includes('sbmFetchArticleMetaInfoBatch_(targets.map')],
 ['web chunk size 8',s.includes('var webBatch = 8;')],
 ['client auto continuation',s.includes('d.continuationRequired') && s.includes('runChunk();')],
 ['audit is local only copy',s.includes('この点検ではSearch Consoleや記事ページへのアクセスは行いません。')],
 ['query routed to daily copy',s.includes('次回の日次処理で確認') && s.includes('実測メインクエリはここでは取得しません。')],
 ['duplicate inner h2 removed',!s.includes('<h2>記事情報を更新</h2>')],
 ['cached audit',s.includes('article-info-audit-v6224') && s.includes('sbmArticleInfoUpdateAuditCache_')],
 ['daily completion shows query updated',s.includes('実測メインクエリ補完')],
];
let fail=0;for(const [n,ok] of checks){console.log((ok?'PASS':'FAIL')+' '+n);if(!ok)fail++;}if(fail)process.exit(1);
