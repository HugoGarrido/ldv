import { ReactElement, ReactNode } from 'react';
import { Text, TextProps } from 'tamagui';
import { TypographyColor, TypographyVariant } from './types';

interface TypographyAllowedProperties {
  color?: TypographyColor;
  textAlign?: TextProps['textAlign'];
  textTransform?: TextProps['textTransform'];
  position?: TextProps['position'];
  variant?: TypographyVariant;
}

interface AllowedPropertiesByBreakpoint<T> {
  $base?: T;
  $small?: T;
  $medium?: T;
  $large?: T;
  $wide?: T;
}

function getFontFamily(variant?: TypographyVariant) {
  if (variant?.startsWith('heading')) {
    return '$heading';
  }

  return '$body';
}

function getFontColor(color?: TypographyColor) {
  switch (color) {
    case 'primary':
      return '$typographyPrimary';
    case 'accent':
      return '$typographyAccent';
    case 'black':
      return '$typographyBlack';
    case 'white':
      return '$typographyWhite';
    case 'body':
    default:
      return '$typographyBody';
  }
}

function getLineHeight(
  variant?: TypographyVariant,
  isBaseToSmall?: boolean
): string {
  if (variant?.startsWith('heading')) {
    switch (variant) {
      case 'heading1':
        return isBaseToSmall ? '$3' : '$1';
      case 'heading2':
        return isBaseToSmall ? '$4' : '$2';
      case 'heading3':
        return isBaseToSmall ? '$5' : '$3';
      case 'heading4':
        return isBaseToSmall ? '$7' : '$5';
      case 'heading5':
      case 'heading6':
      default:
        return isBaseToSmall ? '$7' : '$7';
    }
  }

  if (variant === 'body-small') return '$7';

  return '$6';
}

function getFontSize(
  variant?: TypographyVariant,
  isBaseToSmall?: boolean
): string {
  if (variant?.startsWith('heading')) {
    switch (variant) {
      case 'heading1':
        return isBaseToSmall ? '$3' : '$1';
      case 'heading2':
        return isBaseToSmall ? '$5' : '$2';
      case 'heading3':
        return isBaseToSmall ? '$6' : '$4';
      case 'heading4':
        return isBaseToSmall ? '$7' : '$6';
      case 'heading5':
      case 'heading6':
      default:
        return isBaseToSmall ? '$7' : '$7';
    }
  }

  if (variant === 'body-small') return '$5';

  return '$4';
}

function getStylePropsForBreakpoint(
  variant: TypographyVariant,
  breakpointStyle?: TypographyAllowedProperties,
  isBaseToSmall?: boolean
) {
  if (!breakpointStyle) return undefined;

  const currentVariant = breakpointStyle?.variant || variant;

  return {
    color: getFontColor(breakpointStyle?.color),
    fontFamily: getFontFamily(currentVariant),
    lineHeight: getLineHeight(currentVariant, isBaseToSmall),
    fontSize: getFontSize(currentVariant, isBaseToSmall),
    textAlign: breakpointStyle?.textAlign,
    textTransform: breakpointStyle?.textTransform,
  };
}

export interface TypographyProps
  extends TypographyAllowedProperties,
    AllowedPropertiesByBreakpoint<TypographyAllowedProperties> {
  children?: ReactNode;
  href?: string;
  textDecorationLine?: TextProps['textDecorationLine'];
  accessibilityRole?: TextProps['accessibilityRole'];
  accessibilityLevel?: number;
}

export function Typography({
  children,
  variant = 'body',
  color,
  $small,
  $medium,
  $large,
  $wide,
  textAlign,
  textTransform,
  textDecorationLine,
  href,
  ...props
}: TypographyProps) {
  return (
    <Text
      href={href}
      color={getFontColor(color)}
      fontFamily={getFontFamily(variant)}
      lineHeight={getLineHeight(variant, true)}
      fontSize={getFontSize(variant, true)}
      textAlign={textAlign}
      textDecorationLine={textDecorationLine}
      textTransform={textTransform}
      $small={getStylePropsForBreakpoint(variant, $small, true)}
      $medium={getStylePropsForBreakpoint(variant, $medium)}
      $large={getStylePropsForBreakpoint(variant, $large)}
      $wide={getStylePropsForBreakpoint(variant, $wide)}
      {...props}
    >
      {children}
    </Text>
  );
}

interface TypographyTextProps extends TypographyProps {
  variant: 'body' | 'body-small';
}

function TypographyText(props: TypographyTextProps): ReactElement {
  return <Typography {...props} />;
}

interface TypographyHeadingProps extends TypographyProps {
  variant:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6';
}

function TypographyHeading(props: TypographyHeadingProps) {
  return <Typography {...props} />;
}

Typography.Text = TypographyText;
Typography.Heading = TypographyHeading;
