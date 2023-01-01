import { VoodooUIBreakpointName } from '../../../theme/breakpoints';
import type {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyColor } from './../types';

function typographyVariantToFontFamily(color: string): string {
  return `voodoo.typography.colors.${color}`;
}

export function getColorToColoProps(
  color?: VoodooUIResponsiveValue<TypographyColor> | undefined
) {
  if (!color) return typographyVariantToFontFamily('body');

  if (typeof color === 'string') return typographyVariantToFontFamily(color);

  const keys = Object.keys(color) as VoodooUIBreakpointName[];

  if (keys.length === 0) return typographyVariantToFontFamily('body');

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<string>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = typographyVariantToFontFamily(
      color[breakpointName] || 'body'
    );
  });

  return responsiveValue;
}
