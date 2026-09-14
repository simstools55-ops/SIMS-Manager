const fs=require('fs');
const vm=require('vm');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const full=fs.readFileSync(path.join(ROOT,'Code.gs'),'utf8');
const starter=fs.readFileSync(path.join(ROOT,'apps-script/starter/Code.gs'),'utf8');

function extract(code,name){
  const needle='function '+name+'(';
  const start=code.indexOf(needle); if(start<0) throw new Error('missing '+name);
  const brace=code.indexOf('{',start); let d=0,q=null,esc=false;
  for(let i=brace;i<code.length;i++){
    const c=code[i];
    if(q){if(esc)esc=false;else if(c==='\\')esc=true;else if(c===q)q=null;continue;}
    if(c==='"'||c==="'"||c==='`'){q=c;continue;}
    if(c==='{')d++;else if(c==='}'){d--;if(d===0)return code.slice(start,i+1);}
  }
  throw new Error('unterminated '+name);
}

const sandbox={};vm.createContext(sandbox);
vm.runInContext(extract(full,'sbmAppendConcreteImprovementInstructions_'),sandbox);
const advice=[
  '【検索結果で発熱・当日・LINE例文を明確にする】\nなぜ：順位9.3位・CTR0.3%で改善余地があります。\nどこを：SEOタイトルとメタディスクリプション\nどうする：「発熱」「当日」「LINE例文」を前半で明確にします。\n完了の目安：検索結果だけで記事内容を判断できる状態です。',
  '【記事冒頭から当日用例文へ案内する】\nなぜ：検索者はすぐ送れる例文を探しています。\nどこを：導入文の直後\nどうする：当日朝の短文例文への案内を置きます。\n完了の目安：冒頭から目的の例文へ進める状態です。'
];
const base='【改善目的】\nエース化\n【SIMSへのフィードバック出力ルール】\nJSONを出力';
const prompt=sandbox.sbmAppendConcreteImprovementInstructions_(base,advice);
if(!prompt.includes('【今回の記事で実施する具体的な改善指示】')) throw new Error('specific instruction section missing');
for(const item of advice) if(!prompt.includes(item)) throw new Error('screen advice not copied verbatim into writer prompt');
if(prompt.indexOf('【今回の記事で実施する具体的な改善指示】')>prompt.indexOf('【SIMSへのフィードバック出力ルール】')) throw new Error('specific instructions must precede feedback rules');

const finalize=extract(full,'sbmFinalizeImprovementNaviData');
if(!/advice=ready\?sbmBuildConcreteImprovementAdvice_/.test(finalize)) throw new Error('article-specific advice generation missing');
if(!/writerPrompt=ready&&!isStarter\?sbmAppendConcreteImprovementInstructions_\(baseWriterPrompt,advice\):baseWriterPrompt/.test(finalize)) throw new Error('Full writer prompt synchronization branch missing');
if(!/improvementAdvice:advice/.test(finalize)) throw new Error('same advice is not returned to the screen');
if(!full.includes('今回の記事で実施する改善ガイド')||!full.includes('具体的な改善内容を開く')) throw new Error('Full concrete-guide UI missing');
if(!starter.includes("const SBM_EDITION = 'STARTER';")) throw new Error('Starter marker missing');
if(starter.replace("const SBM_EDITION = 'STARTER';","const SBM_EDITION = 'FULL';",1)!==full) throw new Error('Full/Starter source drift');
console.log('PASS: one article-specific plan is shared verbatim by Full guide and aWriter request');
