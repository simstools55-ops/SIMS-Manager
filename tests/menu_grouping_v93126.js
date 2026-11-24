const assert=require("assert");
function sbmBuildGroupedTopMenus_(ui) {
  var groups = sbmSidebarMenuGroups_();
  var isFullEdition = sbmEffectiveEdition_() === 'FULL';
  function sub(group, title, filter) {
    var menu = ui.createMenu(title || group.title);
    group.items.filter(filter || function(){return true;}).forEach(function(item){
      var handler = item.id === 'sbmOpenImprovementStatus' ? 'sbmSidebarOpenImprovementStatusViewOnlyV9365_' : item.id === 'sbmOpenSheetRepairDialogV9372' ? 'sbmOpenSheetRepairDialogV9372_' : item.id;
      menu.addItem(item.label, handler);
    });
    return menu;
  }
  var daily = ui.createMenu('今日の改善').addItem('操作パネルを開く','sbmOpenManagerSidebar');
  groups.slice(0,4).forEach(function(group){daily.addSubMenu(sub(group));});
  daily.addToUi();
  var health = ui.createMenu('サイト健康診断');
  health.addSubMenu(sub(groups[4], 'サイトの健康診断', function(item){return item.id === 'sbmDoctorRunHealthCheck' || item.id === 'sbmDoctorOpenHealthReport';}));
  if (isFullEdition) {
    var precisionMenu = sub(groups[4], '記事の精密診断', function(item){return item.id !== 'sbmDoctorRunHealthCheck' && item.id !== 'sbmDoctorOpenHealthReport';});
    // 旧Case保守メニューは通常利用者には非表示。関数本体は互換性のため保持する。
    // 必要な保守時のみ Script Properties の SBM_SHOW_LEGACY_PRECISION_MAINTENANCE_MENU=true を設定。
    var showLegacyPrecisionMaintenanceMenu = false;
    try {
      showLegacyPrecisionMaintenanceMenu = PropertiesService.getScriptProperties()
        .getProperty('SBM_SHOW_LEGACY_PRECISION_MAINTENANCE_MENU') === 'true';
    } catch (eLegacyPrecisionMenuProperty) { showLegacyPrecisionMaintenanceMenu = false; }
    if (showLegacyPrecisionMaintenanceMenu) {
      precisionMenu.addSeparator()
        .addItem('精密診断の追加課題を確認（読取専用）','sbmDoctorInspectLegacyAdditionalCasesFromMenu')
        .addItem('保存済み警告から診断対象を照合','sbmPrecisionRecoverSavedPairFromMenu')
        .addItem('引き継ぎ済みの誤選定Caseを整理','sbmPrecisionCloseSupersededMispairedCases');
    }
    // 開発者専用UAT導線は通常利用者に表示しない。既存関数は削除しない。
    // 開発試験時のみ Script Properties の SBM_SHOW_MULTIWRITER_UAT_MENU=true を設定。
    // ライセンス判定とは独立し、Full版以外では表示しない。
    var showMultiWriterUatMenu = false;
    try {
      showMultiWriterUatMenu = PropertiesService.getScriptProperties()
        .getProperty('SBM_SHOW_MULTIWRITER_UAT_MENU') === 'true';
    } catch (eUatMenuProperty) { showMultiWriterUatMenu = false; }
    if (showMultiWriterUatMenu) {
      precisionMenu.addSeparator()
        .addItem('複数記事診断の依頼を確認（UAT）','sbmDoctorOpenMultiArticleIntakePreview')
        .addItem('複数記事の未完了状況を確認（UAT）','sbmDoctorOpenMultiWriterResumeInspector')
        .addItem('複数記事の経過観察引き継ぎ（UAT）','sbmDoctorOpenMultiWriterHandoffDialog');
    }
    health.addSubMenu(precisionMenu);
  }
  health.addToUi();
  var strategy = ui.createMenu('サイト戦略管理');
  groups[5].items.forEach(function(item){strategy.addItem(item.label,item.id);});
  strategy.addToUi();
  var maintenance = ui.createMenu('設定・メンテナンス');
  groups[6].items.forEach(function(item){maintenance.addItem(item.label,item.id === 'sbmOpenSheetRepairDialogV9372' ? 'sbmOpenSheetRepairDialogV9372_' : item.id);});
  maintenance.addToUi();
}

