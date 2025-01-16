/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optional: Add custom webpack configuration to resolve `src` paths
  webpack: (config) => {
    config.resolve.modules.push('./src');
    return config;
  },

  images: {
    domains: ['your-domain.com'], // Add your domain if images are hosted externally
  },
};

export default nextConfig;