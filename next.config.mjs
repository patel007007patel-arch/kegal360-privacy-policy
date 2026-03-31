/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
      },
    ];
  },
};

export default nextConfig;
