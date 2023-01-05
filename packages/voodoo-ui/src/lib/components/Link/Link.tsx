import type { TextProps } from 'react-native';
import { Pressable } from '../../native-base/primitives';
import type {
  TypographyBuilderProps,
  TypographyProps,
} from '../Typography/Typography';
import { TypographyBuilder } from '../Typography/Typography';
import { getColorToColoProps } from '../Typography/utils/getColorToColorProps';
import { getStateColorToColorProps } from './utils/getStateColorToColorProps';

interface LinkProps
  extends Exclude<
    TypographyBuilderProps,
    'lineHeight' | 'fontFamily' | 'fontSize' | 'accessibilityRole'
  > {
  href?: string;
  color: TypographyProps['color'];
  // @ts-expect-error TODO use react-native-web typings
  hrefAttrs?: TextProps['hrefAttrs'];
  disabled?: boolean;
  onPress?: () => void;
}

export function Link({
  href,
  disabled,
  hrefAttrs,
  color,
  underline = true,
  onPress,
  ...props
}: LinkProps) {
  const currentColor = getColorToColoProps(color);

  return (
    <Pressable
      disabled={disabled}
      display="inline-flex"
      width="fit-content"
      onPress={onPress}
    >
      {({ isHovered, isFocused, isPressed }) => {
        const hasInteraction = isHovered || isFocused || isPressed;

        const interactiveColor = getStateColorToColorProps(color, {
          isHovered,
          isFocused,
          isPressed,
        });

        return (
          <TypographyBuilder
            {...props}
            href={href}
            accessibilityRole="link"
            color={hasInteraction ? interactiveColor : currentColor}
            underline={underline}
            // @ts-expect-error TODO use react-native-web typings
            hrefAttrs={hrefAttrs}
            _web={{
              style: {
                transition: 'all 200ms ease-in',
              },
            }}
          />
        );
      }}
    </Pressable>
  );
}
