from pathlib import Path
p=Path(__file__).resolve().parents[1]/'Code.gs'
s=p.read_text(encoding='utf-8')
checks=[
    "function sbmArticleDetailDoctorEligibility_(o)",
    "rankCode==='UNGERMINATED'||rankCode==='SPROUT'",
    "if(flag==='要改善')return {eligible:true",
    "if(work.indexOf('改善中')>=0||work.indexOf('処置中')>=0)return {type:'NAVI'",
    "if(doctor.eligible)return {type:'DOCTOR'",
    "if(work.indexOf('今日の改善')>=0)return {type:'NAVI'",
    "function sbmDoctorCreateRequestFromArticleDetailTriage(articleId,url)",
    "この記事は現在、記事詳細からaDoctorへ送る対象ではありません。",
    "if(action==='DOCTOR')return sbmDoctorCreateRequestFromArticleDetailTriage(articleId,url);",
]
missing=[x for x in checks if x not in s]
if missing:
    print('FAIL:', *missing, sep='\n- ')
    raise SystemExit(1)
# Critical precedence: already-started workflow must stay NAVI; low-rank triage must beat not-yet-started 今日の改善.
a=s.index("if(work.indexOf('改善中')>=0||work.indexOf('処置中')>=0)return {type:'NAVI'")
b=s.index("if(doctor.eligible)return {type:'DOCTOR'")
c=s.index("if(work.indexOf('今日の改善')>=0)return {type:'NAVI'")
assert a < b < c, (a,b,c)
# Monitoring and review gates remain ahead of rank triage.
assert s.index("if(flag==='インデックス要確認')return {type:'INDEX_REVIEW'") < b
assert s.index("if(flag==='要確認')return {type:'NEEDS_REVIEW'") < b
assert s.index("if(work.indexOf('モニター')>=0)return {type:'EFFECT'") < b
print('PASS: v6.4.6 article-detail diagnosis triage')
