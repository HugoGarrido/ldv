import { breakpoints } from './lib/theme/voodooUI/breakpoints';
import { shorthands } from '@tamagui/shorthands';
import { themes } from '@tamagui/theme-base';
import { createTamagui } from 'tamagui';
import { fonts } from './tamaguiConfig/typography';
import { createAnimations } from '@tamagui/animations-css';
import { tokens as voodooTokens } from './tamaguiConfig/tokens';

export const config = createTamagui({
  tokens: voodooTokens,
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
      ...themes.dark,
      color: {
        ...themes.dark.color,
        ...voodooTokens.color,
        typographyBody: voodooTokens.color.typographyWhite,
      },
    },
  },
  animations: createAnimations({
    buttonHover: 'ease-in 200ms',
    medium: 'ease-in 300ms',
    slow: 'ease-in 450ms',
  }),
});

export type VoodooUIConf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends VoodooUIConf {}
}

export default config;
