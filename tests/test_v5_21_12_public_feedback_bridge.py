from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CODE = (ROOT / "Code.gs").read_text(encoding="utf-8")

def test_version():
    assert "const SBM_VERSION = '5.21.12';" in CODE

def test_public_bridge_exists():
    assert "function sbmRegisterImprovementFeedbackJson(jsonText, expectedArticleId, expectedArticleUrl)" in CODE
    assert "function sbmRegisterImprovementFeedbackJson_(" not in CODE

def test_client_calls_public_bridge():
    assert ".sbmRegisterImprovementFeedbackJson(jsonText,meta.articleId,meta.url)" in CODE
    assert ".sbmRegisterImprovementFeedbackJson_(jsonText,meta.articleId,meta.url)" not in CODE

def test_raw_helper_stays_private():
    assert "function sbmRegisterImprovementFeedbackRaw_(raw, expectedArticleId, expectedArticleUrl)" in CODE
