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
    API_URL: process.env.API_URL
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
