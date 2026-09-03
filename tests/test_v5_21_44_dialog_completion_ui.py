from pathlib import Path
SRC = (Path(__file__).parents[1] / 'Code.gs').read_text()

def test_version():
    assert "const SBM_VERSION = '5.21.44';" in SRC

def test_creator_direct_hides_submit():
    assert 'b.style.display="none";document.getElementById("raw").disabled=true' in SRC

def test_writer_feedback_hides_completed_button():
    assert 'st.textContent="✓ 改善結果を登録しました。";b.style.display="none"' in SRC

def test_precision_writer_hides_completed_button():
    assert 'b.style.display="none";st.className="status ok";st.textContent=r.message||"aWriter処置結果を登録しました。"' in SRC

def test_precision_merge_hides_completed_button():
    assert 'b.style.display="none";st.className="status ok";st.textContent=r.message||"aMerge処置結果を登録しました。"' in SRC

def test_site_doctor_writer_hides_completed_button():
    assert 'b.style.display="none";status("writerStatus",r.message||"登録しました。","ok")' in SRC

def test_site_doctor_merge_hides_completed_button():
    assert 'b.style.display="none";var mj=document.getElementById("mergeJson")' in SRC

def test_merge_completion_hides_completed_button():
    assert 'status("mergeCompleteStatus",r.message||"モニター中へ移しました。","ok");b.style.display="none"' in SRC

def test_new_article_opportunity_hides_register_button():
    assert 'id="opportunityRegisterBtn"' in SRC
    assert 'if(b)b.style.display="none";e("answer").disabled=true;e("url").disabled=true' in SRC
