import { ITextProps, Text } from 'native-base';
import { FC, ReactElement, ReactNode } from 'react';
import { ViewProps } from '../../native-base/primitives/NBView';
import { VoodooUIResponsiveValue } from '../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import { TypographyColor, TypographyVariant } from './types';
import { getColorToColoProps } from './utils/getColorToColorProps';
import { getVariantToFontFamilyProps } from './utils/getVariantToFontFamilyProps';
import { getVariantToFontFamilySizeProps } from './utils/getVariantToFontSizeProps';
import { getVariantToFontLineHeightProps } from './utils/getVariantToLineHeightProps';

interface AuthorizedNativeBaseTextProps
  extends Pick<
    ITextProps,
    | 'textAlign'
    | 'testID'
    | 'isTruncated'
    | 'noOfLines'
    | 'textTransform'
    | 'zIndex'
    | 'position'
  > {}

interface TypographyProps extends AuthorizedNativeBaseTextProps {
  children: ReactNode;
  color?: VoodooUIResponsiveValue<TypographyColor>;
  variant?: VoodooUIResponsiveValue<TypographyVariant>;
  accessibilityRole?: ViewProps['accessibilityRole'];
  accessibilityLevel?: number;
}

function TypographyText({
  color,
  variant,
  children,
  ...props
}: TypographyProps) {
  const currentFontFamily = getVariantToFontFamilyProps(variant);
  const currentColor = getColorToColoProps(color);
  const currentFontSize = getVariantToFontFamilySizeProps(variant);
  const currentLineHeight = getVariantToFontLineHeightProps(variant);

  return (
    <Text
      {...props}
      fontFamily={currentFontFamily}
      color={currentColor}
      fontSize={currentFontSize}
      lineHeight={currentLineHeight}
    >
      {children}
    </Text>
  );
}

interface TypographyHeadingProps extends Exclude<TypographyProps, 'variant'> {}

function makeTypographyHeading(
  variant: TypographyVariant,
  level: number
): FC<TypographyHeadingProps> {
  function TypographyHeading(props: TypographyHeadingProps): ReactElement {
    return (
      <TypographyText
        accessibilityRole="header"
        variant={variant}
        {...props}
        accessibilityLevel={level}
      />
    );
  }

  return TypographyHeading;
}

export function Typography(props: TypographyProps) {
  if (__DEV__) {
    throw new Error(
      '[VoodooUI] Typography - Use components exported from Typography'
    );
  }
  return null;
}

Typography.Text = TypographyText;
Typography.Heading1 = makeTypographyHeading('heading1', 1);
Typography.Heading2 = makeTypographyHeading('heading2', 2);
Typography.Heading3 = makeTypographyHeading('heading3', 3);
Typography.Heading4 = makeTypographyHeading('heading4', 4);
Typography.Heading5 = makeTypographyHeading('heading5', 5);
Typography.Heading6 = makeTypographyHeading('heading6', 6);
