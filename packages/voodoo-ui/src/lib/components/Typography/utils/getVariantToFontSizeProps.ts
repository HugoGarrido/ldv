import { VoodooUIBreakpointName } from '../../../theme/voodooUI/breakpoints';
import {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyVariant } from '../types';
import { theme } from '../../../theme/theme';

function typographyVariantToFontSize(
  variant: TypographyVariant,
  breakpointName?: VoodooUIBreakpointName
): string | VoodooUIResponsiveValue<string> {
  const { variants } = theme.typography;

  switch (variant) {
    case 'heading1':
      return breakpointName
        ? variants.heading1.fontSize[breakpointName]
        : variants.heading1.fontSize;
    case 'heading2':
      return breakpointName
        ? variants.heading2.fontSize[breakpointName]
        : variants.heading2.fontSize;
    case 'heading3':
      return breakpointName
        ? variants.heading3.fontSize[breakpointName]
        : variants.heading3.fontSize;
    case 'heading4':
      return breakpointName
        ? variants.heading4.fontSize[breakpointName]
        : variants.heading4.fontSize;
    case 'heading5':
      return breakpointName
        ? variants.heading5.fontSize[breakpointName]
        : variants.heading5.fontSize;
    case 'heading6':
      return breakpointName
        ? variants.heading6.fontSize[breakpointName]
        : variants.heading6.fontSize;
    case 'body-small':
      return variants.bodySmall.fontSize;
    case 'body':
    default:
      return variants.body.fontSize;
  }
}

export function getVariantToFontFamilySizeProps(
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
