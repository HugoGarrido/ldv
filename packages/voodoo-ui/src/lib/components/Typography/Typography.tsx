import { Text } from 'native-base';
import { ReactNode } from 'react';
import { VoodooUIResponsiveValue } from '../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyColor, TypographyVariant } from './types';
import { getColorToColoProps } from './utils/getColorToColorProps';
import { getVariantToFontFamilyProps } from './utils/getVariantToFontFamilyProps';

interface TypographyProps {
  children: ReactNode;
  color?: VoodooUIResponsiveValue<TypographyColor>;
  variant?: VoodooUIResponsiveValue<TypographyVariant>;
}

export function Typography({ color, variant, children }: TypographyProps) {
  const currentFontFamily = getVariantToFontFamilyProps(variant);
  const currentColor = getColorToColoProps(color);

  return (
    <Text fontFamily={currentFontFamily} color={currentColor}>
      {children}
    </Text>
  );
}
