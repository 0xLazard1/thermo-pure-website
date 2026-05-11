# thermo-pure-website — Project Guide for Claude Code

> Site vitrine du service de nettoyage thermo-pure (toitures, façades, terrasses à la vapeur basse pression). Public francophone, principalement Nouvelle-Aquitaine. Site **stateless** : Next.js + formulaire de contact via Resend, pas de DB, pas d'auth admin.

---

## Branches

| Branch | Role |
|---|---|
| `main` | **Production** — every push auto-deploys to `https://thermo-pure.com` via Coolify (GitHub App webhook). Keep clean. |
| `dev` | WIP refactor (Hero/Présentation rewrite + 3 SEO landing pages: `/nettoyage-facade`, `/nettoyage-terrasse`, `/nettoyage-toiture` + `ServicePage` template + dynamic sitemap). 26 files, 1821 insertions ahead of main as of 2026-05-11. Merge to `main` to ship. |
| `claude/*` | Sandbox worktrees — never push to origin. |

Always check `git status` and `git branch --show-current` before edits.

---

## Stack

| Layer | Choice |
|---|---|
| Runtime | Node 22, npm (not pnpm — `package-lock.json` is the source of truth) |
| Framework | Next.js 15.5.7 App Router, React 19.1, TypeScript |
| Build | Turbopack (`next dev --turbopack` and `next build --turbopack`) |
| Style | Tailwind CSS + shadcn/ui (Radix primitives, see `components.json`) |
| Email | Resend (formulaire `/contact`) — domain `thermo-pure.com` already verified (DKIM + SPF on Hostinger DNS) |
| Images | Sharp + AVIF/WebP via Next image optimization, plus `optimize-images.js` build script |
| Markdown | `react-markdown` + `remark-gfm` + `gray-matter` for blog posts in `public/blog/*.md` |

No tests yet. No DB. Stateless.

---

## Production deployment

| | |
|---|---|
| Hosting | Hostinger KVM VPS `109.176.198.220` (AlmaLinux 10) — shared with `salmaenbref.cloud` |
| Orchestrator | Coolify v4 — app `thermo-pure-website:main` in project `thermo-pure`, container served on `127.0.0.1:3001` |
| Reverse proxy | Native nginx (NOT Coolify Traefik). Vhost in `/etc/nginx/conf.d/thermo-pure.conf` proxies `127.0.0.1:3001` |
| Build | Multi-stage `Dockerfile` (Node 22 Alpine, `output: "standalone"` in `next.config.ts`) |
| Auto-deploy | Push `origin/main` → GitHub App `0xlazardcollify` webhook → Coolify build + restart (~5 min, ~10-30s downtime) |
| Domains | `thermo-pure.com`, `www.thermo-pure.com` (301 → non-www), `staging.thermo-pure.com` (same container, separate domain for visual diffing) |
| TLS | Let's Encrypt via certbot `--nginx`, auto-renew |
| Required env (Coolify) | `RESEND_API_KEY=re_…` (only that — the rest is hardcoded) |
| Logs | `docker logs <container>` on the VPS, or Coolify UI → Logs tab |

**To test a change before merging to `main`** : push the branch, then ssh into the VPS and `docker run` a one-off build, OR temporarily point `staging.thermo-pure.com` at a feature branch in Coolify. Same prod cert covers it.

---

## Quick commands

```bash
npm run dev          # next dev --turbopack (port 3000)
npm run build        # next build --turbopack
npm run start        # next start (after build)
npm run lint         # eslint
node optimize-images.js  # batch convert public/images/* to AVIF + WebP
```

`.env.local` only needs `RESEND_API_KEY=re_…` for the contact form to send. Everything else has dev-friendly defaults.

---

## Gotchas (learned the hard way)

- **`next.config.ts` has `output: "standalone"`** — required for the Docker image to ship the trimmed `node_modules` + `server.js`. Don't remove without rewriting the Dockerfile.
- **The Dockerfile is the source of truth for prod**, not the workflow file. The old `.github/workflows/deploy.yml` that did `pm2 restart thermo-pure` was **deleted** at the Coolify migration (commit `3501c8c`) — never restore it, prod is now containers, not PM2.
- **DKIM/SPF for Resend are on `thermo-pure.com` Hostinger DNS already** (records `resend._domainkey TXT`, `send TXT/MX`). Don't add new ones — verify in the existing zone first.
- **nginx vhost shares the VPS with `salmaenbref.cloud`.** Editing `/etc/nginx/conf.d/thermo-pure.conf` affects only this site, but a typo could break nginx globally → both sites down. `nginx -t` before `nginx -s reload` is mandatory; if reload is silent but `nginx -T | grep ssl_certificate` shows a missing block, do `systemctl restart nginx` (full reload).
- **HTTP/2 connection coalescing**: the vhost has `if ($host !~* "^(www\.)?thermo-pure\.com$") { return 421; }` — don't remove it. Brave/Chrome reuse HTTPS connections across SNIs sharing the same IP, and without the 421 a request meant for `salmaenbref.cloud` could land in this container (or vice-versa).
- **Branch `dev` has unmerged work** including 3 new SEO landing pages (`/nettoyage-facade`, `/nettoyage-terrasse`, `/nettoyage-toiture`) and a `ServicePage` template — main currently 404s on these routes. Merge or rebase before assuming a route exists.
- **`.dockerignore` excludes `.next/`, `node_modules/`, `.env*`, `.git/`, `docs/`, `CLAUDE.md`, `README.md`** — the build context stays under 1 MB. Don't add anything that would balloon it.

---

## Required env (`.env.local`)

```
RESEND_API_KEY=re_<...>
```

That's it. The contact form (`src/app/api/contact/route.ts`) reads it ; the rest of the site is fully static.

---

## Anti-patterns

- ❌ Pushing directly to `main` without testing on `dev` or `staging.thermo-pure.com` first
- ❌ Restoring the old PM2 workflow (`.github/workflows/deploy.yml`) — prod is Docker
- ❌ Adding DB / auth / Server Actions without checking with the user first (this is intentionally a stateless brochure site)
- ❌ Editing nginx config on the VPS without `nginx -t` before reload
- ❌ Hardcoding `RESEND_API_KEY` anywhere — always from env
- ❌ Removing `output: "standalone"` from `next.config.ts` (breaks the Docker build)

---

## Updating this file

When something changes in prod (new env var, new vhost, new container, new domain), edit the corresponding row. Keep it under 150 lines — every line lives in every prompt.
