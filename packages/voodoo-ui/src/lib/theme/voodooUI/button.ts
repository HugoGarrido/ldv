import { ButtonColor } from '../../components/Button/Button';
import { colors } from './colors';

interface ButtonVariantTheme {
  solid: {
    color: string;
    borderColor: string;
    backgroundColor: string;
    pressed: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    hovered: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    focused: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
  };
  outlined: {
    color: string;
    borderColor: string;
    backgroundColor: string;
    pressed: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    hovered: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    focused: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
  };
  text: {
    color: string;
    borderColor: string;
    backgroundColor: string;
    pressed: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    hovered: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    focused: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
  };
}

type ButtonVariantsTheme = Record<ButtonColor, ButtonVariantTheme>;

const buttonVariants: ButtonVariantsTheme = {
  primary: {
    solid: {
      color: colors.white[900],
      borderColor: 'transparent',
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
    // TODO
    outlined: {
      color: colors.primary['900'],
      borderColor: colors.primary['900'],
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
    // TODO
    text: {
      color: colors.primary['900'],
      borderColor: 'transparent',
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
  },
  // TODO
  default: {
    solid: {
      color: colors.black[900],
      borderColor: 'transparent',
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
    outlined: {
      color: colors.black['900'],
      borderColor: colors.black['900'],
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
    text: {
      color: colors.black['900'],
      borderColor: 'transparent',
      backgroundColor: colors.primary[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.primary[500],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: 'inherit',
      },
    },
  },
};

export const button = {
  paddingX: 12,
  paddingY: 7,
  maxWidth: 300,
  borderRadius: 10,
  borderWidth: 2,
  variant: buttonVariants,
};
