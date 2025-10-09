/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  // NIEUWE REGEL - skip Turbopack linting
  experimental: {
    turbo: {},
  },
}

module.exports = nextConfig
