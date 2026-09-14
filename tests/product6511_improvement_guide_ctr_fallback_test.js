const fs=require('fs');
const vm=require('vm');
const crypto=require('crypto');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const code=fs.readFileSync(path.join(ROOT,'Code.gs'),'utf8');
function extract(name){
  const needle='function '+name+'(';
  const start=code.indexOf(needle); if(start<0) throw new Error('missing '+name);
  const brace=code.indexOf('{',start); let d=0,q=null,esc=false;
  for(let i=brace;i<code.length;i++){
    const c=code[i];
    if(q){ if(esc)esc=false; else if(c==='\\')esc=true; else if(c===q)q=null; continue; }
    if(c==='"'||c==="'"||c==='`'){q=c;continue;}
    if(c==='{')d++; else if(c==='}'){d--; if(d===0)return code.slice(start,i+1);}
  }
  throw new Error('unterminated '+name);
}
const promptFn=extract('sbmBuildImprovementPrompt_');
const promptHash=crypto.createHash('sha256').update(promptFn).digest('hex');
const BASELINE='535465dc613e78b33e68a738d1b959f7e1930324001227701cb4be4179dcc4b4';
if(promptHash!==BASELINE) throw new Error('aWriter prompt function changed: '+promptHash);
const names=[
  'sbmExpectedCtrTarget_','sbmInternalLinkNormalizeText_','sbmInternalLinkTokens_','sbmInternalLinkTokenSet_','sbmInternalLinkOverlap_',
  'sbmImprovementAdviceTokens_','sbmImprovementAdviceOverlap_','sbmImprovementGuidePolicyFromWriterPrompt_',
  'sbmImprovementAdviceIntentTerms_','sbmImprovementAdviceMissingIntentTerms_','sbmBuildConcreteImprovementAdvice_'
];
const sandbox={console}; vm.createContext(sandbox); vm.runInContext(names.map(extract).join('\n'),sandbox);
const writerPrompt='【変更方針】\n・既存本文は可能な限り維持してください。\n・SEOタイトル・導入文・H2見出し・FAQを優先して改善してください。\n・広告コードは変更しないでください。\n・商品リンク、アフィリエイトリンクは変更しないでください。\n';
const meta={
  query:'notion ブロック数 確認',title:'Notionブロック制限を完全解説！無料版の限界と5つの対処法',
  seoTitle:'Notionブロック制限を完全解説！無料版の限界と5つの対処法 - infohackジャーナル',
  description:'Notionのブロック制限、無料版の限界、上限に達した場合の対処法を解説します。',
  imps:1061,ctrText:'1.6%',posText:'8.6',topQueries:[
    {query:'notion ブロック数 確認',imps:140,position:8.2,ctr:0.014},
    {query:'notion ブロック 制限',imps:90,position:7.8,ctr:0.02}
  ]
};
const source={introduction:'Notionのブロック数や制限を確認したい人向けに、無料版の限界と対処法を解説します。',sections:[
  {level:2,heading:'Notionのブロック制限とは',text:'ブロック数の確認方法と上限について解説します。'},
  {level:2,heading:'無料版の限界',text:'無料版の制限を説明します。'},
  {level:2,heading:'FAQ',text:'ブロック数を確認する方法も紹介します。'}
]};
const advice=sandbox.sbmBuildConcreteImprovementAdvice_(meta,source,writerPrompt);
if(!Array.isArray(advice)||advice.length<1) throw new Error('CTR opportunity must not end with zero guides');
if(!advice[0].includes('検索結果')||!advice[0].includes('約25クリック')) throw new Error('CTR fallback guide missing: '+JSON.stringify(advice));
if(/確認してください|利用者判断/.test(advice.join('\n'))) throw new Error('non-actionable wording leaked');
console.log('PASS: CTR opportunity receives actionable guide while aWriter prompt remains unchanged');
