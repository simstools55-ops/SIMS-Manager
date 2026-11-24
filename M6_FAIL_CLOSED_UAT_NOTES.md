# M6 Fail-closed safety patch (UAT candidate)

Source: SBM v9.3.105 S3 TestHarness Fix Candidate. No version bump, not for production.

- Evidence index now requires status column whenever statusNames is provided. Missing Doctor_Cases status => unavailable and HOLD.
- Live GSC refuses >20 proposals before API calls, returns available:false with explicit reason and zero checked; all proposal decisions remain HOLD.
- Live preview reports requested/checked counts and limit.
- Existing publication gate and execution_allowed remain HOLD/false.

Next: run GAS UAT with a safe test copy and inspect source/version manifest before promotion.
