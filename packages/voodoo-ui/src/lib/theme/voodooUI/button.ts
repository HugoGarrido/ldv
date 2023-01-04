import { ButtonColor } from '../../components/Button/Button';
import { hex2rgba } from '../../utils/hexToRgba/hexToRgba';
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
        backgroundColor: colors.primary[400],
      },
      hovered: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: colors.primary[400],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.primary[300],
        backgroundColor: colors.primary[400],
      },
    },
    outlined: {
      color: colors.primary[500],
      borderColor: colors.primary[500],
      backgroundColor: 'transparent',
      pressed: {
        color: colors.white[400],
        borderColor: colors.primary[400],
        backgroundColor: 'transparent',
      },
      hovered: {
        color: colors.primary[400],
        borderColor: colors.primary[400],
        backgroundColor: 'transparent',
      },
      focused: {
        color: colors.primary[800],
        borderColor: colors.primary[800],
        backgroundColor: 'inherit',
      },
    },
    text: {
      color: colors.primary[500],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      pressed: {
        color: colors.primary[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.primary[200], 0.5),
      },
      hovered: {
        color: colors.primary[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.primary[200], 0.5),
      },
      focused: {
        color: colors.primary[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.primary[400], 0.5),
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

const paddingX = 12;
const paddingY = 7;
const borderWidth = 2;

export const button = {
  borderRadius: 10,
  borderWidth,
  paddingX,
  paddingY,
  padding: {
    outlined: {
      paddingX: paddingX - borderWidth,
      paddingY: paddingY - borderWidth,
    },
  },
  maxWidth: 300,
  variant: buttonVariants,
};
