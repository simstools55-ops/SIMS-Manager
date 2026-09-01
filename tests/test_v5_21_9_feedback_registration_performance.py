from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
CODE=(ROOT/"Code.gs").read_text(encoding="utf-8")

def test_version_patch():
    assert "const SBM_VERSION = '5.21.9';" in CODE
    assert (ROOT/"VERSION").read_text(encoding="utf-8").strip()=="5.21.9"

def test_feedback_append_uses_fast_schema_gate():
    start=CODE.index("function sbmAppendImprovementHistory_")
    end=CODE.index("function sbmUpdateEffectivenessSilent_", start)
    block=CODE[start:end]
    assert "sbmEnsureHistoryAndEffectSchemasFast_();" in block
    assert "sbmEnsureHistoryAndEffectSchemas_();" not in block

def test_fast_schema_gate_only_migrates_on_mismatch():
    start=CODE.index("function sbmEnsureHistoryAndEffectSchemasFast_")
    end=CODE.index("function sbmEnsureHistoryAndEffectSchemasIfEmpty_", start)
    block=CODE[start:end]
    assert "if (!exact) sbmMigrateSheetByHeaderNames_" in block

def test_registration_has_timing_laps():
    assert "FeedbackRegisterTiming" in CODE
    for token in ["article_db_written","history_written","personal_knowledge_done","completed"]:
        assert token in CODE
