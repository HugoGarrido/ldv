import { VoodooUIBreakpointName } from '../../theme/voodooUI/breakpoints';
import {
  VoodooUIResponsiveRecordValue,
  VoodooUIResponsiveValue,
} from '../createResponsiveStyleFromProp/createResponsiveStyleFromProp';

/**
 * @internal
 * @param v
 * @returns
 */
function isObject(v: any): v is object {
  return typeof v === 'object' && v !== null;
}

/**
 * TODO : make it work
 * @param componentPropValue
 * @param transformFuncIfThruthy
 * @param transformFuncIfFalsy
 * @returns
 */
export function makeStylePropsFromResponsiveValueProps<T, V>(
  componentPropValue: VoodooUIResponsiveValue<T> | undefined,
  transformFuncIfThruthy: (v: T) => V,
  transformFuncIfFalsy: (v?: T) => V
): VoodooUIResponsiveValue<V> {
  const isPropValueAnObject = isObject(componentPropValue);

  const isEmptyObject =
    isPropValueAnObject && Object.keys(componentPropValue).length === 0;

  // Handles empty responsive value
  if (isEmptyObject) {
    return transformFuncIfFalsy(undefined);
  }

  // Handles falsy value
  if (!componentPropValue) {
    // If T is a boolean componentPropValue is not undefined
    return transformFuncIfFalsy(componentPropValue);
  }

  // Handles direct value
  if (!isPropValueAnObject) {
    return transformFuncIfFalsy(componentPropValue);
  }

  // Recreate a responsive value compatible with native base from the keys of the prop
  const definedBreakpointNames = Object.keys(
    componentPropValue
  ) as VoodooUIBreakpointName[];

  const responsiveValue = {} as VoodooUIResponsiveRecordValue<V>;

  definedBreakpointNames.forEach((breakpointName) => {
    responsiveValue[breakpointName] = transformFuncIfThruthy(
      // @ts-expect-error Code is valid but Typescript is confused since we use a type instead of an enum to index VoodooUIResponsiveRecordValue
      componentPropValue[breakpointName]
    );
  });

  return responsiveValue;
}
