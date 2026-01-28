<<<<<<< HEAD
# ⚡ QUICK START GUIDE - FIXED FOR NEON

Get your Pastebin-Lite running in **10 minutes**!

## 🔧 What Changed?

**@vercel/postgres is deprecated** → We now use **Neon Postgres** instead!

- ✅ Neon is Vercel's recommended database
- ✅ Faster setup
- ✅ Better performance
- ✅ Same PostgreSQL features

---

=======
# ⚡ QUICK START GUIDE

Get your Pastebin-Lite running in **10 minutes**!

>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
## 📦 Step 1: Setup Project (2 minutes)

```bash
# Navigate to the project folder
cd pastebin-lite

<<<<<<< HEAD
# Install dependencies (now uses @neondatabase/serverless)
npm install
```

---

=======
# Install dependencies
npm install
```

>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
## 📤 Step 2: Push to GitHub (3 minutes)

### Create a new repository on GitHub:
1. Go to https://github.com/new
2. Name: `pastebin-lite`
3. Click "Create repository"

### Push your code:
```bash
git init
git add .
<<<<<<< HEAD
git commit -m "Initial commit: Pastebin-Lite with Neon"
=======
git commit -m "Initial commit: Pastebin-Lite"
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
git remote add origin https://github.com/YOUR_USERNAME/pastebin-lite.git
git push -u origin main
```

<<<<<<< HEAD
---

=======
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
## 🚀 Step 3: Deploy to Vercel (5 minutes)

### Deploy the app:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo `pastebin-lite`
4. Click "Deploy" (don't change anything!)
5. Wait 2-3 minutes ⏳

<<<<<<< HEAD
### Add Neon Postgres database:
1. After deployment, click **"Storage"** tab
2. Click **"Create Database"**
3. Select **"Neon Postgres"** (NOT "Vercel Postgres")
4. Name: `pastebin-db`
5. Region: Choose closest to you
6. Click **"Create"**
7. Vercel will automatically add `DATABASE_URL` to your environment

### Redeploy (Important!):
1. Go to **"Deployments"** tab
2. Click latest deployment
3. Click "..." → "Redeploy"
4. Click "Redeploy"
5. Wait 2 minutes ⏳

---
=======
### Add database:
1. After deployment, click "Storage" tab
2. Click "Create Database"
3. Select "Postgres"
4. Name: `pastebin-db`
5. Region: Choose closest to you
6. Click "Create"
7. Click "Connect to Project"
8. Select your project
9. Click "Connect"

### Redeploy:
1. Go to "Deployments" tab
2. Click latest deployment
3. Click "..." → "Redeploy"
4. Click "Redeploy"
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

## ✅ Step 4: Test Your App!

Your app is now live at: `https://your-app.vercel.app`

### Quick test:
```bash
# Health check
curl https://your-app.vercel.app/api/healthz

# Should return: {"ok":true}
```

### Or open in browser:
- Visit your app URL
- Create a paste
- Share the link!

<<<<<<< HEAD
---

=======
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
## 🎉 YOU'RE DONE!

What to submit:
- **Deployed URL**: `https://your-app.vercel.app`
- **GitHub URL**: `https://github.com/YOUR_USERNAME/pastebin-lite`
<<<<<<< HEAD
- **Notes**: Uses Neon Postgres (PostgreSQL serverless database)

---

## 🐛 Troubleshooting

### Build still fails?
- Make sure you selected **"Neon Postgres"** not "Vercel Postgres"
- Check that `DATABASE_URL` is in environment variables (Settings → Environment Variables)
- Try redeploying one more time

### Database connection error?
- Wait a minute after creating database
- Redeploy your project
- Check Vercel function logs for errors
=======
- **Notes**: See README.md for details
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

---

**Need more help?** Check the full README.md for detailed documentation!
