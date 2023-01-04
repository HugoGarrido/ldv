import { palette, VoodooUIPalette } from './palette';

type VoodooUIColors = 'body' | 'primary' | 'accent' | 'black' | 'white';
// TODO: implement when needed
// | 'success'
// | 'error'
// | 'warning';

export const colors: Record<VoodooUIColors, VoodooUIPalette> = {
  body: palette.shark,
  primary: palette.electricViolet,
  accent: palette.ultramarine,
  black: palette.shark,
  white: palette.white,
};
