import { extendTheme } from 'native-base';
import { theme } from '../theme';
import { button } from './button';
import { spaces } from './spaces';
import { typography } from './typography';

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
  borderWidths: {
    ...resetNativeBaseSpaces,
    ...spaces,
    voodoo: {
      button: button.borderWidths,
    },
  },
  colors: {
    voodoo: {
      colors: {
        ...theme.colors,
        palettes: { voodooUI: theme.palette },
      },
      button: button.colors,
      link: {
        colors: theme.link.colors,
      },
      typography: {
        colors: {
          ...theme.typography.colors,
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
  fontSizes: {
    voodoo: {
      typography: {
        ...typography.fontSizes,
      },
    },
  },
  radii: {
    ...resetNativeBaseRadii,
    ...spaces,
    voodoo: {
      button: button.radii,
    },
  },
  sizes: {
    ...spaces,
    voodoo: {
      button: button.sizes,
    },
  },
  space: {
    ...resetNativeBaseSpaces,
    ...spaces,
    voodoo: {
      button: button.space,
    },
  },
});
