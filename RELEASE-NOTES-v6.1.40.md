# SIMS Manager v6.1.40

## Fixes
- Unified the shared aDoctor result-processing dialog for both direct aDoctor and Site Doctor-origin cases.
- Fixed Writer result registration for direct aDoctor cases that was incorrectly sent to the Site Doctor-only registration path.
- The shared dialog now falls back to the normal aDoctor Writer result registrar when `SiteDiagnosisCaseID` is absent.
- Renamed the shared dialog title to `aDoctor診断結果の処置を進める` and clarified that both aDoctor and Site Doctor routes are supported.
- Synchronized Full/Starter version display to v6.1.40 / v6.1.40-ST.
