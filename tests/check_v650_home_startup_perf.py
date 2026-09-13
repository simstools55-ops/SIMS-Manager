from pathlib import Path
import sys
root=Path(__file__).resolve().parents[1]
t=(root/'Code.gs').read_text(encoding='utf-8')
checks={
'onOpen skips all-sheet theme': "sbmApplyProductVisibleTabs_({applyTheme:false})" in t,
'version flush early': "sbmSyncHomeVersionOnly_();" in t and "SpreadsheetApp.flush();" in t,
'no duplicate openHome theme': "sbmRefreshHome_({light:true,liveArticle:false})" in t,
'snapshot survives product bump': "return obj&&obj.version===1?obj:null" in t,
'mono status direct paint': "STANDARD色を一瞬塗ってからMONOCHROMEへ戻す二重描画を廃止" in t,
'today presentation sync': "function sbmRefreshTodayPresentationOnly_()" in t and "sbmRefreshTodayPresentationOnly_();" in t,
'revenue labels': all(x in t for x in ['📈 エース化','💰 収益改善','🌱 育成改善','✅ 安全改善']),
}
fail=[k for k,v in checks.items() if not v]
if fail:
 print('FAIL:',fail);sys.exit(1)
print('PASS: v6.5.0 Home startup performance and Today presentation sync')
