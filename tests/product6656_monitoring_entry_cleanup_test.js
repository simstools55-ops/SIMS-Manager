const fs=require('fs');const s=fs.readFileSync('Code.gs','utf8');function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.56';"),'version');
ok(s.includes('function sbmPurgeUnfinishedDataForActiveMonitoring_()'),'cleanup function');
ok(s.includes("sbmMonitoringLifecycleFromHistory_(h)!=='ACTIVE'"),'ACTIVE monitoring source');
ok(s.includes('sbmPurgeUnfinishedDataForActiveMonitoring_();'),'cleanup wired');
ok(s.includes('状態コードで残す/消すを推測しない'),'state-independent purge');
ok(!s.includes('var removable={DOCTOR_DIAGNOSIS_PENDING:1,DOCTOR_DIAGNOSED:1'),'old state-limited purge removed');
console.log('PASS product6656_monitoring_entry_cleanup_test');
