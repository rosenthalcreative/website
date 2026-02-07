import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Set base path for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Better compatibility with static hosting
};

export default nextConfig;
