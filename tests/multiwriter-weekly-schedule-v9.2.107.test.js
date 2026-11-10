 'use strict';
process.env.TZ='Asia/Tokyo';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
function extract(name){const start=src.indexOf('function '+name+'(');assert(start>=0,name);const open=src.indexOf('{',start);let depth=0,q='',esc=false,line=false,block=false;for(let i=open;i<src.length;i++){const c=src[i],n=src[i+1];if(line){if(c==='\n')line=false;continue;}if(block){if(c==='*'&&n==='/'){block=false;i++;}continue;}if(q){if(esc){esc=false;continue;}if(c==='\\'){esc=true;continue;}if(c===q)q='';continue;}if(c==='/'&&n==='/'){line=true;i++;continue;}if(c==='/'&&n==='*'){block=true;i++;continue;}if(c==='"'||c==="'"||c==='`'){q=c;continue;}if(c==='{')depth++;else if(c==='}'&&--depth===0)return src.slice(start,i+1);}throw Error('function end not found '+name);}
const names=['sbmHistoryExtraMeasurements_','sbmHistoryTargetMeasurementCount_','sbmHistoryMeasurementState_','sbmNextWeeklyDueDate_','sbmMeasurementDueStatus_'];
const ctx={Date,JSON,Number,String,isFinite,Math,Array,Utilities:{formatDate:(date,tz,fmt)=>{assert.equal(tz,'Asia/Tokyo');assert.equal(fmt,'yyyyMMdd');return new Intl.DateTimeFormat('en-CA',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit'}).format(date).replace(/\D/g,'');}},sbmParseDate_:v=>v?new Date(String(v)+'T00:00:00+09:00'):null};vm.createContext(ctx);for(const name of names)vm.runInContext(extract(name),ctx);
const base={'改善日':'2026-10-01'};let count=0;function check(label,fn){fn();count++;console.log('PASS',label);}
function row(n){let r={...base};for(let i=1;i<=n;i++)r[i+'回目測定日時']='2026-10-'+String(1+i*7).padStart(2,'0');return r;}
function day(d){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(d);}
check('first measurement due day 7',()=>assert.equal(day(ctx.sbmNextWeeklyDueDate_(row(0))),'2026-10-08'));
check('second measurement due day 14',()=>assert.equal(day(ctx.sbmNextWeeklyDueDate_(row(1))),'2026-10-15'));
check('third measurement due day 21',()=>assert.equal(day(ctx.sbmNextWeeklyDueDate_(row(2))),'2026-10-22'));
check('fourth measurement due day 28',()=>assert.equal(day(ctx.sbmNextWeeklyDueDate_(row(3))),'2026-10-29'));
check('four measurements mark history complete',()=>{const r=row(4);assert.equal(ctx.sbmHistoryMeasurementState_(r).complete,true);assert.equal(ctx.sbmNextWeeklyDueDate_(r),null)});
check('before due date not reached',()=>{const r=ctx.sbmMeasurementDueStatus_(row(0),new Date('2026-10-07T12:00:00+09:00'));assert.equal(r.reached,false);assert.equal(r.overdue,false)});
check('on due date reached not overdue',()=>{const r=ctx.sbmMeasurementDueStatus_(row(0),new Date('2026-10-08T23:59:00+09:00'));assert.equal(r.reached,true);assert.equal(r.overdue,false)});
check('following day overdue',()=>{const r=ctx.sbmMeasurementDueStatus_(row(0),new Date('2026-10-09T00:01:00+09:00'));assert.equal(r.reached,true);assert.equal(r.overdue,true)});
check('missed measurement remains due without increment',()=>{const r=row(1);assert.equal(day(ctx.sbmNextWeeklyDueDate_(r)),'2026-10-15');assert.equal(ctx.sbmMeasurementDueStatus_(r,new Date('2026-11-10T12:00:00+09:00')).overdue,true)});
check('extended monitoring target 6',()=>{const r=row(4);r['観察予定回数']=6;assert.equal(ctx.sbmHistoryMeasurementState_(r).complete,false);assert.equal(day(ctx.sbmNextWeeklyDueDate_(r)),'2026-11-05')});
check('additional measurement count 5 advances schedule',()=>{const r=row(4);r['観察予定回数']=6;r['追加測定JSON']=JSON.stringify([{count:5,measured_at:'2026-11-05'}]);assert.equal(ctx.sbmHistoryMeasurementState_(r).count,5);assert.equal(day(ctx.sbmNextWeeklyDueDate_(r)),'2026-11-12')});
check('two article histories retain independent schedules',()=>{const a=row(1),b=row(3);assert.equal(day(ctx.sbmNextWeeklyDueDate_(a)),'2026-10-15');assert.equal(day(ctx.sbmNextWeeklyDueDate_(b)),'2026-10-29')});
console.log('RESULT',count+'/'+count,'PASS');
