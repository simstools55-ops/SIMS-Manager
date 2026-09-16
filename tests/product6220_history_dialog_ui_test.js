const fs=require('fs');
const code=fs.readFileSync(process.argv[2]||'Code.gs','utf8');
const checks={"version": true, "common_css": true, "common_header": true, "common_close": true, "effect_common": true, "selected_history_common": true, "all_history_common": true, "history_detail_common": true, "no_legacy_selected_inline": true};
let fail=0; for(const [k,v] of Object.entries(checks)){ console.log((v?'PASS ':'FAIL ')+k); if(!v) fail++; } process.exit(fail?1:0);
