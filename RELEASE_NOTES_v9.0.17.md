# v9.0.17

- Correct Writer completion audit to read `publication_result.decision` (PUBLIC_OK).
- Keep legacy `publication_result.publication_decision` compatibility.
- Preserve strict rejection of non-PUBLIC_OK decisions.
- No automatic publication, state transition, or monitor changes.
