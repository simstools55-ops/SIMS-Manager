from pathlib import Path

CODE=Path(__file__).resolve().parents[1]/"Code.gs"
S=CODE.read_text(encoding="utf-8")

def test_version(): assert "const SBM_VERSION = '5.21.14';" in S
def test_home_refresh_deferred():
    block=S[S.index("function sbmRegisterImprovementFeedback(data, options)"):S.index("function sbmFindArticleDbByIdentity_") ]
    assert "sbmInvalidateHomeSnapshot_();" in block
    assert "sbmRefreshHome_({light:true})" not in block
def test_post_traces():
    for t in ["REGISTER_POST_START","REGISTER_SETTING_DONE","REGISTER_TODAY_DONE","REGISTER_HOME_DEFERRED"]: assert t in S
