const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const dependencies = require('./package.json').dependencies;

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
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
          // '@emotion/react': {
          //   requiredVersion: dependencies['@emotion/react'],
          //   singleton: true,
          // },
          // '@emotion/server': {
          //   requiredVersion: dependencies['@emotion/server'],
          //   singleton: true,
          // },
          // '@emotion/styled': {
          //   requiredVersion: dependencies['@emotion/styled'],
          //   singleton: true,
          // },
          // '@mui/icons-material': {
          //   requiredVersion: dependencies['@mui/icons-material'],
          //   singleton: true,
          // },
          // '@mui/lab': {
          //   requiredVersion: dependencies['@mui/lab'],
          //   singleton: true,
          // },
          // '@mui/styles': {
          //   requiredVersion: dependencies['@mui/styles'],
          //   singleton: true,
          // },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            singleton: true,
          },
          react: {
            requiredVersion: dependencies['react'],
            singleton: true,
          },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
