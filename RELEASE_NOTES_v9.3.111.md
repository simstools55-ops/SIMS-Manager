# v9.3.111 — S3/SBM site identity binding (UAT candidate)

Added `sbmS3BindProposalSiteUat_(proposal)` to safely map the S3 locked GSC URL identity to the configured SBM site ID without mutating source data or writing to sheets. Mismatched/invalid IDs or URLs fail closed. This does NOT approve a proposal or connect the Doctor registration entry point. The registration function continues to require an independently verified SBM context and approved conflict decision. Local unit tests and syntax checks only; GAS real-world UAT pending. Keep v9.3.108 installed until integrated release is ready.
