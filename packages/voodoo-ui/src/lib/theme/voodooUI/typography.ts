import { TypographyColor } from './../../components/Typography/types';
import { VoodooUIResponsiveRecordValue } from '../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { colors } from './colors';

const typographyColor: Record<TypographyColor, string> = {
  body: colors.body[900],
  primary: colors.primary[900],
  black: colors.black[900],
  white: colors.white[900],
  accent: colors.accent[900],
};

function makeTypographyConfig<T>(
  valueBase: T,
  valueMedium: T
): VoodooUIResponsiveRecordValue<T> {
  return {
    base: valueBase,
    small: valueBase,
    medium: valueMedium,
    large: valueMedium,
    wide: valueMedium,
  };
}

export const typography = {
  fonts: {
    heading: 'Sora',
    body: 'Roboto',
    mono: 'Roboto',
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
  variants: {
    heading1: {
      fontSize: makeTypographyConfig('38px', '62px'),
      lineHeight: makeTypographyConfig('48px', '80px'),
    },
    heading2: {
      fontSize: makeTypographyConfig('32px', '48px'),
      lineHeight: makeTypographyConfig('42px', '62px'),
    },
    heading3: {
      fontSize: makeTypographyConfig('24px', '36px'),
      lineHeight: makeTypographyConfig('32px', '48px'),
    },
    heading4: {
      fontSize: makeTypographyConfig('18px', '24px'),
      lineHeight: makeTypographyConfig('22px', '32px'),
    },
    heading5: {
      fontSize: makeTypographyConfig('18px', '18px'),
      lineHeight: makeTypographyConfig('22px', '22px'),
    },
    heading6: {
      fontSize: makeTypographyConfig('18px', '18px'),
      lineHeight: makeTypographyConfig('22px', '22px'),
    },
    body: {
      fontSize: makeTypographyConfig('16px', '16px'),
      lineHeight: '26px',
    },
    bodySmall: {
      fontSize: makeTypographyConfig('14px', '14px'),
      lineHeight: '22px',
    },
  },
  colors: typographyColor,
};
