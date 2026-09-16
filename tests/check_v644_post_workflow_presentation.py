from pathlib import Path
import sys,re
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
 'helper':'function sbmFinishUserSheetPresentation_(targets)' in c,
 'article_style':'sbmStyleArticleDbSheet_(article)' in c and 'sbmApplyArticleDbDisplayTheme_(article)' in c,
 'effect_style':'sbmStyleEffectSheetViewOnly_(effect)' in c and 'sbmApplyEffectDisplayTheme_(effect)' in c,
 'history_style':'sbmEnsureImprovementHistoryViewLight_()' in c and 'sbmApplyHistoryDisplayTheme_(history)' in c,
 'creator':"sbmFinishUserSheetPresentation_({article:true,effect:true,history:true})" in c,
 'writer':"ignoreWriterPresentation" in c,
 'merge':"ignoreMergePresentation" in c,
 'close':"ignoreClosePresentation" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.4.4 post-workflow presentation finishing')
