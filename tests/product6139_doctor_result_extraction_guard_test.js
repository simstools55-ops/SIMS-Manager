const fs = require('fs');
const assert = require('assert');

const code = fs.readFileSync(__dirname + '/../Code.gs', 'utf8');
function fn(name) {
  const start = code.indexOf('function ' + name);
  assert(start >= 0, 'missing function ' + name);
  const brace = code.indexOf('{', start);
  let depth = 0, quote = '', esc = false;
  for (let i = brace; i < code.length; i++) {
    const c = code[i];
    if (quote) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return code.slice(start, i + 1);
  }
  throw new Error('unterminated function ' + name);
}

eval(fn('sbmDoctorBalancedJsonFrom_'));
eval(fn('sbmDoctorRepairMinorJsonSyntax_'));
eval(fn('sbmDoctorExtractResultJsonText_'));
eval(fn('sbmDoctorLooksLikeRequestPayload_'));

const caseId = 'CASE-20260909-A000116-001';
const request = JSON.stringify({
  format: 'SIMS_DOCTOR_SINGLE_CASE_REQUEST_V2',
  case_id: caseId,
  return_contract: {
    format: 'SIMS_DOCTOR_SINGLE_CASE_RESULT_V1',
    contract_version: '1.0',
    return_to: 'SIMS_BLOG_MANAGER'
  }
});
assert.throws(() => sbmDoctorExtractResultJsonText_(request, caseId), /DOCTOR_RESULT_JSON_EXTRACT_NOT_FOUND/);
assert.strictEqual(sbmDoctorLooksLikeRequestPayload_(request), true);

const result = JSON.stringify({
  format: 'SIMS_DOCTOR_CASE_RESULT_V2',
  contract_name: 'SIMS_DOCTOR_SINGLE_CASE_RESULT_V1',
  contract_version: '2.0',
  case_id: caseId,
  article_id: 'A000116',
  workflow_handoff: { next_action: 'WRITER' }
});
const extracted = JSON.parse(sbmDoctorExtractResultJsonText_(result, caseId));
assert.strictEqual(extracted.case_id, caseId);
assert.strictEqual(extracted.workflow_handoff.next_action, 'WRITER');

const mixed = request + '\n\nDoctor answer:\n```json\n' + result + '\n```';
const mixedExtracted = JSON.parse(sbmDoctorExtractResultJsonText_(mixed, caseId));
assert.strictEqual(mixedExtracted.case_id, caseId);

console.log('v6.1.39 Doctor result extraction guard: PASS');
