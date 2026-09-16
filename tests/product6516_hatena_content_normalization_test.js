const fs=require('fs');
const vm=require('vm');
const crypto=require('crypto');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const code=fs.readFileSync(path.join(ROOT,'Code.gs'),'utf8');
function extract(name){
  const needle='function '+name+'(';
  const start=code.indexOf(needle); if(start<0) throw new Error('missing '+name);
  const tail=code.slice(start+needle.length);
  const m=tail.match(/\nfunction\s+[A-Za-z0-9_]+\s*\(/);
  const end=m ? start+needle.length+m.index : code.length;
  return code.slice(start,end).trim();
}
const promptHash=crypto.createHash('sha256').update(extract('sbmBuildImprovementPrompt_')).digest('hex');
const BASELINE='535465dc613e78b33e68a738d1b959f7e1930324001227701cb4be4179dcc4b4';
if(promptHash!==BASELINE) throw new Error('aWriter prompt function changed: '+promptHash);
const names=['sbmCleanHtmlText_','sbmExtractFirstH1_','sbmRegexEscape_','sbmNormalizeFetchedTitleTag_','sbmDecodeHtmlEntities_','sbmFindElementStartByClass_','sbmExtractBalancedElementInnerHtml_','sbmArticleBodyHtmlFromPage_','sbmArticleTextFromHtml_'];
const sandbox={console,sbmNormalizeUrl_:(x)=>String(x||'').trim(),sbmGetSetting_:()=>''};
vm.createContext(sandbox); vm.runInContext(names.map(extract).join('\n'),sandbox);
const filler='本文テスト'.repeat(80);
const html=`<!doctype html><html><head><title>Notion公開範囲の設定方法！安全な権限管理完全ガイド - infohackジャーナル</title></head><body>
<header><h1>infohackジャーナル</h1><h2>情報を整理して効率化を目指そう！！</h2></header>
<article class="entry hentry"><header><h1 class="entry-title">Notionの公開範囲設定完全ガイド：セキュリティを守る権限管理術</h1></header>
<div class="entry-content"><p>Notionの公開範囲について説明します。${filler}</p><h2>公開範囲の種類と特徴</h2><p>ウェブ公開などを解説します。</p><div><h3>ウェブ公開</h3><p>誰でもアクセスできます。</p></div></div>
<footer class="entry-footer"><h2>関連記事</h2><p>共通フッターです。</p></footer></article></body></html>`;
const seo=sandbox.sbmNormalizeFetchedTitleTag_('Notion公開範囲の設定方法！安全な権限管理完全ガイド - infohackジャーナル',html,'https://infohack.hatenadiary.com/entry/2026/01/09/043000','');
if(seo!=='Notion公開範囲の設定方法！安全な権限管理完全ガイド') throw new Error('Hatena blog name not stripped: '+seo);
const text=sandbox.sbmArticleTextFromHtml_(html,'https://infohack.hatenadiary.com/entry/2026/01/09/043000');
if(!text.includes('公開範囲の種類と特徴')||!text.includes('ウェブ公開')) throw new Error('article content missing: '+text.slice(0,400));
['infohackジャーナル','情報を整理して効率化を目指そう！！','Notionの公開範囲設定完全ガイド：セキュリティを守る権限管理術','関連記事','共通フッター'].forEach(x=>{if(text.includes(x)) throw new Error('site/common element leaked into article text: '+x);});
const generic=sandbox.sbmNormalizeFetchedTitleTag_('Windows 11 - Part 2','<h1>My Blog</h1>','https://example.com/post','');
if(generic!=='Windows 11 - Part 2') throw new Error('non-Hatena title was over-normalized: '+generic);
console.log('PASS: Hatena title suffix and common-page headings are excluded from SBM article source');
