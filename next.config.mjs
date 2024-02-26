/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.giphy.com',
              port: '',
              pathname: '/media/**',
            },

            {
                protocol: 'https',
                hostname: '**.giphy.com',
                port: '',
                pathname: '/avatars/**',
              },
          ],
    }
};

export default nextConfig;
