from pathlib import Path
import sys
code=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
 'candidate_dynamic_width': "var lastCol=Math.max(1,cand.getLastColumn());" in code and "cand.getRange(1,1,1,lastCol)" in code,
 'neutral_work': "'.work,.reason,.source-loading,.registerStatus.busy,.query-details summary{background:#f1f3f4!important;color:#3c4043!important" in code,
 'semantic_success': "'.good,.ok,.success{color:#0b8043!important}" in code,
 'semantic_warning': "'.warn,.warning{color:#8a4b00!important}" in code,
 'semantic_danger': "'.err,.error,.errline,.danger{color:#b31412!important}" in code,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: monochrome final UI hierarchy')
