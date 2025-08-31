/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 👈 this disables ESLint on Vercel build
  },
};

export default nextConfig;
