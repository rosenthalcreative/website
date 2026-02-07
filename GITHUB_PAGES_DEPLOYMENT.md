# GitHub Pages Deployment Guide

This guide explains how to deploy your Rosenthal Creative website to GitHub Pages for free.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (+ icon in top right)
3. Name it: `rosenthal-creative-website`
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project
cd /Users/john/rosenthal-creative/web-site

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Rosenthal Creative website"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/rosenthal-creative-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. That's it! The deployment will start automatically

### Step 4: Wait for Deployment

- Go to the **Actions** tab in your repository
- Watch the deployment progress (takes 2-3 minutes)
- Once complete, your site will be live at:
  ```
  https://USERNAME.github.io/rosenthal-creative-website/
  ```

## 🔧 Configuration for GitHub Pages

The following has been configured automatically:

✅ **Static Export** - Site builds as static HTML/CSS/JS
✅ **GitHub Actions Workflow** - Automatic deployment on push
✅ **Image Optimization** - Unoptimized for static hosting
✅ **Base Path** - Handles repository name in URL
✅ **Trailing Slashes** - Better static hosting compatibility

## 📝 Making Updates

Every time you push to the `main` branch, the site automatically rebuilds and deploys:

```bash
# Make your changes
git add .
git commit -m "Updated content"
git push
```

Wait 2-3 minutes and your changes will be live!

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `rosenthalcreative.com`):

### 1. Add Custom Domain in GitHub

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter: `rosenthalcreative.com`
3. Click **Save**

### 2. Configure DNS

Add these DNS records with your domain provider:

**For apex domain (rosenthalcreative.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

### 3. Enable HTTPS

In GitHub Pages settings, check:
- ✅ **Enforce HTTPS**

DNS propagation takes 24-48 hours. Once complete, your site will be live at your custom domain!

## 🎨 Large Image Files Warning

**Important:** GitHub has a 100MB file size limit per file and 1GB total repository limit.

If you have large images:

1. **Compress images** before adding:
   ```bash
   # Install imagemagick
   brew install imagemagick

   # Compress images in a folder
   mogrify -resize 1920x1920\> -quality 85 public/images/**/*.jpg
   ```

2. **Or use an image CDN** like:
   - [Cloudinary](https://cloudinary.com) (free tier)
   - [ImageKit](https://imagekit.io) (free tier)
   - [imgix](https://imgix.com)

## 🚫 Limitations of GitHub Pages

- **Static only** - No server-side rendering or API routes
- **Contact form** won't submit (needs external service)
- **Image optimization** is disabled (no automatic WebP conversion)
- **100MB file limit** per file
- **Soft 1GB** repository size limit

## 🔄 Alternative: If You Need Dynamic Features

If you need:
- Contact form submission
- Server-side rendering
- API routes
- Better image optimization

Consider these free alternatives:
- **Vercel** (recommended) - vercel.com
- **Netlify** - netlify.com
- **Cloudflare Pages** - pages.cloudflare.com

All offer free tiers with more features than GitHub Pages.

## 🐛 Troubleshooting

### Site not loading after deployment

1. Check **Actions** tab for build errors
2. Ensure GitHub Pages is enabled in Settings
3. Wait 5-10 minutes for initial deployment
4. Check if images are under 100MB each

### Images not showing

1. Check image paths are correct
2. Ensure images are in `public/images/`
3. Clear browser cache

### 404 errors on page refresh

This is normal with client-side routing on GitHub Pages. The `.nojekyll` file has been added to help, but some routes may need trailing slashes.

### Repository too large

```bash
# Remove Instagram download folder
rm -rf instagram_download

# Update .gitignore to exclude it
echo "instagram_download/" >> .gitignore

# Commit
git add .
git commit -m "Remove large files"
git push
```

## 📊 Monitoring

View your site analytics:
1. Go to repository **Insights** → **Traffic**
2. See page views and visitor stats

For detailed analytics, add Google Analytics (see CUSTOMIZATION.md).

## 🎯 Build Locally (Testing)

Test the static build before pushing:

```bash
# Build static site
npm run build

# Output will be in /out folder
# You can preview it locally:
npx serve out
```

## ✅ Checklist

Before going live:

- [ ] All images are under 100MB
- [ ] Total repository under 1GB
- [ ] Contact form points to external service (if needed)
- [ ] Update company email/contact info
- [ ] Test all pages locally with `npm run build`
- [ ] Custom domain DNS configured (if using)
- [ ] HTTPS enabled in GitHub Pages settings

---

**Need help?** Check [GitHub Pages documentation](https://docs.github.com/en/pages)
