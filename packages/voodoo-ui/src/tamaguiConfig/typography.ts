import { Platform } from 'react-native';
import { createFont } from 'tamagui';

export const fonts = {
  heading: createFont({
    family: Platform.OS === 'web' ? 'var(--voodoo-ui-heading-font)' : 'Sora',
    size: {
      1: 62,
      2: 48,
      3: 38,
      4: 36,
      5: 32,
      6: 24,
      7: 18,
    },
    lineHeight: {
      1: 80,
      2: 62,
      3: 48,
      4: 42,
      5: 32,
      6: 26,
      7: 22,
    },
    letterSpacing: {
      1: 0.06,
      2: 0.06,
      3: 0.06,
      4: 0.06,
      5: 0.06,
      6: 0.06,
      7: 0.06,
    },
    weight: {
      1: 400,
      2: 400,
      3: 400,
      4: 400,
      5: 400,
      6: 400,
      7: 400,
    },
  }),
  body: createFont({
    family: Platform.OS === 'web' ? 'var(--voodoo-ui-body-font)' : 'Inter',
    size: {
      4: 16,
      5: 14,
    },
    lineHeight: {
      4: 26,
      5: 22,
    },
    letterSpacing: {
      5: 0.1,
      4: 0.06,
    },
    weight: {
      5: 400,
      4: 400,
    },
  }),
};
