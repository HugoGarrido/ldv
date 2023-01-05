import { VoodooUIBreakpointName } from '../../../theme/voodooUI/breakpoints';
import type {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../../../utils/createResponsiveStyleFromProp/createResponsiveStyleFromProp';
import type { TypographyColor } from '../../Typography/types';

interface LinkUiState {
  isPressed?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
}

function typographyVariantToFontFamily(
  color: string,
  uiState: LinkUiState
): string {
  const { isPressed, isFocused } = uiState;
  const configBaseKey = `voodoo.link.colors.${color}`;

  if (isPressed) {
    return `${configBaseKey}.pressed.color`;
  }

  if (isFocused) {
    return `${configBaseKey}.focused.color`;
  }

  return `${configBaseKey}.hovered.color`;
}

export function getStateColorToColorProps(
  color: VoodooUIResponsiveValue<TypographyColor> | undefined,
  uiState: LinkUiState
) {
  if (!color) return typographyVariantToFontFamily('body', uiState);

  if (typeof color === 'string')
    return typographyVariantToFontFamily(color, uiState);

  const keys = Object.keys(color) as VoodooUIBreakpointName[];

  if (keys.length === 0) return typographyVariantToFontFamily('body', uiState);

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<string>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = typographyVariantToFontFamily(
      color[breakpointName] || 'body',
      uiState
    );
  });

  return responsiveValue;
}
