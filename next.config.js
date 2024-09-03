const { withNextVideo } = require('next-video/process')

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.smartsites.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'www.ict.ae',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'webtest.ict.ae',
            pathname: '**',
          },
        ]
        }
  }
