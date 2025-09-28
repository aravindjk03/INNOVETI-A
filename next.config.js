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
  },
  trailingSlash: true,
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/INNOVETI-A' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/INNOVETI-A/' : '',
  // Ensure proper static file handling
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

module.exports = nextConfig;
