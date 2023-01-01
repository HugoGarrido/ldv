export type VoodooUIBreakpointName =
  | 'base'
  | 'small'
  | 'medium'
  | 'large'
  | 'wide';

type BreakpointsTheme = Record<VoodooUIBreakpointName, number>;

export const breakpoints: BreakpointsTheme = {
  base: 0,
  small: 480,
  medium: 768,
  large: 1024,
  wide: 1280,
};
