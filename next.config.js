const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const dependencies = require('./package.json').dependencies;

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'vendas',
        remotes: {
          info: `info@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          '@emotion/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
          '@mui/': {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
