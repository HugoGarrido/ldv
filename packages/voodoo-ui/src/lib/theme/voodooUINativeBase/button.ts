import { ButtonColor, ButtonVariant } from '../../components/Button/Button';
import { theme } from '../theme';
import { ButtonVariantTheme } from '../voodooUI/button';

function makeButtonColorForNB(
  config:
    | ButtonVariantTheme['outlined']
    | ButtonVariantTheme['solid']
    | ButtonVariantTheme['text']
) {
  return {
    color: config.color,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    pressed: {
      color: config.pressed.color,
      borderColor: config.pressed.borderColor,
      backgroundColor: config.pressed.backgroundColor,
    },
    hovered: {
      color: config.hovered.color,
      borderColor: config.hovered.borderColor,
      backgroundColor: config.hovered.backgroundColor,
    },
    focused: {
      color: config.focused.color,
      borderColor: config.focused.borderColor,
      backgroundColor: config.focused.backgroundColor,
    },
  };
}

function makeButtonColorForNBForVariant(
  variant: ButtonVariant,
  color: ButtonColor
) {
  const config = theme.button.variant[color][variant];

  return makeButtonColorForNB(config);
}

export const button = {
  colors: {
    primary: {
      solid: makeButtonColorForNBForVariant('solid', 'primary'),
      outlined: makeButtonColorForNBForVariant('outlined', 'primary'),
      text: makeButtonColorForNBForVariant('text', 'primary'),
    },
    default: {
      solid: makeButtonColorForNBForVariant('solid', 'default'),
      outlined: makeButtonColorForNBForVariant('outlined', 'default'),
      text: makeButtonColorForNBForVariant('text', 'default'),
    },
    white: {
      solid: makeButtonColorForNBForVariant('solid', 'white'),
      outlined: makeButtonColorForNBForVariant('outlined', 'white'),
      text: makeButtonColorForNBForVariant('text', 'white'),
    },
    black: {
      solid: makeButtonColorForNBForVariant('solid', 'black'),
      outlined: makeButtonColorForNBForVariant('outlined', 'black'),
      text: makeButtonColorForNBForVariant('text', 'black'),
    },
    disabled: {
      solid: makeButtonColorForNB(theme.button.disabled.solid),
      outlined: makeButtonColorForNB(theme.button.disabled.outlined),
      text: makeButtonColorForNB(theme.button.disabled.text),
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
