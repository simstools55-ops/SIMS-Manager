const fs=require('fs');
const vm=require('vm');
const paths=['Code.gs','apps-script/full/Code.gs','editions/full/Code.gs','apps-script/starter/Code.gs','editions/starter/Code.gs'];
for(const p of paths){
  const code=fs.readFileSync(p,'utf8');
  const start=code.indexOf('function sbmShowImprovementNaviDialog_');
  const marker='\n}\n\n/** Homeを記事DBと設定だけから更新する現行版。 */';
  const markerPos=code.indexOf(marker,start);
  if(start<0||markerPos<0) throw new Error(p+': improvement navi function not found');
  const fn=code.slice(start,markerPos+2);
  let captured='';
  const ctx={
    SpreadsheetApp:{getActiveSpreadsheet(){return {}}},
    SBM_EDITION:p.includes('starter')?'STARTER':'FULL',
    sbmCleanDataListText_:x=>x||'', sbmNormalizeStoredTitle_:x=>x||'', sbmGetSetting_:()=>'', sbmRealMainQuery_:x=>x||'',
    sbmNumber_:x=>Number(x)||0, sbmNormalizeCtrNumber_:x=>Number(x)||0,
    sbmExpectedCtrTarget_:()=>0.05,
    HtmlService:{createHtmlOutput(s){return {s,width:0,height:0,setWidth(w){this.width=w;return this},setHeight(h){this.height=h;return this},getContent(){return this.s},getWidth(){return this.width},getHeight(){return this.height}}}},
    sbmEnsureCloseButton_:x=>x,
    sbmShowThemedModalDialog_:(x)=>{captured=x.getContent()},
    console
  };
  vm.createContext(ctx);
  vm.runInContext(fn,ctx);
  ctx.sbmShowImprovementNaviDialog_({'記事URL':'https://example.com/a','記事タイトル':'Title','メインクエリ':'foo','記事ランク':'成長','作業状態':'未着手','クリック数':1,'表示回数':100,'CTR':0.01,'掲載順位':4,'ArticleID':'A1','SEOタイトル':'seo','メタディスクリプション':'desc'},'通常改善','reason');
  const m=captured.match(/<script>([\s\S]*?)<\/script>/i);
  if(!m) throw new Error(p+': client script missing');
  new Function(m[1]);
  if(!m[1].includes('sbmLoadImprovementNaviQueries(seed)')) throw new Error(p+': query loader call missing');
  if(!m[1].includes('sbmLoadImprovementNaviSource(seed)')) throw new Error(p+': source loader call missing');
  if(!m[1].includes('startImprovementDetailLoad')) throw new Error(p+': init guard missing');
  console.log('PASS',p);
}
