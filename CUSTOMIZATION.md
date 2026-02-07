# Customization Guide

This guide will help you customize the Rosenthal Creative website.

## 📸 Managing Images

### Adding New Images

1. **Manually add images:**
   - Place images in the appropriate category folder: `public/images/[category]/`
   - Update `data/images-metadata.json` with image details

2. **Update from Instagram:**
   ```bash
   # Navigate to project root
   cd /Users/john/rosenthal-creative/web-site

   # Download new Instagram posts
   cd instagram_download
   instaloader --no-videos rosenthal_creative

   # Process new images
   cd ..
   npx tsx scripts/process-instagram-images.ts
   ```

### Creating Custom Categories

1. Add new category to `lib/constants.ts`:
   ```typescript
   export const CATEGORIES = {
     // ... existing categories
     'new-category': 'New Category Name',
   };
   ```

2. Create folder: `public/images/new-category/`

3. Update image metadata with new category tags

## 🎨 Changing Brand Colors

Edit `lib/constants.ts`:

```typescript
export const BRAND_COLORS = {
  pink: '#YOUR_COLOR',
  coral: '#YOUR_COLOR',
  gold: '#YOUR_COLOR',
  // ... etc
};
```

Then update Tailwind classes in components (e.g., `text-[#E89B9B]` → `text-[#YOUR_COLOR]`)

## ✏️ Editing Content

### Company Information

Edit `lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Your Company Name',
  tagline: 'Your Tagline',
  description: 'Your Description',
  established: '2012',
  email: 'your@email.com',
  instagram: '@your_instagram',
  instagramUrl: 'https://www.instagram.com/your_instagram',
};
```

### Services

Edit the `SERVICES` array in `lib/constants.ts`:

```typescript
export const SERVICES = [
  {
    id: 'unique-id',  // URL-friendly identifier
    title: 'Service Name',
    description: 'Service description',
    icon: '🎨',  // Emoji icon
  },
  // Add more services...
];
```

### About Page Content

Edit `app/about/page.tsx` to update the story, philosophy, and other content.

### Homepage Hero

Edit `components/Hero.tsx` to change the hero section text and buttons.

## 🖼️ Changing the Logo

Replace `public/images/logo.jpg` with your logo image. For best results:
- Use a square image (e.g., 500x500px)
- PNG or JPG format
- Keep file size under 100KB

## 📱 Adding New Pages

1. Create a new folder in `app/`: `app/new-page/`
2. Add `page.tsx` with your component:
   ```typescript
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';

   export default function NewPage() {
     return (
       <main className="min-h-screen bg-[#FAF7F2]">
         <Header />
         {/* Your content */}
         <Footer />
       </main>
     );
   }
   ```
3. Add link to navigation in `components/Header.tsx`

## 🎯 Contact Form

The contact form in `app/contact/page.tsx` currently logs to console. To add real functionality:

### Option 1: Email Service (e.g., SendGrid, Mailgun)

1. Install dependencies:
   ```bash
   npm install @sendgrid/mail
   ```

2. Create API route: `app/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';
   import sgMail from '@sendgrid/mail';

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

   export async function POST(request: Request) {
     const body = await request.json();

     await sgMail.send({
       to: 'info@rosenthalcreative.com',
       from: 'noreply@rosenthalcreative.com',
       subject: `Contact Form: ${body.name}`,
       text: body.message,
     });

     return NextResponse.json({ success: true });
   }
   ```

3. Update `app/contact/page.tsx` to call the API

### Option 2: Form Service (e.g., Formspree, Netlify Forms)

Update form action to point to your form service endpoint.

## 🌐 SEO Customization

Edit metadata in page files:

```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
};
```

## 🚀 Deployment

### Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

### Custom Domain

1. Add domain in hosting provider
2. Update DNS records:
   - A record: `@` → Hosting IP
   - CNAME: `www` → Your domain

## 📊 Analytics

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
   ```typescript
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <script async src={`https://www.googletagmanager.com/gtag/js?id=YOUR_ID`}></script>
           <script dangerouslySetInnerHTML={{
             __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'YOUR_ID');
             `
           }} />
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

## 🎨 Design Customization

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Tailwind Configuration

Edit `tailwind.config.ts` to add custom utilities, colors, or breakpoints.

### Custom CSS

Add global styles to `app/globals.css`

## 🔧 Advanced

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api.com
SENDGRID_API_KEY=your-key
```

Access in code:
```typescript
process.env.NEXT_PUBLIC_API_URL
```

### Image Optimization Settings

Edit `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // ... other options
  },
};
```

## 📝 Tips

1. **Test locally** before deploying: `npm run dev`
2. **Build before deploy**: `npm run build` to check for errors
3. **Keep backups** of `data/images-metadata.json`
4. **Optimize images** before uploading (compress, resize)
5. **Use version control** (Git) for all changes

---

Need help? Check the [Next.js documentation](https://nextjs.org/docs) or [Tailwind CSS docs](https://tailwindcss.com/docs).
