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

function typographyVariantToFontSize(
  variant: TypographyVariant,
  breakpointName?: VoodooUIBreakpointName
): string {
  if (variant === 'body-small') return '14px';

  // Only heading sizes differes with breakpont
  if (breakpointName) {
    if (variant === 'heading1') return heading1ResponsiveProps[breakpointName];
    if (variant === 'heading2') return heading2ResponsiveProps[breakpointName];
    if (variant === 'heading3') return heading3ResponsiveProps[breakpointName];
    if (variant === 'heading4') return heading4ResponsiveProps[breakpointName];
    if (variant === 'heading5') return heading5ResponsiveProps[breakpointName];
    if (variant === 'heading6') return heading6ResponsiveProps[breakpointName];
  }

  return '16px';
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
    );
  });

  return responsiveValue;
}
