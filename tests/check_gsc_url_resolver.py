from pathlib import Path
import sys,re
code=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
checks={
 "variants":"function sbmGscUrlVariants_" in code,
 "cache_get":"function sbmGscMatchedUrlGet_" in code,
 "cache_put":"function sbmGscMatchedUrlPut_" in code,
 "chunked":"function sbmGscFetchAllChunked_" in code and "Math.min(100" in code,
 "batch_stage1":"Stage 1: cached matched URL first" in code,
 "batch_slash":"Stage 2: unresolved only, trailing-slash counterpart" in code,
 "batch_other":"Stage 3: unresolved only, remaining exact variants" in code,
 "batch_no_contains":"Heavy contains fallback is reserved for single-article" in code,
 "single_contains":"CONTAINS_NORMALIZED" in code,
 "six_month_common":"sbmGscFetchQueryRowsResolved_(originalUrl||norm,range,10,true)" in code,
 "navi_common":"sbmGscFetchQueryRowsResolved_(originalUrl||normalizedUrl,range,Math.max(QUERY_ROW_LIMIT,250),true)" in code,
 "matched_url":"matchedUrl:String(resolved.matchedUrl||'')" in code,
}
bad=[k for k,v in checks.items() if not v]
if bad:
    print("FAIL:",", ".join(bad));sys.exit(1)
print("PASS: staged GSC URL resolver")
