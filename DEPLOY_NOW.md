# 🎯 Deploy Your Site in 3 Commands

Your Rosenthal Creative website is ready! Here's how to deploy it to GitHub Pages:

## Prerequisites
- GitHub account (free at github.com)
- Repository must be public for free GitHub Pages

## Deploy Now

### Copy-paste these commands (replace YOUR_USERNAME):

\`\`\`bash
# 1. Initialize git and commit
git init
git add .
git commit -m "Initial commit: Rosenthal Creative website"

# 2. Push to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rosenthal-creative-website.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages
echo "Now go to: https://github.com/YOUR_USERNAME/rosenthal-creative-website/settings/pages"
echo "Set 'Build and deployment' source to: GitHub Actions"
\`\`\`

## That's it!

Your site will be live at:
\`https://YOUR_USERNAME.github.io/rosenthal-creative-website/\`

Wait 2-3 minutes for deployment to complete.

---

**Full guide:** [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)
