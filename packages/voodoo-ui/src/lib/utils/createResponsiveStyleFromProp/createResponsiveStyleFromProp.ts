import type { VoodooUIBreakpointName } from '../../theme/voodooUI/breakpoints';

export type VoodooUIResponsiveRecordValue<T> = {
  [key in VoodooUIBreakpointName]?: T;
};

export type VoodooUIResponsiveValue<T> =
  | T
  | VoodooUIResponsiveRecordValue<T>
  | undefined;

export function createResponsiveStyleFromProp<PossibleStyleValue>(
  responsiveBooleanValue: VoodooUIResponsiveValue<boolean | undefined>,
  valueIfTrue: PossibleStyleValue,
  valueIfFalse?: PossibleStyleValue
): VoodooUIResponsiveValue<PossibleStyleValue> {
  // Handles simple boolean values
  if (!responsiveBooleanValue) return valueIfFalse;

  if (responsiveBooleanValue === true) return valueIfTrue;

  // Handles responsive value object
  const keys = Object.keys(responsiveBooleanValue) as VoodooUIBreakpointName[];

  if (keys.length === 0) return valueIfFalse;

  const responsiveValue =
    {} as VoodooUIResponsiveRecordValue<PossibleStyleValue>;

  keys.forEach((breakpointName) => {
    responsiveValue[breakpointName] = responsiveBooleanValue[breakpointName]
      ? valueIfTrue
      : valueIfFalse;
  });

  return responsiveValue;
}
