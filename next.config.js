/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports = nextConfig