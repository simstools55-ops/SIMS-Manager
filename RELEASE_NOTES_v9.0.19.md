# SIMS Manager v9.0.19

- Bypass the one-hour Apps Script article source cache when generating information-change Doctor and Writer requests.
- Send no-cache headers on these fresh fetches and avoid overwriting the shared cached source.
- Preserve the cache for other diagnosis workflows, and preserve all existing case and monitoring data.
- Note: Origin/CDN caches may still serve stale pages; validate the supplied source against the public page.
