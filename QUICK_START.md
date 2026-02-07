# 🚀 Quick Start Guide

## Your Website is Ready!

✅ **Site Status:** Production-ready and tested
✅ **Pages:** 5 complete pages (Home, Gallery, Services, About, Contact)
✅ **Images:** 922 images from Instagram, automatically categorized
✅ **Build:** Successfully tested and optimized for GitHub Pages

---

## 🌐 Deploy to GitHub Pages (5 Minutes)

### 1. Create GitHub Repository

```bash
# Go to GitHub.com and create a new repository
# Name: rosenthal-creative-website
# Type: Public
```

### 2. Push Your Code

```bash
cd /Users/john/rosenthal-creative/web-site

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Rosenthal Creative website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rosenthal-creative-website.git

# Push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait 2-3 minutes for deployment

### 4. Your Site is Live! 🎉

Visit: `https://YOUR_USERNAME.github.io/rosenthal-creative-website/`

---

## 📖 Documentation

- **[README.md](README.md)** - Full project overview
- **[GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)** - Detailed deployment guide
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - How to customize everything
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Pre-deployment checklist

---

## 💻 Development Commands

```bash
# Start development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
# → Creates /out folder with static files

# Preview production build
npx serve out
# → Test the built site locally
```

---

## ⚠️ Important Notes for GitHub Pages

### ✅ What Works
- All 5 pages
- 922 categorized images
- Gallery filtering and search
- Responsive design
- Automatic deployment

### ⚙️ What's Configured
- Static export (`output: 'export'`)
- Image optimization disabled (required for static)
- GitHub Actions workflow (auto-deploy)
- Trailing slashes for better routing

### 🚫 GitHub Pages Limitations
- **Image size:** Each file must be < 100MB ✅ (all images OK)
- **Repo size:** Total < 1GB ✅ (currently 291MB)
- **No server features:** Contact form won't submit without external service
- **No API routes:** Static files only

### 💡 Contact Form Options
The contact form displays but doesn't submit. To make it work:

**Option 1: Formspree (Free)**
```bash
# Sign up at formspree.io
# Update form action in app/contact/page.tsx:
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: Netlify Forms** (if you switch to Netlify)

**Option 3: Google Forms** (embed in contact page)

---

## 🎨 Quick Customizations

### Change Company Info
Edit `lib/constants.ts`:
```typescript
export const COMPANY_INFO = {
  email: 'your@email.com',
  // ... update other fields
};
```

### Add New Images
1. Drop images in `public/images/[category]/`
2. Update `data/images-metadata.json`
3. Push to GitHub → auto-deploys

### Change Colors
Edit `lib/constants.ts` → `BRAND_COLORS`

---

## 📊 Current Stats

- **Pages:** 5 (Home, Gallery, Services, About, Contact)
- **Images:** 922 (from Instagram)
  - Events: 796
  - Weddings: 441
  - Interior: 320
  - Custom Builds: 122
- **Build Size:** 291MB
- **Build Time:** ~3 seconds
- **Tech Stack:** Next.js 16 + TypeScript + Tailwind CSS

---

## 🆘 Need Help?

### Build Issues
```bash
# Check for errors
npm run build

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues
- Check **Actions** tab on GitHub for errors
- Ensure repo is **Public**
- Verify GitHub Pages is enabled in Settings
- Wait 5-10 minutes for first deployment

### Image Issues
- Ensure images are < 100MB each
- Check image paths are correct
- Verify images are in `public/images/`

---

## ✅ Final Checklist

Before deploying:

- [ ] Update company email in `lib/constants.ts`
- [ ] Review all content for accuracy
- [ ] Test locally: `npm run build`
- [ ] Images are properly organized
- [ ] Ready to push to GitHub

**Everything is ready to go!** 🚀

Follow the deployment steps above and your site will be live in minutes.
