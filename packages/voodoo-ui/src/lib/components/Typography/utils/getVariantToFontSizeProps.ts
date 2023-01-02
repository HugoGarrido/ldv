import { VoodooUIBreakpointName } from '../../../theme/breakpoints';
import {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyVariant } from '../types';

// TODO move those const to the theme
const heading1ResponsiveProps = {
  base: '32px',
  small: '32px',
  medium: '48px',
  large: '48px',
  wide: '48px',
};

const heading2ResponsiveProps = {
  base: '24px',
  small: '24px',
  medium: '32px',
  large: '32px',
  wide: '32px',
};

const heading3ResponsiveProps = {
  base: '24px',
  small: '24px',
  medium: '32px',
  large: '32px',
  wide: '32px',
};

const heading4ResponsiveProps = {
  base: '24px',
  small: '24px',
  medium: '32px',
  large: '32px',
  wide: '32px',
};

const heading5ResponsiveProps = {
  base: '24px',
  small: '24px',
  medium: '32px',
  large: '32px',
  wide: '32px',
};

const heading6ResponsiveProps = {
  base: '24px',
  small: '24px',
  medium: '32px',
  large: '32px',
  wide: '32px',
};

const bodyFontSize = '16px';
const bodySmallFontSize = '14px';

function typographyVariantToFontSize(
  variant: TypographyVariant,
  breakpointName?: VoodooUIBreakpointName
): string | VoodooUIResponsiveValue<string> {
  switch (variant) {
    case 'heading1':
      return breakpointName
        ? heading1ResponsiveProps[breakpointName]
        : heading1ResponsiveProps;
    case 'heading2':
      return breakpointName
        ? heading2ResponsiveProps[breakpointName]
        : heading2ResponsiveProps;
    case 'heading3':
      return breakpointName
        ? heading3ResponsiveProps[breakpointName]
        : heading3ResponsiveProps;
    case 'heading4':
      return breakpointName
        ? heading4ResponsiveProps[breakpointName]
        : heading4ResponsiveProps;
    case 'heading5':
      return breakpointName
        ? heading5ResponsiveProps[breakpointName]
        : heading5ResponsiveProps;
    case 'heading6':
      return breakpointName
        ? heading6ResponsiveProps[breakpointName]
        : heading6ResponsiveProps;
    case 'body-small':
      return bodySmallFontSize;
    case 'body':
    default:
      return bodyFontSize;
  }
}

export function getVariantToFontFamilySize(
  variant: VoodooUIResponsiveValue<TypographyVariant> | undefined
): VoodooUIResponsiveValue<string> {
  if (!variant) {
    return typographyVariantToFontSize('body');
  }

  if (typeof variant === 'string') return typographyVariantToFontSize(variant);

  const keys = Object.keys(variant) as VoodooUIBreakpointName[];

  if (keys.length === 0) return typographyVariantToFontSize('body');

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<string>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = typographyVariantToFontSize(
      variant[breakpointName] || 'body',
      breakpointName
    ) as string;
  });

  return responsiveValue;
}
