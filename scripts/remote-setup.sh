#!/usr/bin/env bash
# Illustrative Hetzner Ubuntu setup — review before running on a real VPS.
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/nextjs-app}"
NODE_MAJOR="${NODE_MAJOR:-22}"

sudo apt-get update
sudo apt-get install -y curl nginx git

# NodeSource LTS
curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | sudo -E bash -
sudo apt-get install -y nodejs

sudo mkdir -p "$APP_DIR"
echo "Copy built standalone app into $APP_DIR, install nginx site, enable systemd unit — see docs/01-deploy-checklist.md"
