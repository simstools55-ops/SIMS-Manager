from pathlib import Path
p=Path(__file__).resolve().parents[1]/'Code.gs'
s=p.read_text(encoding='utf-8')
checks=[
 "function sbmDoctorQualityInterventionPolicy_(rankCode)",
 "'CONTENT_QUALITY_REVIEW','INTERVENTION_RISK_REVIEW'",
 "treatment_policy:sbmDoctorQualityInterventionPolicy_(articleRankCode)",
 "if (s.indexOf('発芽')>=0) return 'SPROUT';",
 "separate_quality_from_performance:true",
 "UNGERMINATED:{protection_level:'LOW'",
 "STABLE:{protection_level:'HIGH'",
 "GROWTH:{protection_level:'VERY_HIGH'",
 "ACE:{protection_level:'MAXIMUM'",
 "quality_assessment_required:true"
]
missing=[x for x in checks if x not in s]
if missing:
 print('FAIL:', *missing, sep='\n- '); raise SystemExit(1)
# Ensure rank order mapping checks specific labels before generic 発芽.
assert s.index("if (s.indexOf('未発芽')>=0)") < s.index("if (s.indexOf('発芽')>=0)")
print('PASS: v6.4.5 rank-aware content quality intervention diagnosis')
