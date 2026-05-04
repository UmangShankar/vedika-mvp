---
name: Vedika MVP — Technology Stack and Security Architecture
description: Technology stack, key files, and security-relevant decisions for the vedika-mvp Next.js project
type: project
---

Next.js 14.2.16 app (App Router) with Sanity CMS (project ID: ashqn4dx, dataset: production). AI chat powered by Anthropic claude-sonnet-4-5 via /api/ask edge route.

Key architectural facts:
- No middleware.ts file — zero route-level auth enforcement
- No authentication system at all; app is entirely public
- ANTHROPIC_API_KEY used server-side in edge route (safe)
- SANITY_WRITE_TOKEN used only in seed scripts (server-side, not exposed to browser)
- Sanity project ID `ashqn4dx` hardcoded in 5+ files (scripts, sanity.config.ts, studio-vedika/sanity.config.ts)
- NEXT_PUBLIC_ env vars (Sanity projectId, dataset, Supabase URL/anonKey) are intentionally client-exposed — design decision
- next.config.mjs has no security headers (CSP, HSTS, X-Frame-Options, etc.)
- No rate limiting on /api/ask — direct LLM cost exposure
- Newsletter form posts to action="#" — non-functional stub, no backend handler
- PortableContent renderer does not validate link hrefs against allowlist (javascript: URI risk)
- lib/integrations.ts exposes Supabase URL + anon key references — Supabase not yet active in codebase

**Why:** First assessment, May 2026.
**How to apply:** Use these facts as starting context for future security reviews; verify current state before acting on them.
