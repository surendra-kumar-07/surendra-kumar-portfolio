# ExpiryAlert — Docker + AWS EC2

A static HTML/CSS/JavaScript expiry tracker served by Nginx in Docker.

## Features
- Add, edit, delete, search, and filter products
- Categories: Food, Medicine, Household, Personal care, Other
- Dashboard: total products, expiring within 7 days, expired products, estimated value at risk
- Browser `localStorage` persistence
- CSV export
- Input validation and responsive design
- Nginx health check and basic security headers

## Important data note
The inventory is saved in each browser's localStorage. It does not sync between devices and is not a server-side database. Clearing browser data removes it. Do not use this prototype as the sole record for medicine or safety-critical inventory.

## Run locally with Docker
```bash
docker build -t expiryalert:1.0 .
docker run -d --name expiryalert -p 8080:80 --restart unless-stopped expiryalert:1.0
```
Open http://localhost:8080

Stop/remove:
```bash
docker rm -f expiryalert
```

## Run with Docker Compose
```bash
docker compose up -d --build
docker compose ps
docker compose logs -f
docker compose down
```

## Deploy on AWS EC2 (Amazon Linux 2023)
1. Launch an EC2 instance, choose Amazon Linux 2023, and use a small instance suitable for testing.
2. In its security group, add inbound TCP 22 from **your own IP only** and TCP 80 from `0.0.0.0/0`. Do not expose port 8080 publicly.
3. Connect by SSH.
4. Install Docker:
```bash
sudo dnf update -y
sudo dnf install -y docker git
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
```
5. Log out and SSH back in so the Docker group membership takes effect.
6. Clone your repository, then build and run:
```bash
git clone YOUR_GITHUB_REPOSITORY_URL expiryalert
cd expiryalert
docker build -t expiryalert:1.0 .
docker run -d --name expiryalert -p 80:80 --restart unless-stopped expiryalert:1.0
```
7. Open `http://YOUR_EC2_PUBLIC_IP`.

If the container already exists during a redeploy:
```bash
docker rm -f expiryalert
docker build -t expiryalert:1.0 .
docker run -d --name expiryalert -p 80:80 --restart unless-stopped expiryalert:1.0
```

## GitHub commands
Create an empty repository on GitHub first, then run these commands in this project directory:
```bash
git init
git add .
git commit -m "Build ExpiryAlert static web app"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Tests / smoke checks
```bash
docker build -t expiryalert:test .
docker run -d --name expiryalert-test -p 8081:80 expiryalert:test
curl -I http://localhost:8081/
curl -fsS http://localhost:8081/ | grep -q "ExpiryAlert"
curl -fsS http://localhost:8081/app.js | grep -q "validateForm"
docker rm -f expiryalert-test
```
The commands verify the image builds, Nginx serves the page, and the app JavaScript is served. Manual browser checks should also cover adding/editing/deleting a product, invalid form entries, searching/filtering, refreshing to confirm localStorage persistence, and exporting CSV.

## Cost and security
- Stop or terminate test EC2 instances when not needed. Terminating deletes the instance's local data.
- Keep SSH restricted to your IP. Do not publish AWS credentials or private keys.
- Use HTTPS and a domain for a public production launch.
