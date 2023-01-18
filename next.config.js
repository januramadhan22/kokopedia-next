/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://fakestoreapi.com", "https://unsplash.com"],
  },
};
module.exports = nextConfig;
