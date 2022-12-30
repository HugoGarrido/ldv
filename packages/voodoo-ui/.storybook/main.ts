import { rootMain } from '../../../.storybook/main';
import webpack from 'webpack';

import type { StorybookConfig, Options } from '@storybook/core-common';

interface TempStorybookConfig extends StorybookConfig {
  env?: (config: Record<string, any>) => Record<string, any>;
}

const config: TempStorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...(rootMain.addons || []),
    '@nrwl/react/plugins/storybook',
    '@storybook/addon-react-native-web',
  ],
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options);
    }

    if (config.plugins) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
        })
      );
    } else {
      config.plugins = [];
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
        })
      );
    }

    // add your own webpack tweaks if needed

    return config;
  },
  // env: (config) => {
  //   console.log({ config });
  //   return {
  //     ...config,
  //     // NX_TAMAGUI_TARGET: 'web',
  //     // NX_EXAMPLE_VAR: 'lol',
  //     // EXAMPLE_VAR: 'lol2',
  //   };
  // },
};

module.exports = config;
