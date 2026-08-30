const fs=require('fs');
const path=require('path');
const code=fs.readFileSync(path.join(__dirname,'..','Code.base.gs'),'utf8');
function must(s){ if(!code.includes(s)) throw new Error('missing: '+s); }
function mustNot(s){ if(code.includes(s)) throw new Error('unexpected: '+s); }
must("const SBM_VERSION = '5.21.0';");
must("ui.createMenu('SIMS Manager')");
must("ui.createMenu('記事改善')");
must("ui.createMenu('記事診断・処置')");
must(".addItem('診断・処置スタート','sbmDoctorCreateRequestFromArticleList')");
must("ui.createMenu('サイト健康診断')");
must(".addItem('健康診断スタート','sbmDoctorRunHealthCheck')");
must("ui.createMenu('記事管理')");
must("ui.createMenu('設定・メンテナンス')");
must("function sbmGetTodayDisplayCount_() {\n  // Product v5.21.0: 「今日の改善」は5件固定。旧設定キーは互換用に残す。\n  return 5;");
mustNot(".addItem('4．今日の改善の表示件数を設定','sbmSetTodayDisplayCount')");
must("sh.getRange('A1:G1').merge().setValue('SIMS Manager  Home');");
must("sh.getRange('A2').setValue('サイト名');");
console.log('product5210_product_ui_static_test: PASS');
