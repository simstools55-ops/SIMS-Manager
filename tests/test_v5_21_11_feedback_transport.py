from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CODE = (ROOT / "Code.gs").read_text(encoding="utf-8")

def test_version():
    assert "const SBM_VERSION = '5.21.11';" in CODE

def test_client_extracts_feedback_json_before_server_call():
    assert "function extractFeedbackJson(raw)" in CODE
    assert ".sbmRegisterImprovementFeedbackJson_(jsonText,meta.articleId,meta.url)" in CODE
    assert ".sbmRegisterImprovementFeedbackRaw_(raw,meta.articleId,meta.url)" not in CODE

def test_first_server_trace_for_json_transport():
    assert "function sbmRegisterImprovementFeedbackJson_" in CODE
    assert "CLIENT_JSON_RECEIVED" in CODE

def test_direct_registration_ux_is_preserved():
    assert "✅ 改善結果を登録" in CODE
    assert "この内容で登録" in CODE  # legacy dialog may remain; navigator path is direct
