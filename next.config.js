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
  // GitHub Pages configuration - remove basePath for simpler deployment
  basePath: '',
  assetPrefix: '',
  // Optimize for static hosting
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Ensure all routes are statically generated
  generateBuildId: () => 'build',
};

module.exports = nextConfig;
