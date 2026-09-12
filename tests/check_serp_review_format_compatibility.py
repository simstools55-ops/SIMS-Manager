from pathlib import Path
import sys

code=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')

checks={
    'request_v2': "'  \"format\": \"SIMS_MANAGER_SERP_ENTRY_REVIEW_V2\",'" in code,
    'extractor_accepts_v2': "f==='SIMS_MANAGER_SERP_ENTRY_REVIEW_V2'" in code,
    'extractor_accepts_v1': "f==='SIMS_MANAGER_SERP_ENTRY_REVIEW_V1'" in code,
    'error_mentions_both': "SIMS_MANAGER_SERP_ENTRY_REVIEW_V2 / V1" in code,
}
bad=[k for k,v in checks.items() if not v]
if bad:
    print('FAIL:', ', '.join(bad))
    sys.exit(1)
print('PASS: SERP review request/response format compatibility')
