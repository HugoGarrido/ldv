import { VoodooUIResponsiveRecordValue } from '../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';

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
      fontSize: '16px',
      lineHeight: '26px',
    },
    bodySmall: {
      fontSize: '14px',
      lineHeight: '22px',
    },
  },
};
