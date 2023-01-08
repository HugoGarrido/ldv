import { TypographyColor } from './../../components/Typography/types';
import { colors } from './colors';

export interface LinkColor {
  hovered: {
    color: string;
  };
  pressed: {
    color: string;
  };
  focused: {
    color: string;
  };
}

const linkColors: Record<TypographyColor, LinkColor> = {
  body: {
    hovered: {
      color: colors.body[700],
    },
    pressed: {
      color: colors.body[700],
    },
    focused: {
      color: colors.body[800],
    },
  },
  black: {
    hovered: {
      color: colors.body[700],
    },
    pressed: {
      color: colors.body[700],
    },
    focused: {
      color: colors.body[800],
    },
  },
  white: {
    hovered: {
      color: colors.white[700],
    },
    pressed: {
      color: colors.white[700],
    },
    focused: {
      color: colors.white[800],
    },
  },
  primary: {
    hovered: {
      color: colors.primary[700],
    },
    pressed: {
      color: colors.primary[700],
    },
    focused: {
      color: colors.primary[800],
    },
  },
  accent: {
    hovered: {
      color: colors.accent[700],
    },
    pressed: {
      color: colors.accent[700],
    },
    focused: {
      color: colors.accent[800],
    },
  },
};

export const link = {
  colors: linkColors,
};
