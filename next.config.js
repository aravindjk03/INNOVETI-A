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
  // Simple configuration for GitHub Pages
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
