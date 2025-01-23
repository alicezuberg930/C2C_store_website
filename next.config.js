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
  // webpack5: true,
  // webpack: config => {
  //   config.resolve.fallback = { fs: false }

  //   return config
  // }
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }

  //   return config
  // }
}

module.exports = nextConfig
