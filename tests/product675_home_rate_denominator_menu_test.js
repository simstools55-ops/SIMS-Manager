const fs=require('fs');
const code=fs.readFileSync('Code.gs','utf8');
function must(s,msg){if(!code.includes(s))throw new Error(msg);}
function mustNot(s,msg){if(code.includes(s))throw new Error(msg);}
must("const SBM_VERSION = '6.7.75';",'version');
must(".addItem('0．HOME画面を更新','sbmRefreshHomeManual')",'menu refresh');
mustNot(".addItem('0．HOME画面を開く','sbmOpenHome')",'old menu remains');
must("Number(historyStats.improved||0)+'/'+Number(historyStats.assessed||0)+'件）'",'rate denominator display');
must("setValue('0%\\n（0/0件）').setWrap(true)",'initial rate display');
console.log('product675_home_rate_denominator_menu_test: PASS');
