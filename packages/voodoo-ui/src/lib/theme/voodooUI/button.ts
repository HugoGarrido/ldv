import { ButtonColor } from '../../components/Button/Button';
import { hex2rgba } from '../../utils/hexToRgba/hexToRgba';
import { colors } from './colors';

export interface ButtonVariantTheme {
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
  default: {
    solid: {
      color: colors.white[900],
      borderColor: 'transparent',
      backgroundColor: colors.accent[500],
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: colors.accent[400],
      },
      hovered: {
        color: colors.white[900],
        borderColor: colors.accent[300],
        backgroundColor: colors.accent[400],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.accent[300],
        backgroundColor: colors.accent[400],
      },
    },
    outlined: {
      color: colors.accent[500],
      borderColor: colors.accent[500],
      backgroundColor: 'transparent',
      pressed: {
        color: colors.white[400],
        borderColor: colors.accent[400],
        backgroundColor: 'transparent',
      },
      hovered: {
        color: colors.accent[400],
        borderColor: colors.accent[400],
        backgroundColor: 'transparent',
      },
      focused: {
        color: colors.accent[800],
        borderColor: colors.accent[800],
        backgroundColor: 'inherit',
      },
    },
    text: {
      color: colors.accent[500],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      pressed: {
        color: colors.accent[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.accent[200], 0.5),
      },
      hovered: {
        color: colors.accent[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.accent[200], 0.5),
      },
      focused: {
        color: colors.accent[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.accent[400], 0.5),
      },
    },
  },
  white: {
    solid: {
      color: colors.black[900],
      borderColor: 'transparent',
      backgroundColor: colors.white[800],
      pressed: {
        color: colors.black[900],
        borderColor: 'transparent',
        backgroundColor: colors.white[900],
      },
      hovered: {
        color: colors.black[900],
        borderColor: colors.white[800],
        backgroundColor: colors.white[900],
      },
      focused: {
        color: colors.black[900],
        borderColor: colors.white[800],
        backgroundColor: colors.white[900],
      },
    },
    outlined: {
      color: colors.white[900],
      borderColor: colors.white[900],
      backgroundColor: 'transparent',
      pressed: {
        color: colors.black[800],
        borderColor: colors.white[800],
        backgroundColor: 'transparent',
      },
      hovered: {
        color: colors.white[800],
        borderColor: colors.white[800],
        backgroundColor: 'transparent',
      },
      focused: {
        color: colors.white[800],
        borderColor: colors.white[700],
        backgroundColor: 'inherit',
      },
    },
    text: {
      color: colors.white[900],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      pressed: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.white[700], 0.5),
      },
      hovered: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.white[700], 0.5),
      },
      focused: {
        color: colors.white[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.white[800], 0.5),
      },
    },
  },
  black: {
    solid: {
      color: colors.white[900],
      borderColor: 'transparent',
      backgroundColor: colors.black[900],
      pressed: {
        color: colors.white[900],
        borderColor: colors.black[300],
        backgroundColor: colors.black[800],
      },
      hovered: {
        color: colors.white[900],
        borderColor: colors.black[300],
        backgroundColor: colors.black[800],
      },
      focused: {
        color: colors.white[900],
        borderColor: colors.black[300],
        backgroundColor: colors.black[700],
      },
    },
    outlined: {
      color: colors.black[900],
      borderColor: colors.black[900],
      backgroundColor: 'transparent',
      pressed: {
        color: colors.black[600],
        borderColor: colors.black[600],
        backgroundColor: 'transparent',
      },
      hovered: {
        color: colors.black[600],
        borderColor: colors.black[600],
        backgroundColor: 'transparent',
      },
      focused: {
        color: colors.black[800],
        borderColor: colors.black[800],
        backgroundColor: 'inherit',
      },
    },
    text: {
      color: colors.black[900],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      pressed: {
        color: colors.black[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.black[200], 0.5),
      },
      hovered: {
        color: colors.black[800],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.black[200], 0.5),
      },
      focused: {
        color: colors.black[900],
        borderColor: 'transparent',
        backgroundColor: hex2rgba(colors.black[400], 0.5),
      },
    },
  },
};

// TODO
const buttonDisabled: ButtonVariantTheme = {
  solid: {
    color: colors.white[900],
    borderColor: 'transparent',
    backgroundColor: colors.black[900],
    pressed: {
      color: colors.white[900],
      borderColor: colors.black[300],
      backgroundColor: colors.black[800],
    },
    hovered: {
      color: colors.white[900],
      borderColor: colors.black[300],
      backgroundColor: colors.black[800],
    },
    focused: {
      color: colors.white[900],
      borderColor: colors.black[300],
      backgroundColor: colors.black[700],
    },
  },
  outlined: {
    color: colors.black[900],
    borderColor: colors.black[900],
    backgroundColor: 'transparent',
    pressed: {
      color: colors.black[600],
      borderColor: colors.black[600],
      backgroundColor: 'transparent',
    },
    hovered: {
      color: colors.black[600],
      borderColor: colors.black[600],
      backgroundColor: 'transparent',
    },
    focused: {
      color: colors.black[800],
      borderColor: colors.black[800],
      backgroundColor: 'inherit',
    },
  },
  text: {
    color: colors.black[500],
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    pressed: {
      color: colors.black[800],
      borderColor: 'transparent',
      backgroundColor: hex2rgba(colors.black[200], 0.5),
    },
    hovered: {
      color: colors.black[800],
      borderColor: 'transparent',
      backgroundColor: hex2rgba(colors.black[200], 0.5),
    },
    focused: {
      color: colors.black[900],
      borderColor: 'transparent',
      backgroundColor: hex2rgba(colors.black[400], 0.5),
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
  disabled: buttonDisabled,
};
