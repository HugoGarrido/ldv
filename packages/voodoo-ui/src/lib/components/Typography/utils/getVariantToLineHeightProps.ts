import { VoodooUIBreakpointName } from '../../../theme/voodooUI/breakpoints';
import {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyVariant } from '../types';
import { theme } from '../../../theme/theme';

function typographyVariantToLineHeight(
  variant: TypographyVariant,
  breakpointName?: VoodooUIBreakpointName
): string | VoodooUIResponsiveValue<string> {
  const { variants } = theme.typography;

  switch (variant) {
    case 'heading1':
      return breakpointName
        ? variants.heading1.lineHeight[breakpointName]
        : variants.heading1.lineHeight;
    case 'heading2':
      return breakpointName
        ? variants.heading2.lineHeight[breakpointName]
        : variants.heading2.lineHeight;
    case 'heading3':
      return breakpointName
        ? variants.heading3.lineHeight[breakpointName]
        : variants.heading3.lineHeight;
    case 'heading4':
      return breakpointName
        ? variants.heading4.lineHeight[breakpointName]
        : variants.heading4.lineHeight;
    case 'heading5':
      return breakpointName
        ? variants.heading5.lineHeight[breakpointName]
        : variants.heading5.lineHeight;
    case 'heading6':
      return breakpointName
        ? variants.heading6.lineHeight[breakpointName]
        : variants.heading6.lineHeight;
    case 'body-small':
      return variants.bodySmall.lineHeight;
    case 'body':
    default:
      return variants.body.lineHeight;
  }
}

export function getVariantToFontLineHeightProps(
  variant: VoodooUIResponsiveValue<TypographyVariant> | undefined
): VoodooUIResponsiveValue<string> {
  if (!variant) {
    return typographyVariantToLineHeight('body');
  }

  if (typeof variant === 'string')
    return typographyVariantToLineHeight(variant);

  const keys = Object.keys(variant) as VoodooUIBreakpointName[];

  if (keys.length === 0) return typographyVariantToLineHeight('body');

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<string>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = typographyVariantToLineHeight(
      variant[breakpointName] || 'body',
      breakpointName
    ) as string;
  });

  return responsiveValue;
}
