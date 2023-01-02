import { extendTheme } from 'native-base';
import { theme } from '../theme/theme';

export const extendedNativeBaseTheme = extendTheme({
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

  fontConfig: {
    Sora: {
      400: {
        normal: 'Sora',
      },
    },
    Roboto: {
      400: {
        normal: 'Roboto',
      },
    },
  },

  fonts: {
    heading: 'Sora',
    body: 'Roboto',
    mono: 'Roboto',
  },
  breakpoints: {
    ...theme.breakpoints,
  },
});
