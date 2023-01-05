import { VoodooUIBreakpointName } from '../../../theme/voodooUI/breakpoints';
import {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyVariant } from '../types';

function typographyVariantToFontFamily(variant: TypographyVariant): string {
  if (variant.startsWith('heading')) {
    return 'Sora';
  }

  return 'Roboto';
}

export function getVariantToFontFamilyProps(
  variant: VoodooUIResponsiveValue<TypographyVariant> | undefined
): VoodooUIResponsiveRecordValue<string> | string {
  if (!variant) {
    return typographyVariantToFontFamily('body');
  }

  if (typeof variant === 'string')
    return typographyVariantToFontFamily(variant);

  const keys = Object.keys(variant) as VoodooUIBreakpointName[];

  if (keys.length === 0) return typographyVariantToFontFamily('body');

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<string>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = typographyVariantToFontFamily(
      variant[breakpointName] || 'body'
    );
  });

  return responsiveValue;
}
