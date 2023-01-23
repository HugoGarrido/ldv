import { tokens } from 'packages/voodoo-ui/src/tamaguiConfig/tokens';
import { ReactNode } from 'react';
import { styled, Text } from 'tamagui';
import { ButtonColor, ButtonVariant } from './Button';

const SolidText = styled(Text, {
  fontFamily: '$body',
  fontSize: '$6',
  animation: 'buttonHover',

  variants: {
    colorVariant: {
      primary: {
        color: tokens.color.white900,
      },
      default: {
        color: tokens.color.white900,
      },
      white: {
        color: tokens.color.black900,
      },
      black: {
        color: tokens.color.white900,
      },
    },
  } as const,
});

interface ButtonTextProps {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export function ButtonText({ color, children }: ButtonTextProps) {
  return (
    <SolidText colorVariant={color} hoverStyle={{ color: '$accent200' }}>
      {children}
    </SolidText>
  );
}
