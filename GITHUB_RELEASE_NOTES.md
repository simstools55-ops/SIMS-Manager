# SIMS Manager v6.1.9

Initial Setup dialog reliability fix for the common Full / Starter code line.

- Root cause fixed: generated client JavaScript was invalid because quoted HTML attributes inside a JavaScript string lost escaping during server-side HTML construction.
- STEP1–STEP6 buttons are now syntax-tested after final HTML generation.
- Spinner and fallback-link UI are created with DOM APIs instead of nested HTML strings.
- Setup navigator, repair-completion navigator, and article-info continuation dialog were also audited.
- Full canonical: `Code.gs`
- Starter: `editions/starter/Code.gs`
- Shared Spreadsheet schema and `appsscript.json` are unchanged.