function sbmSidebarMenuGroups_() {
  var isFull = sbmEffectiveEdition_() === 'FULL';
  var groups = [{"title": "今日の改善", "items": [{"label": "HOME画面を更新", "id": "sbmRefreshHomeManual", "full": false}, {"label": "日次処理を実行", "id": "sbmRunDailyUpdateManual", "full": false}, {"label": "今日の改善を開く", "id": "sbmOpenTodayImprovement", "full": false}, {"label": "選択記事の改善内容を見る", "id": "sbmOpenSelectedImprovementNavi", "full": false}, {"label": "未完了の作業を再開", "id": "sbmResumeUnfinishedWorkflow", "full": true}]}, {"title": "改善の推移・履歴", "items": [{"label": "改善の推移を開く", "id": "sbmOpenImprovementStatus", "full": false}, {"label": "記事改善の効果", "id": "sbmShowSelectedEffectDetail", "full": false}, {"label": "改善履歴を開く", "id": "sbmOpenImprovementHistory", "full": false}, {"label": "改善履歴の詳細", "id": "sbmOpenSelectedHistoryDetail", "full": false}, {"label": "全改善履歴", "id": "sbmOpenSelectedHistoryArticleAll", "full": false}]}, {"title": "新記事の作成・登録", "items": [{"label": "新記事キーワードの参入余地を確認", "id": "sbmOpenSerpEntryCheckDialog", "full": false}, {"label": "新記事を作成", "id": "sbmOpenNewArticleCreation", "full": true}, {"label": "aCreatorで作成した新記事を登録", "id": "sbmOpenCreatorPublicationRegisterDialog", "full": true}]}, {"title": "記事管理", "items": [{"label": "記事一覧を開く", "id": "sbmOpenAllBlogArticles", "full": false}, {"label": "インデックス状況を確認すべき記事", "id": "sbmOpenNeedsReviewArticles", "full": true}, {"label": "インデックス未登録記事を改善", "id": "sbmOpenIndexReviewArticles", "full": true}, {"label": "記事の詳細", "id": "sbmOpenSelectedArticleDbDetail", "full": false}, {"label": "記事の改善履歴", "id": "sbmOpenSelectedArticleHistory", "full": false}, {"label": "記事を管理対象から除外", "id": "sbmOpenSelectedArticleManagementDialog", "full": false}, {"label": "記載サービス・広告の変更・更新", "id": "sbmOpenSelectedInfoUpdate", "full": true}]}, {"title": "サイトの健康診断・記事の精密診断", "items": [{"label": "サイト健康診断を実施", "id": "sbmDoctorRunHealthCheck", "full": false}, {"label": "サイト健康診断結果を開く", "id": "sbmDoctorOpenHealthReport", "full": false}, {"label": "精密診断候補一覧", "id": "sbmDoctorOpenDetailedCandidates", "full": true}, {"label": "記事の精密診断実施", "id": "sbmDoctorOpenCandidateProgressDialog", "full": true}, {"label": "未完了の精密診断再開", "id": "sbmDoctorResumePrecisionDiagnosisFromMenu", "full": true}]}, {"title": "サイト戦略管理", "items": [{"label": "S3連携の状態を確認", "id": "sbmS3ShowIntegrationStatus", "full": false}, {"label": "S3連携の試験設定（ON／OFF）", "id": "sbmS3UatSettingsDialog", "full": false}, {"label": "S3提案を照合（読み取り専用・試験）", "id": "sbmS3IntakeDialog", "full": false}]}, {"title": "設定・メンテナンス", "items": [{"label": "記事管理データベースの更新", "id": "sbmOpenArticleInfoUpdate", "full": false}, {"label": "ライセンス状態を確認", "id": "sbmLicenseRc4StatusDialog", "full": false}, {"label": "ライセンス認証", "id": "sbmLicenseActivate", "full": false}, {"label": "ライセンスの有効性を確認", "id": "sbmLicenseRevalidate", "full": false}, {"label": "バックアップ一覧・復元", "id": "sbmBackupRestoreInteractive", "full": false}, {"label": "初回セットアップ", "id": "sbmStartInitialSetup", "full": false}, {"label": "サイト設定", "id": "sbmOpenBlogInfoChange", "full": false}, {"label": "データ整合性を点検・修復", "id": "sbmAuditAndRepairWorkflowIntegrity", "full": true}, {"label": "シートの作成・修復", "id": "sbmOpenSheetRepairDialogV9372", "full": false}, {"label": "Personal Knowledgeを点検", "id": "sbmPersonalKnowledgeCheckAndInitializeMenu", "full": true}, {"label": "SIMS Managerについて", "id": "sbmShowVersionInfo", "full": false}]}];
  return groups.map(function(group) {
    return {title:group.title,items:group.items.filter(function(item){return isFull || !item.full;}).map(function(item){return {label:item.label,id:item.id};})};
  });
}

let edition='FULL'; function sbmEffectiveEdition_(){return edition;} const PropertiesService={getScriptProperties:()=>({getProperty:()=>null})}; for(const e of ['FULL','STARTER']){edition=e;let roots=[];const ui={createMenu(name){return {name,items:[],addItem(label,id){this.items.push({label,id});return this;},addSubMenu(m){this.items.push(m);return this;},addSeparator(){return this;},addToUi(){roots.push(this);return this;}}}};sbmBuildGroupedTopMenus_(ui);assert.deepStrictEqual(roots.map(x=>x.name),['今日の改善','サイト健康診断','サイト戦略管理','設定・メンテナンス']);const groups=sbmSidebarMenuGroups_();assert.equal(groups.length,7);const flat=m=>m.items.flatMap(x=>x.items?flat(x):[x.id]);const actual=roots.flatMap(flat).filter(x=>x!=='sbmOpenManagerSidebar').map(x=>x==='sbmSidebarOpenImprovementStatusViewOnlyV9365_'?'sbmOpenImprovementStatus':x==='sbmOpenSheetRepairDialogV9372_'?'sbmOpenSheetRepairDialogV9372':x);assert.deepStrictEqual(actual.sort(),groups.flatMap(g=>g.items.map(i=>i.id)).sort());console.log(e+' menu parity PASS');}