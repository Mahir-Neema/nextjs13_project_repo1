/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.pixabay.com", "dog.ceo"]
  }
}


module.exports = nextConfig
