import { VoodooUIPalette } from './../lib/theme/voodooUI/palette';
import { typography } from './../lib/theme/voodooUI/typography';
import { createTokens } from 'tamagui';
import { palette } from '../lib/theme/voodooUI/palette';

function paletteToToken(palette: VoodooUIPalette, colorKey: string) {
  const tokens: Record<string, string> = {};
  Object.entries(palette).forEach(([k, v]) => {
    tokens[`${colorKey}${k}`] = v;
  });

  return tokens;
}

export const tokens = createTokens({
  color: {
    ...paletteToToken(palette.shark, 'body'),
    ...paletteToToken(palette.electricViolet, 'primary'),
    ...paletteToToken(palette.ultramarine, 'accent'),
    ...paletteToToken(palette.shark, 'black'),
    ...paletteToToken(palette.white, 'white'),
    typographyBody: typography.colors.body,
    typographyPrimary: typography.colors.primary,
    typographyAccent: typography.colors.accent,
    typographyBlack: typography.colors.black,
    typographyWhite: typography.colors.white,
  },
  space: {},
  size: {},
  radius: {},
  zIndex: {},
  // ... see configuration docs for required tokens
});
