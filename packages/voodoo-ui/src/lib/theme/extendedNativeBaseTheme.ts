import { extendTheme } from 'native-base';
import { theme } from '../theme/theme';

export const extendedNativeBaseTheme = extendTheme({
  colors: {
    voodoo: {
      typography: {
        colors: {
          body: '#00ff00',
          primary: '#ff0000',
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
