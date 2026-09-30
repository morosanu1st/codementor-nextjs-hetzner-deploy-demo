# Hetzner Ubuntu deploy checklist (Next.js 15)

1. **Server** — CX/CP Ubuntu 22.04/24.04, SSH key login, firewall (22, 80, 443).
2. **Node** — install Node 20/22 LTS via NodeSource or `nvm`; confirm `node -v`.
3. **App user** — create non-root user; clone/build under `/var/www/<app>`.
4. **Build** — `npm ci && npm run build` with `output: 'standalone'` in `next.config`.
5. **Process** — systemd unit pointing at `.next/standalone/server.js` (`PORT=3000`).
6. **Nginx** — reverse proxy to `127.0.0.1:3000`; static assets optional from `.next/static`.
7. **TLS** — Certbot + nginx plugin; renew timer on by default.
8. **Smoke** — curl localhost:3000, then https://domain; check journalctl -u app.
