# SIMS Manager v6.2.3

## Purpose
Fix the remaining normal-improvement resume gap discovered in the Article Management detail route.

## Changes
- Both Today and Article Management now enter normal improvement through the same checkpoint-before-display function.
- Article Management detail records the selected ArticleID/URL as NORMAL_IMPROVEMENT before Improvement Navi opens.
- Resume verifies the saved ArticleID/URL against the restored article and refuses stale/mismatched restoration.
- Full: v6.2.3 / Starter: v6.2.3-ST.
