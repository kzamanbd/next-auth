# Next.js (Auth) Starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on AWS or Ubuntu

```bash
npm run build
pm2 start npm --name "next-auth" -- start -- --port 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Nginx Configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Add SSL Certificate

```bash
yum install certbot python3-certbot-nginx -y
certbot --nginx -d example.com -d www.example.com
systemctl status certbot.timer
certbot renew --dry-run
```
