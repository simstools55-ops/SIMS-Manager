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

const sandbox={}; vm.createContext(sandbox);
vm.runInContext(extract(full,'sbmBuildWriterRequestAlignedGuide_'),sandbox);
const prompt='【改善目的】\n📈 エース化。検索意図を優先し、既存記事の良い部分を残したまま改善してください。\n'+
  '【改善優先順位】\n1. SEOタイトル\n2. 導入文\n3. H2見出し\n4. FAQ\n5. 本文\n6. 画像\n'+
  '【変更方針】\n・既存本文は可能な限り維持してください。\n・広告コードは変更しないでください。\n・商品リンク、アフィリエイトリンクは変更しないでください。\n';
const guide=sandbox.sbmBuildWriterRequestAlignedGuide_({query:'windows11 設定'},prompt);
if(!Array.isArray(guide)||guide.length!==3) throw new Error('expected three writer-derived guide cards: '+JSON.stringify(guide));
const joined=guide.join('\n');
for(const required of ['📈 エース化','SEOタイトル → 導入文 → H2見出し → FAQ → 本文 → 画像','広告コードは変更しないでください。']){
  if(!joined.includes(required)) throw new Error('writer request content missing: '+required);
}
if(joined.includes('今回の方針')||joined.includes('CTR機会値')) throw new Error('removed wording leaked into Full guide');

const finalize=extract(full,'sbmFinalizeImprovementNaviData');
if(!/isStarter\?sbmBuildConcreteImprovementAdvice_\([\s\S]*?:sbmBuildWriterRequestAlignedGuide_/.test(finalize)){
  throw new Error('Full/Starter improvement guide branch missing');
}
if(!starter.includes("const SBM_EDITION = 'STARTER';")) throw new Error('Starter edition marker missing');
if(starter.replace("const SBM_EDITION = 'STARTER';","const SBM_EDITION = 'FULL';",1)!==full) throw new Error('Full/Starter source drift');

const todayReason=extract(full,'sbmTodayReason_');
if(todayReason.includes('CTR機会値')||todayReason.includes('今回の方針')) throw new Error('legacy Today wording remains');
if(!todayReason.includes('現在の表示回数とCTRから計算すると')) throw new Error('plain CTR explanation missing');
console.log('PASS: Full guide follows aWriter request; Starter guide path remains unchanged');
