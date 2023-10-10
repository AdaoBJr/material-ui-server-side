const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const dependencies = require('./package.json').dependencies;

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // info: createDelegatedModule(require.resolve('./remote-delegate.js'), {
    //   remote: `info@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    // }),
    info: `info@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'vendas',
        remotes: remotes(options.isServer),
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          '@emotion/react': {
            eager: true,
            requiredVersion: dependencies['@emotion/react'],
            singleton: true,
          },
          '@emotion/server': {
            eager: true,
            requiredVersion: dependencies['@emotion/server'],
            singleton: true,
          },
          '@emotion/styled': {
            eager: true,
            requiredVersion: dependencies['@emotion/styled'],
            singleton: true,
          },
          '@mui/material': {
            requiredVersion: dependencies['@mui/material'],
            singleton: true,
            eager: true,
          },
          '@mui/icons-material': {
            requiredVersion: dependencies['@mui/icons-material'],
            singleton: true,
            eager: true,
          },
          '@mui/lab': {
            requiredVersion: dependencies['@mui/lab'],
            singleton: true,
            eager: true,
          },
          '@mui/styles': {
            requiredVersion: dependencies['@mui/styles'],
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
