import { ReactElement } from 'react';
import { View } from '../../native-base/primitives';
import { theme } from '../../theme/theme';
import { ButtonColor, ButtonVariant } from './Button';

interface BorderWhenInteractedProps {
  color: ButtonColor;
  variant: ButtonVariant;
  isHovered?: boolean;
  isFocused?: boolean;
}

export function BorderWhenInteracted({
  color,
  variant,
  isHovered,
  isFocused,
}: BorderWhenInteractedProps): ReactElement {
  return (
    <View
      opacity={isHovered || isFocused ? 1 : 0}
      borderWidth="voodoo.button.borderWidth"
      borderColor={`voodoo.button.${color}.${variant}.focused.borderColor`}
      position="absolute"
      top={`-${theme.button.borderWidth}px`}
      left={`-${theme.button.borderWidth}px`}
      width={`calc(100% + ${theme.button.borderWidth * 2}px)`}
      height={`calc(100% + ${theme.button.borderWidth * 2}px)`}
      borderRadius={`${theme.button.borderRadius + theme.button.borderWidth}px`}
      _web={{
        style: {
          // @ts-expect-error valid css property
          transition: 'all 200ms ease-in',
        },
      }}
    />
  );
}
