import { typography } from './../lib/theme/voodooUI/typography';
import { createTokens } from 'tamagui';
import { palette } from '../lib/theme/voodooUI/palette';
import { spaces } from '../lib/theme/voodooUINativeBase/spaces';

export const tokens = createTokens({
  color: {
    // primary
    primary50: palette.electricViolet[50],
    primary100: palette.electricViolet[100],
    primary200: palette.electricViolet[200],
    primary300: palette.electricViolet[300],
    primary400: palette.electricViolet[400],
    primary500: palette.electricViolet[500],
    primary600: palette.electricViolet[600],
    primary700: palette.electricViolet[700],
    primary800: palette.electricViolet[800],
    primary900: palette.electricViolet[900],
    // body
    body50: palette.shark[50],
    body100: palette.shark[100],
    body200: palette.shark[200],
    body300: palette.shark[300],
    body400: palette.shark[400],
    body500: palette.shark[500],
    body600: palette.shark[600],
    body700: palette.shark[700],
    body800: palette.shark[800],
    body900: palette.shark[900],
    // accent
    accent50: palette.ultramarine[50],
    accent100: palette.ultramarine[100],
    accent200: palette.ultramarine[200],
    accent300: palette.ultramarine[300],
    accent400: palette.ultramarine[400],
    accent500: palette.ultramarine[500],
    accent600: palette.ultramarine[600],
    accent700: palette.ultramarine[700],
    accent800: palette.ultramarine[800],
    accent900: palette.ultramarine[900],
    // black
    black50: palette.shark[50],
    black100: palette.shark[100],
    black200: palette.shark[200],
    black300: palette.shark[300],
    black400: palette.shark[400],
    black500: palette.shark[500],
    black600: palette.shark[600],
    black700: palette.shark[700],
    black800: palette.shark[800],
    black900: palette.shark[900],
    // white
    white50: palette.white[50],
    white100: palette.white[100],
    white200: palette.white[200],
    white300: palette.white[300],
    white400: palette.white[400],
    white500: palette.white[500],
    white600: palette.white[600],
    white700: palette.white[700],
    white800: palette.white[800],
    white900: palette.white[900],
    // typography
    typographyBody: typography.colors.body,
    typographyPrimary: palette.electricViolet[600],
    typographyAccent: typography.colors.accent,
    typographyBlack: typography.colors.black,
    typographyWhite: typography.colors.white,
  },
  space: {
    ...spaces,
  },
  size: {
    ...spaces,
  },
  radius: {},
  zIndex: {},
  // ... see configuration docs for required tokens
});
