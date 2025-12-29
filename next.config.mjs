/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true
  },
  experimental: {
    // Correct key for Next.js 15
    allowedReplitOrigins: ["*"]
  }
};

export default nextConfig;
