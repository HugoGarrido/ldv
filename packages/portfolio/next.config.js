//@ts-check
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const { withTamagui } = require('@tamagui/next-plugin');
const withTM = require('next-transpile-modules');
const { withExpo } = require('@expo/next-adapter');
const path = require('path');

process.env.IGNORE_TS_CONFIG_PATHS = 'true';
process.env.TAMAGUI_TARGET = 'web';

const disableExtraction = process.env.NODE_ENV === 'development';
if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

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
    transpilePackages: ['react-native-web', 'react-native', 'native-base'],
    plugins: true,
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};

const transform = withPlugins(
  [
    withNx,
    withTamagui({
      config: './packages/voodoo-ui/src/tamagui.config.ts', // Need full path or it doesn't work
      components: ['tamagui'],
      importsWhitelist: ['constants.js', 'colors.js'],
      logTimings: true,
      disableExtraction,
      excludeReactNativeWebExports: [
        'Switch',
        'ProgressBar',
        'Picker',
        'Modal',
        'VirtualizedList',
        'VirtualizedSectionList',
        'AnimatedFlatList',
        'FlatList',
        'CheckBox',
        'Touchable',
        'SectionList',
      ],
    }),
  ],
  nextConfig
);

module.exports = transform;
