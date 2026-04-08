#!/bin/bash
docker stop replacementguide-app 2>/dev/null
docker rm replacementguide-app 2>/dev/null
docker run -d \
  --name replacementguide-app \
  --network coolify \
  --restart unless-stopped \
  -e NODE_ENV=production \
  -e HOSTNAME=0.0.0.0 \
  -e DATABASE_URL=postgresql://birthchart:bcl-pg-2026-xR7kM9pQ@5.78.193.125/replacementguide \
  -l traefik.enable=true \
  -l 'traefik.http.routers.rg-http.rule=Host(`replacementguide.com`) || Host(`www.replacementguide.com`)' \
  -l traefik.http.routers.rg-http.entrypoints=http \
  -l 'traefik.http.routers.rg-https.rule=Host(`replacementguide.com`) || Host(`www.replacementguide.com`)' \
  -l traefik.http.routers.rg-https.entrypoints=https \
  -l traefik.http.routers.rg-https.tls=true \
  -l traefik.http.routers.rg-https.tls.certresolver=letsencrypt \
  -l traefik.http.services.rg.loadbalancer.server.port=3000 \
  replacementguide:latest
echo "EXIT: $?"
