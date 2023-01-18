import { breakpoints } from './lib/theme/voodooUI/breakpoints';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/theme-base';
import { createTamagui } from 'tamagui';
import { fonts } from './tamaguiConfig/typography';
import { tokens as voodooTokens } from './tamaguiConfig/tokens';

export const config = createTamagui({
  themes: {
    ...themes,
    light: {
      ...themes.light,
      color: {
        ...themes.light.color,
        ...voodooTokens.color,
        typographyBody: voodooTokens.color.typographyBlack,
      },
    },
    dark: {
      ...themes.light,
      color: {
        ...themes.light.color,
        ...voodooTokens.color,
        typographyBody: voodooTokens.color.typographyWhite,
      },
    },
  },
  tokens: {
    ...tokens,
    color: {
      ...tokens.color,
      ...voodooTokens.color,
    },
  },
  shorthands,
  fonts,
  breakpoints,
  media: {
    base: { minWidth: breakpoints.base },
    small: { minWidth: breakpoints.small },
    medium: { minWidth: breakpoints.medium },
    large: { minWidth: breakpoints.large },
    wide: { minWidth: breakpoints.wide },
  },
});

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
