/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.jp',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.self.com',
                port: '',
                pathname: 'photos/**',
            },
        ],
    },
};

export default nextConfig;
