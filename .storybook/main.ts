import type { StorybookConfig } from '@storybook/core-common';

// interface TempStorybookConfig extends StorybookConfig {
//   env: (config: Record<string, any>) => Record<string, any>;
// }

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  // env: (config: any) => {
  //   console.log({ configMain: config });
  //   return {
  //     ...config,
  //     // TAMAGUI_TARGET: 'web',
  //   };
  // },
};
