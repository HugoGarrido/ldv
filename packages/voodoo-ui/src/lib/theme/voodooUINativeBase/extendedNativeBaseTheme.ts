import { extendTheme } from 'native-base';
import { theme } from '../theme';
import { spaces } from './spaces';

// reset native-base to be able to set size / space as a number
// https://docs.nativebase.io/next/default-theme#h2-size
const resetNativeBaseSpaces = Object.fromEntries(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
    96, 0.5, 1.5, 2.5, 3.5,
  ].map((value) => [value, value])
);

const resetNativeBaseBreakpoints = {
  sm: Number.MAX_SAFE_INTEGER,
  md: Number.MAX_SAFE_INTEGER,
  lg: Number.MAX_SAFE_INTEGER,
  xl: Number.MAX_SAFE_INTEGER,
  '2xl': Number.MAX_SAFE_INTEGER,
};

const resetNativeBaseRadii = {
  lg: Number.MAX_SAFE_INTEGER,
  md: Number.MAX_SAFE_INTEGER,
  sm: Number.MAX_SAFE_INTEGER,
  xl: Number.MAX_SAFE_INTEGER,
  xs: Number.MAX_SAFE_INTEGER,
};

export const extendedNativeBaseTheme = extendTheme({
  breakpoints: {
    ...resetNativeBaseBreakpoints,
    ...theme.breakpoints,
  },
  colors: {
    voodoo: {
      colors: {
        ...theme.colors,
      },
      typography: {
        colors: {
          ...theme.typographyColors,
        },
      },
    },
  },
  fonts: {
    ...theme.typography.fonts,
  },
  fontConfig: {
    ...theme.typography.fontConfig,
  },
  radii: {
    ...resetNativeBaseRadii,
    ...spaces,
  },
  size: {
    ...spaces,
  },
  space: {
    ...resetNativeBaseSpaces,
    ...spaces,
  },
});
