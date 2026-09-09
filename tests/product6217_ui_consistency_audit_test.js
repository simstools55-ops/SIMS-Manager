const fs=require('fs');
const s=fs.readFileSync(process.argv[2]||'Code.gs','utf8');
const checks=[
  ['version',/const SBM_VERSION = '6\.2\.17';/],
  ['unfinished counter',/へ依頼（未完了 /],
  ['skip explicit',/この処置を行わず終了/],
  ['copy confirmation',/コピーしました ✓/],
  ['merge restore wording',/aMerge Packageは短縮して保存されています/],
  ['multi merge completion guidance',/途中Stepでは次のaMerge Packageへ進み/],
  ['creator dialog name',/aCreator新規記事登録/],
  ['creator 28 days',/recommended_review_days:28/],
  ['creator monitorDays 28',/monitorDays:28/],
  ['single resume copy status',/requestCopyStatus/],
  ['no hardcoded old merge guidance',!s.includes('改善経路を <b>aDoctor→aMerge</b> として28日後')],
  ['no old ambiguous button',!s.includes('onclick="skipCurrentTreatment()">処置せず終了</button>')]
];
let ok=true;
for(const [name,test] of checks){const pass=typeof test==='boolean'?test:test.test(s); console.log((pass?'PASS':'FAIL')+' '+name); if(!pass)ok=false;}
if(!ok)process.exit(1);
