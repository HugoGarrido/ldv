import { Pressable } from 'native-base';
import { ReactNode } from 'react';
import { View } from '../../native-base/primitives';
import { PressableProps } from '../../native-base/primitives/NBPressable';
import { TypographyBuilder } from '../Typography/Typography';
import { BorderWhenInteracted } from './BorderWhenInteracted';

export type ButtonVariant = 'solid' | 'outlined' | 'text';
export type ButtonColor = 'default' | 'primary';

interface ButtonState {
  isDisabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
}

function getCurrentPropertyValue(
  variant: ButtonVariant,
  color: ButtonColor,
  property: string,
  state: ButtonState
) {
  const buttonThemeKey = `voodoo.button.${color}.${variant}`;

  const { isDisabled, isHovered, isFocused, isPressed } = state;

  if (isDisabled) {
    return `voodoo.button.${color}.disabled.${property}`;
  }

  if (isHovered) {
    return `${buttonThemeKey}.hovered.${property}`;
  }

  if (isPressed) {
    return `${buttonThemeKey}.pressed.${property}`;
  }

  if (isFocused) {
    return `${buttonThemeKey}.focused.${property}`;
  }

  return `${buttonThemeKey}.${property}`;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  testID?: PressableProps['testID'];
  hitSlop?: PressableProps['hitSlop'];
  onPress?: PressableProps['onPress'];
  onBlur?: PressableProps['onBlur'];
  onFocus?: PressableProps['onBlur'];
  onHoverIn?: PressableProps['onHoverIn'];
  onHoverOut?: PressableProps['onHoverOut'];
  onPressIn?: PressableProps['onPressIn'];
  onPressOut?: PressableProps['onPressOut'];
  onLongPress?: PressableProps['onLongPress'];
}

export function Button({
  children,
  variant = 'solid',
  color = 'default',
  disabled,
  ...props
}: ButtonProps) {
  const buttonThemeKey = `voodoo.button.${color}.${variant}`;

  return (
    <Pressable
      display="inline-flex"
      width="fit-content"
      maxWidth="voodoo.button.maxWidth"
      disabled={disabled}
      {...props}
    >
      {({ isHovered, isPressed, isFocused }) => {
        const currentColor = getCurrentPropertyValue(variant, color, 'color', {
          isDisabled: disabled,
          isFocused,
          isHovered,
          isPressed,
        });

        const currentBorderColor = getCurrentPropertyValue(
          variant,
          color,
          'borderColor',
          {
            isDisabled: disabled,
            isFocused,
            isHovered,
            isPressed,
          }
        );

        return (
          <View
            backgroundColor={
              isHovered || isPressed
                ? `${buttonThemeKey}.pressed.backgroundColor`
                : `${buttonThemeKey}.backgroundColor`
            }
            borderRadius="voodoo.button.borderRadius"
            paddingX="voodoo.button.paddingX"
            paddingY="voodoo.button.paddingY"
            _web={{
              style: {
                // @ts-expect-error valid css property
                transition: 'all 200ms ease-in',
                transform: [
                  {
                    scale: isHovered && !isPressed ? 1.02 : 1,
                  },
                ],
              },
            }}
            position="relative"
          >
            <BorderWhenInteracted
              variant={variant}
              isFocused={isFocused}
              isHovered={isHovered}
              borderColor={currentBorderColor}
            />

            <View>
              <TypographyBuilder
                variant="body"
                textAlign="center"
                color={currentColor}
              >
                {children}
              </TypographyBuilder>
            </View>
          </View>
        );
      }}
    </Pressable>
  );
}
