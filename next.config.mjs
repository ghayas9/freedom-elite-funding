/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    PASSWORD: process.env.PASSWORD,
  },
  reactStrictMode: true,
  images: {
    domains: ['sureleveragefunding.com'],
    unoptimized:true,
  },
};

export default nextConfig;
