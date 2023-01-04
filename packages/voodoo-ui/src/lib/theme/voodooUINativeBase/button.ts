import { ButtonColor, ButtonVariant } from '../../components/Button/Button';
import { theme } from '../theme';

function makeButtonColorForNBForVariant(
  variant: ButtonVariant,
  color: ButtonColor
) {
  const baseKey = theme.button.variant[color][variant];

  return {
    color: baseKey.color,
    borderColor: baseKey.borderColor,
    backgroundColor: baseKey.backgroundColor,
    pressed: {
      color: baseKey.pressed.color,
      borderColor: baseKey.pressed.borderColor,
      backgroundColor: baseKey.pressed.backgroundColor,
    },
    hovered: {
      color: baseKey.hovered.color,
      borderColor: baseKey.hovered.borderColor,
      backgroundColor: baseKey.hovered.backgroundColor,
    },
    focused: {
      color: baseKey.focused.color,
      borderColor: baseKey.focused.borderColor,
      backgroundColor: baseKey.focused.backgroundColor,
    },
  };
}

export const button = {
  colors: {
    primary: {
      solid: makeButtonColorForNBForVariant('solid', 'primary'),
      outlined: makeButtonColorForNBForVariant('outlined', 'primary'),
      text: makeButtonColorForNBForVariant('text', 'primary'),
    },
  },
  sizes: {
    maxWidth: theme.button.maxWidth,
  },
  space: {
    paddingX: theme.button.paddingX,
    paddingY: theme.button.paddingY,
    outlined: theme.button.padding.outlined,
  },
  radii: {
    borderRadius: theme.button.borderRadius,
  },
  borderWidths: {
    borderWidth: theme.button.borderWidth,
  },
};
