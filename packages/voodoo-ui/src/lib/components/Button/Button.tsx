import { Pressable } from 'native-base';
import { ReactNode } from 'react';
import { View } from '../../native-base/primitives';
import { PressableProps } from '../../native-base/primitives/NBPressable';
import { TypographyBuilder } from '../Typography/TypographyNb';
import { BorderWhenInteracted } from './BorderWhenInteracted';

export type ButtonVariant = 'solid' | 'outlined' | 'text';
export type ButtonColor = 'default' | 'primary' | 'white' | 'black';

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
    return `voodoo.button.disabled.${property}`;
  }

  if (isPressed) {
    return `${buttonThemeKey}.pressed.${property}`;
  }

  if (isHovered) {
    return `${buttonThemeKey}.hovered.${property}`;
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
  const isOutlined = variant === 'outlined';

  return (
    <Pressable
      display="inline-flex"
      width="fit-content"
      maxWidth="voodoo.button.maxWidth"
      disabled={disabled}
      {...props}
    >
      {({ isHovered, isPressed, isFocused }) => {
        const buttonState = {
          isDisabled: disabled,
          isFocused,
          isHovered,
          isPressed,
        };

        const currentColor = getCurrentPropertyValue(
          variant,
          color,
          'color',
          buttonState
        );

        const currentBorderColor = getCurrentPropertyValue(
          variant,
          color,
          'borderColor',
          buttonState
        );

        const currentBackgroundColor = getCurrentPropertyValue(
          variant,
          color,
          'backgroundColor',
          buttonState
        );

        return (
          <View
            backgroundColor={currentBackgroundColor}
            borderRadius="voodoo.button.borderRadius"
            paddingX={
              isOutlined
                ? 'voodoo.button.outlined.paddingX'
                : 'voodoo.button.paddingX'
            }
            paddingY={
              isOutlined
                ? 'voodoo.button.outlined.paddingY'
                : 'voodoo.button.paddingY'
            }
            borderWidth={isOutlined ? 'voodoo.button.borderWidth' : undefined}
            borderColor={isOutlined ? currentBorderColor : undefined}
            position="relative"
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
          >
            {isOutlined ? null : (
              <BorderWhenInteracted
                variant={variant}
                isFocused={isFocused}
                isHovered={isHovered}
                borderColor={currentBorderColor}
              />
            )}

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
