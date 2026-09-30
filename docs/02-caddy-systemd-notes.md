# Caddy + systemd notes (matches common Hetzner Next.js kits)

Many client `deploy/` folders already install **Node 22**, **Caddy**, **ufw**, **fail2ban**, and a systemd unit. Typical live-session flow:

1. Run (or fix) their setup scripts on a fresh Ubuntu 24.04 box.
2. Ensure Node ≥ 22.5 if the app uses `node:sqlite`.
3. First `next build` — fix TypeScript errors as they appear.
4. Confirm systemd `ExecStart` points at standalone `server.js` (or `next start`).
5. Caddyfile `reverse_proxy 127.0.0.1:3000` → automatic HTTPS.
6. ufw: allow 22 temporarily during setup, then only 80/443 for production if SSH is via console/VPN — or keep 22 if still using SSH.
7. Hand off a short “git pull → build → systemctl restart” update sheet.
