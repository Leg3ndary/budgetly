/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            net: false,
            tls: false,
            fs: false,
            child_process: false,
            dns: false,
            "timers/promises": false,
            os: false,
            path: false,
            crypto: false,
            stream: false,
            http: false,
            https: false,
            zlib: false,
            util: false,
        };
        return config;
    },
};

module.exports = nextConfig;
