# Rosenthal Creative Website

A modern, performant static website built with Next.js 16 showcasing Rosenthal Creative's portfolio of events, weddings, interior design, and custom builds.

## 🎨 Features

- **Next.js 16** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for beautiful, responsive design
- **Automatic Image Optimization** with next/image (WebP/AVIF)
- **922 Instagram Images** automatically categorized by AI caption analysis:
  - Events: 796 images
  - Weddings: 441 images
  - Interior Design: 320 images
  - Custom Builds: 122 images
- **Filterable Gallery** with masonry layout
- **Responsive Design** optimized for all devices
- **Brand Colors** from Rosenthal Creative's identity (pink, coral, gold)

## 🚀 Quick Start

### Development

```bash
# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the static site
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── gallery/           # Gallery page with filtering
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact form page
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Homepage hero section
│   ├── Services.tsx       # Services grid
│   ├── GalleryPreview.tsx # Homepage gallery preview
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities and constants
│   └── constants.ts       # Brand colors, company info, services
├── public/images/         # Optimized images by category
│   ├── events/
│   ├── weddings/
│   ├── interior/
│   ├── custom-builds/
│   └── logo.jpg           # Company logo
├── data/                  # Static data
│   └── images-metadata.json  # Image metadata with categories & captions
└── scripts/               # Build scripts
    └── process-instagram-images.ts  # Image processing script
```

## 🎨 Brand Colors

- **Pink**: `#E89B9B`
- **Coral**: `#F5A6A6`
- **Gold**: `#D4AF37`
- **Cream**: `#FAF7F2`
- **Dark Gray**: `#2C2C2C`

## 📸 Adding New Images

### Option 1: Manual Upload

1. Add images to the appropriate category folder in `public/images/`
2. Update `data/images-metadata.json` with image metadata:

```json
{
  "filename": "your-image.jpg",
  "categories": ["weddings", "events"],
  "caption": "Your caption here",
  "date": "2026-01-01T00:00:00.000Z",
  "tags": ["wedding", "outdoor"]
}
```

### Option 2: Update from Instagram

To fetch new images from Instagram (requires Instaloader):

```bash
# Install Instaloader (if not already installed)
brew install pipx
pipx install instaloader

# Download new images
cd instagram_download
instaloader --no-videos --no-video-thumbnails --no-captions rosenthal_creative

# Process and categorize images
cd ..
npx tsx scripts/process-instagram-images.ts
```

## 🌐 Deployment

### GitHub Pages (Free, Easy)

**Perfect for this static site!**

1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in Settings → Pages
4. Set source to "GitHub Actions"
5. Done! Auto-deploys on every push

**Detailed instructions:** See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)

Your site will be live at: `https://username.github.io/repo-name/`

**Note:** Current build size is **291MB** (within GitHub's limits)

### Vercel (Recommended for Dynamic Features)

Best if you need server-side rendering or API routes:

1. Push to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically with every push
4. Supports custom domains with automatic HTTPS

### Other Options

- **Netlify** - Similar to Vercel, great for static sites
- **Cloudflare Pages** - Fast global CDN
- **Custom Server** - Deploy the `out/` folder anywhere

## 📝 Customization

### Update Company Information

Edit `lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Rosenthal Creative',
  email: 'info@rosenthalcreative.com',
  instagram: '@rosenthal_creative',
  // ... other details
};
```

### Update Services

Edit the `SERVICES` array in `lib/constants.ts`:

```typescript
export const SERVICES = [
  {
    id: 'events',
    title: 'Event Management',
    description: 'Your description here',
    icon: '🎉',
  },
  // Add more services...
];
```

### Change Colors

Update brand colors in `lib/constants.ts` and corresponding Tailwind classes throughout the components.

## 🔧 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Cormorant Garamond (headings), Inter (body)
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Package Manager**: npm

## 📱 Pages

1. **Home** (`/`) - Hero section, services overview, gallery preview
2. **Gallery** (`/gallery`) - Filterable masonry gallery with search
3. **Services** (`/services`) - Detailed service descriptions
4. **About** (`/about`) - Company story and philosophy
5. **Contact** (`/contact`) - Contact form and information

## 🎯 Performance Features

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Images load as you scroll
- **Static Generation**: Fast page loads
- **Turbopack**: Fast development builds
- **Responsive Images**: Optimized for every screen size

## 📄 License

Private - © 2026 Rosenthal Creative

---

Built with ❤️ using Next.js and Tailwind CSS
