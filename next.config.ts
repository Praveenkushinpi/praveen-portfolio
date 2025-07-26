/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-readme-stats.hackclub.dev" },
    ],
  },
};

module.exports = nextConfig;
