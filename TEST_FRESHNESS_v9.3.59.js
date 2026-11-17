const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(__dirname+'/apps-script/Code.gs','utf8');
function extract(name,next){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction '+next+'(',a);assert(a>=0&&b>a);return source.slice(a,b)}
const fn=extract('sbmWriterFreshnessPromptText_','sbmBuildImprovementPrompt_');
const ctx={};vm.createContext(ctx);vm.runInContext(fn,ctx);
const cases=[
 {name:'価格・料金',body:'料金は月額980円です。',checks:['価格、料金','公式料金表','確認日','推測で書き換えない']},
 {name:'レビュー件数・評価',body:'レビュー件数は120件、評価は4.5です。',checks:['レビュー件数','評価点','掲載媒体','確認日時']},
 {name:'サービス変更',body:'旧サービス名で提供しています。',checks:['サービス名','提供終了・移行','旧名称','巻き戻さない']}
];
const instructions=ctx.sbmWriterFreshnessPromptText_();
for(const c of cases){for(const t of c.checks)assert(instructions.includes(t),c.name+': '+t);assert(instructions.includes('変更なし'));console.log('PASS '+c.name)}
assert(source.includes('sbmChangePolicyText_() + sbmWriterFreshnessPromptText_() + sbmWriterReadingPromptText_()'));
assert(instructions.includes('アフィリエイトリンク')&&instructions.includes('記事全体を改稿しない'));
console.log('PASS integration and non-destructive constraints');
