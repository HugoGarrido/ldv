import { Pressable } from 'native-base';
import { ReactNode } from 'react';
import { View } from '../../native-base/primitives';
import { PressableProps } from '../../native-base/primitives/NBPressable';
import { Typography } from '../Typography/Typography';
import { BorderWhenInteracted } from './BorderWhenInteracted';

export type ButtonVariant = 'solid' | 'outlined' | 'text';
export type ButtonColor = 'default' | 'primary';

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
  ...props
}: ButtonProps) {
  const buttonThemeKey = `voodoo.button.${color}.${variant}`;

  return (
    <Pressable
      display="inline-flex"
      width="fit-content"
      maxWidth="voodoo.button.maxWidth"
      {...props}
    >
      {({ isHovered, isPressed, isFocused }) => (
        <View
          backgroundColor={`${buttonThemeKey}.${
            isHovered || isPressed
              ? 'pressed.backgroundColor'
              : 'backgroundColor'
          }`}
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
            color={color}
            variant={variant}
            isFocused={isFocused}
            isHovered={isHovered}
          />
          <View>
            <Typography.Text textAlign="center" color="white">
              {children}
            </Typography.Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
