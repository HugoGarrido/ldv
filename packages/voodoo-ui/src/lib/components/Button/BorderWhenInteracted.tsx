import { ReactElement } from 'react';
import { View } from '../../native-base/primitives';
import { theme } from '../../theme/theme';
import { ButtonVariant } from './Button';

interface BorderWhenInteractedProps {
  variant: ButtonVariant;
  isHovered?: boolean;
  isFocused?: boolean;
  borderColor: string;
}

export function BorderWhenInteracted({
  variant,
  isHovered,
  isFocused,
  borderColor,
}: BorderWhenInteractedProps): ReactElement {
  const shouldDisplayBorder =
    variant === 'outlined' ? true : isHovered || isFocused;

  return (
    <View
      opacity={shouldDisplayBorder ? 1 : 0}
      borderWidth="voodoo.button.borderWidth"
      borderColor={borderColor}
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
