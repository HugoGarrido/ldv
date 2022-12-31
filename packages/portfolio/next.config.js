//@ts-check
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    transpilePackages: [
      'react-native-web',
      'react-native-svg',
      'native-base',
      'react-native-safe-area-context',
      '@react-native-aria',
    ],
  },
  webpack: (config, context) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    };

    return config;
  },
};

module.exports = withNx(nextConfig);
