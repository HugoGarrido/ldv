import { tokens } from '../../../tamaguiConfig/tokens';
import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { ButtonColor, ButtonVariant } from './Button';
import { ButtonText } from './ButtonText';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  testID?: PressableProps['testID'];
  onPress?: PressableProps['onPress'];
  onBlur?: PressableProps['onBlur'];
}

const sharedButtonStyle = {
  display: 'inline-flex',
  width: 'fit-content',
  borderRadius: '$voodoo.3',
  paddingHorizontal: '$voodoo.3',
  paddingVertical: 7,
  borderColor: 'transparent',
  cursor: 'pointer',
  borderWidth: 2,
} as const;

const SolidButton = styled(Stack, {
  name: 'SolidButton',
  ...sharedButtonStyle,

  variants: {
    colorVariant: {
      primary: {
        backgroundColor: tokens.color.primary500,
      },
      default: {
        backgroundColor: tokens.color.accent500,
      },
      white: {
        backgroundColor: tokens.color.white800,
      },
      black: {
        backgroundColor: tokens.color.black900,
      },
    },
  } as const,
});

const TextButton = styled(Stack, {
  name: 'TextButton',
  ...sharedButtonStyle,
  borderColor: 'transparent',
  backgroundColor: 'transparent',

  variants: {
    colorVariant: {
      primary: {},
      default: {},
      white: {
        backgroundColor: tokens.color.white800,
      },
      black: {
        backgroundColor: tokens.color.black900,
      },
    },
  } as const,
});

const OutlinedButton = styled(Stack, {
  name: 'OutlinedButton',
  ...sharedButtonStyle,
  backgroundColor: 'transparent',

  variants: {
    colorVariant: {
      primary: {
        borderColor: tokens.color.primary500,
      },
      default: {
        borderColor: tokens.color.accent500,
      },
      white: {
        borderColor: tokens.color.white900,
      },
      black: {
        borderColor: tokens.color.black900,
      },
    },
  } as const,
});

export function Button({
  children,
  variant,
  color = 'primary',
  ...props
}: ButtonProps) {
  const sharedProps = {
    ...props,
    colorVariant: color,
    hoverStyle: { scale: 1.05 },
    pressStyle: {
      scale: 0.95,
    },
    animation: 'buttonHover',
  };

  if (variant === 'outlined') {
    return (
      <OutlinedButton {...sharedProps}>
        <ButtonText color={color}>{children}</ButtonText>
      </OutlinedButton>
    );
  }

  if (variant === 'text') {
    return (
      <TextButton {...sharedProps}>
        <ButtonText color={color}>{children}</ButtonText>
      </TextButton>
    );
  }

  return (
    <SolidButton {...sharedProps}>
      <ButtonText color={color}>{children}</ButtonText>
    </SolidButton>
  );
}
