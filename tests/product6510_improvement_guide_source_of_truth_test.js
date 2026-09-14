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
  'sbmInternalLinkNormalizeText_','sbmInternalLinkTokens_','sbmInternalLinkTokenSet_','sbmInternalLinkOverlap_',
  'sbmImprovementAdviceTokens_','sbmImprovementAdviceOverlap_',
  'sbmImprovementGuidePolicyFromWriterPrompt_','sbmImprovementAdviceIntentTerms_',
  'sbmImprovementAdviceMissingIntentTerms_','sbmBuildConcreteImprovementAdvice_'
];
const sandbox={console}; vm.createContext(sandbox); vm.runInContext(names.map(extract).join('\n'),sandbox);
const writerPrompt='【変更方針】\n・既存本文は可能な限り維持してください。\n・SEOタイトル・導入文・H2見出し・FAQを優先して改善してください。\n・広告コードは変更しないでください。\n・商品リンク、アフィリエイトリンクは変更しないでください。\n';
const meta={query:'notion 背景色',imps:1000,topQueries:[
 {query:'notion ダークモード 解除',imps:29,position:9.3,ctr:0},
 {query:'ノーション 背景色変更',imps:10,position:3.9,ctr:0},
 {query:'notion 色変更',imps:7,position:7.6,ctr:0},
 {query:'notion background color',imps:1,position:5,ctr:0},
 {query:'notion 黒背景',imps:1,position:16,ctr:0}
]};
const source={introduction:'Notionで背景色を変える方法を解説します。',sections:[
 {level:2,heading:'まず整理：Notionの「背景色変更」は2種類ある',text:'Notionではブロック単位の背景色変更とページ全体のダークモードがあります。'},
 {level:2,heading:'Notionのダークモードと生産性について',text:'ダークモードを設定して利用できます。元に戻す場合はLightを選択します。'},
 {level:2,heading:'「notion 黒背景」にしたい場合',text:'黒背景にしたい場合はダークモードを使います。'},
 {level:2,heading:'FAQ',text:'ダークモードから元に戻すにはLightを選択します。'}
]};
const advice=sandbox.sbmBuildConcreteImprovementAdvice_(meta,source,writerPrompt);
if(!Array.isArray(advice)||advice.length!==1) throw new Error('expected exactly one actionable guide, got '+JSON.stringify(advice));
if(!advice[0].includes('notion ダークモード 解除')||!advice[0].includes('「解除」')) throw new Error('解除 gap guide missing');
if(/確認してください|利用者判断|ノーション 背景色変更|notion 色変更|notion background color|notion 黒背景/.test(advice.join('\n'))) throw new Error('non-actionable/query-list guide leaked: '+advice.join('\n'));
const noMaster=sandbox.sbmBuildConcreteImprovementAdvice_(meta,source,'');
if(noMaster.length!==0) throw new Error('guide must not be generated without canonical writer prompt');
console.log('PASS: aWriter prompt unchanged and improvement guide is canonical-derived/actionable-only');
