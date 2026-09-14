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
const promptHash=crypto.createHash('sha256').update(extract('sbmBuildImprovementPrompt_')).digest('hex');
const BASELINE='535465dc613e78b33e68a738d1b959f7e1930324001227701cb4be4179dcc4b4';
if(promptHash!==BASELINE) throw new Error('aWriter prompt function changed: '+promptHash);
const names=['sbmExpectedCtrTarget_','sbmInternalLinkNormalizeText_','sbmInternalLinkTokens_','sbmInternalLinkTokenSet_','sbmInternalLinkOverlap_','sbmImprovementAdviceTokens_','sbmImprovementAdviceOverlap_','sbmImprovementGuidePolicyFromWriterPrompt_','sbmImprovementAdviceIntentTerms_','sbmImprovementAdviceMissingIntentTerms_','sbmImprovementStructuralTerms_','sbmImprovementMissingStructuralTerms_','sbmBuildConcreteImprovementAdvice_'];
const sandbox={console}; vm.createContext(sandbox); vm.runInContext(names.map(extract).join('\n'),sandbox);
const writerPrompt='【変更方針】\n・既存本文は可能な限り維持してください。\n・SEOタイトル・導入文・H2見出し・FAQを優先して改善してください。\n・広告コードは変更しないでください。\n・商品リンク、アフィリエイトリンクは変更しないでください。\n';
const meta={rank:'育成',query:'windows11 wifi 接続できない',title:'Windows11のWi-Fiトラブル対処法',seoTitle:'Windows11のWi-Fiトラブル対処法',description:'Windows11でWi-Fiの問題を解決する方法を解説。',imps:1800,ctrText:'1.3%',posText:'7.8',topQueries:[
 {query:'windows11 wifi 接続できない',imps:410,position:7.8,ctr:.013},
 {query:'windows11 wifi 表示されない',imps:120,position:9.1,ctr:.008}
]};
const source={introduction:'Windows11でWi-Fiに問題があるときの対処法を順番に紹介します。',sections:[
 {level:2,heading:'最初に確認すること',text:'まず機内モードとルーターの状態を見ます。設定画面も確認します。しばらく確認したあと、Wi-Fiに接続できない場合はネットワークをリセットします。'},
 {level:2,heading:'ネットワークアダプターを確認する',text:'Wi-Fiが表示されない場合はネットワークアダプターを確認します。'},
 {level:2,heading:'FAQ',text:'再起動やドライバー更新について説明します。'}
]};
const advice=sandbox.sbmBuildConcreteImprovementAdvice_(meta,source,writerPrompt);
if(advice.length<4) throw new Error('expected deeper training-rank themes, got '+JSON.stringify(advice));
const joined=advice.join('\n');
if(!joined.includes('検索結果')||!joined.includes('見出し')||!joined.includes('導入文')||(!joined.includes('セクションの冒頭')&&!joined.includes('FAQ'))) throw new Error('missing rank-depth guide theme: '+joined);
if(/aWriter|Writer依頼文|利用者判断|確認してください/.test(joined)) throw new Error('internal/non-actionable wording leaked: '+joined);
console.log('PASS: training rank receives deeper non-quota improvement diagnosis');
