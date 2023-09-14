/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
        return '0.1.0';
    },
};

module.exports = nextConfig;
