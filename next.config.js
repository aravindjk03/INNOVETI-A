/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp'],
  },
  trailingSlash: true,
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/repo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repo/' : '',
  // Optimize for static hosting
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Ensure all routes are statically generated
  generateBuildId: () => 'build',
};

module.exports = nextConfig;
