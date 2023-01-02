import type { IStackProps } from 'native-base';
import { Stack as NativeBaseStack } from 'native-base';
import type { InterfaceStackProps } from 'native-base/lib/typescript/components/primitives/Stack/Stack';
import type {
  ResponsiveValue,
  SafeAreaProps,
  SpaceType,
} from 'native-base/lib/typescript/components/types';
import type { ViewProps as NativeViewProps } from 'react-native';
import type {
  ForwardRefComponent,
  NativeBaseAcceptedBorderProps,
  NativeBaseAcceptedBorderRadiusProps,
  NativeBaseAcceptedChildrenProp,
  NativeBaseAcceptedColorsProps,
  NativeBaseAcceptedFlexboxProps,
  NativeBaseAcceptedLayoutProps,
  NativeBaseAcceptedPositionProps,
  NativeBaseAcceptedShadowProps,
  NativeBaseAcceptedSpaceProps,
} from '../nativeBaseSupportedProps';
import { VoodooUIBreakpointName } from '../../theme/voodooUI/breakpoints';

type NativeBaseAcceptedStackProps = Extract<
  keyof InterfaceStackProps,
  | 'divider'
  | 'reversed'
  | 'direction'
  | 'isHovered'
  | 'isFocused'
  | 'isDisabled'
  | 'isInvalid'
  | 'isReadOnly'
  | keyof NativeViewProps
  | keyof SafeAreaProps
>;

export interface StackProps
  extends Pick<
    IStackProps,
    | NativeBaseAcceptedChildrenProp
    | NativeBaseAcceptedStackProps
    | NativeBaseAcceptedSpaceProps
    | NativeBaseAcceptedColorsProps
    | NativeBaseAcceptedBorderProps
    | NativeBaseAcceptedBorderRadiusProps
    | NativeBaseAcceptedPositionProps
    | NativeBaseAcceptedShadowProps
    | NativeBaseAcceptedLayoutProps
    | NativeBaseAcceptedFlexboxProps
  > {
  space?: ResponsiveValue<VoodooUIBreakpointName | SpaceType>;
}

export const Stack = NativeBaseStack as ForwardRefComponent<StackProps>;
