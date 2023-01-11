import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/theme-base';
import { createTamagui } from 'tamagui';
import { fonts } from './tamaguiConfig/typography';

export const config = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: fonts,
});

export default config;
