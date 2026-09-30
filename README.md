# Next.js 15 → Hetzner Ubuntu Deploy Demo

Small **App Router** sample plus a practical deploy kit for putting an existing Next.js 15 app on a **Hetzner Cloud Ubuntu** VPS: Node LTS, `standalone` output, **Nginx** reverse proxy, **systemd**, and Let's Encrypt.

Topic/skill demo only — no client branding.

---

## What this proves

| Piece | Where |
|-------|--------|
| Minimal Next.js 15 App Router page | `app/` |
| Standalone production output | `next.config.mjs` (`output: 'standalone'`) |
| Deploy checklist | [`docs/01-deploy-checklist.md`](docs/01-deploy-checklist.md) |
| Nginx reverse-proxy template | [`deploy/nginx-nextjs.conf`](deploy/nginx-nextjs.conf) |
| systemd unit | [`deploy/nextjs.service`](deploy/nextjs.service) |
| Illustrative remote bootstrap | [`scripts/remote-setup.sh`](scripts/remote-setup.sh) |

---

## How I can help (freelance / session)

1. **Audit your existing Next.js 15 app** — env vars, `standalone` vs classic `next start`, build quirks, image domains.
2. **Provision the Hetzner box** — SSH hardening, UFW, Node LTS, app user, deploy path.
3. **Wire Nginx + TLS** — proxy headers, WebSocket upgrade if needed, Certbot.
4. **systemd** — restart policy, logs via `journalctl`, zero-downtime tips for a $100-scale job.
5. **Handoff** — short runbook so you can redeploy with `git pull && npm ci && npm run build && systemctl restart …`.

Happy to do this as a fixed-price Codementor freelance job or a live screen-share if you prefer to learn the steps.

— Mihai

---

## Run locally

```bash
npm install
npm run dev
# http://localhost:3000

npm run build
# then node .next/standalone/server.js (after copying static assets per Next standalone docs)
```

## Typical production layout on Ubuntu

```
/var/www/nextjs-app/
  .next/standalone/server.js
  .next/static/          → also under standalone/.next/static
  public/
deploy/nginx-nextjs.conf → /etc/nginx/sites-available/…
deploy/nextjs.service    → /etc/systemd/system/nextjs.service
```

See the checklist for the exact order of operations.
