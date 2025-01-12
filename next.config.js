/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  env: {
    DEVELOPMENT_API_URL: process.env.DEVELOPMENT_API_URL,
    PRODUCTION_API_URL: process.env.PRODUCTION_API_URL,
    ENVIRONMENT: process.env.ENVIRONMENT
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
