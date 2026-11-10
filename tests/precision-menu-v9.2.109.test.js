const fs=require('fs'),assert=require('assert');
const s=fs.readFileSync(require('path').join(__dirname,'../apps-script/Code.gs'),'utf8');
const start=s.indexOf('function onOpen()'),end=s.indexOf('\nfunction ',start+10);
const menu=s.slice(start,end>start?end:undefined);
const today=menu.slice(menu.indexOf("createMenu('SIMS今日の作業')"),menu.indexOf('todayMenu.addToUi()'));
const health=menu.slice(menu.indexOf("createMenu('サイト健康診断')"),menu.indexOf('healthMenu.addToUi()'));
const cases=[
['legacy entries removed from Today',!today.includes("addItem('保存済み戦略案件を再開'")&&!today.includes("addItem('戦略案件を今日の改善へ反映'")],
['resume entry under Health',health.includes("addItem('精密診断の未完了案件を再開','sbmStrategyOpenSavedCases')")],
['refresh entry under Health',health.includes("addItem('精密診断案件を今日の改善へ反映','sbmStrategyRefreshTodayFromMenu')")],
['Full gating retained',health.includes('if(isFullEdition)')],
['legacy resume handler retained',s.includes('function sbmStrategyOpenSavedCases(){')],
['legacy refresh confirmation retained',s.includes("var choice=ui.alert('戦略案件を今日の改善へ反映'")],
['legacy navigator retained',s.includes('function sbmStrategyOpenNavigator(selectedCaseId){')],
['renamed dialog',s.includes("'精密診断・複数記事の処置');")],
];cases.forEach(([n,ok])=>{assert.ok(ok,n);console.log('PASS',n)});console.log('RESULT 8/8 PASS (static menu assertions)');
