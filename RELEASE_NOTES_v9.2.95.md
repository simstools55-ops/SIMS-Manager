# SIMS Manager v9.2.95 (UAT)

Added `sbmDoctorAcknowledgeMultiWriterMonitoringBaseline(caseId)` to preserve correct ordering: real work result → real publication confirmation → existing monitoring preflight/acknowledgement → ordinary improvement registration → existing history linkage. Refuses retrospective baselines after registration receipts. Not production-ready; GAS integration tests pending.
