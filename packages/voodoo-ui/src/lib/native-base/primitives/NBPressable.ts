import { IPressableProps, Pressable as NativeBasePressable } from 'native-base';
import { InterfacePressableProps } from 'native-base/lib/typescript/components/primitives/Pressable/types';
import type { PressableProps as NativePressableProps } from 'react-native';
import {
  ForwardRefComponent,
  NativeBaseAcceptedBorderProps,
  NativeBaseAcceptedBorderRadiusProps,
  NativeBaseAcceptedColorsProps,
  NativeBaseAcceptedFlexboxProps,
  NativeBaseAcceptedLayoutProps,
  NativeBaseAcceptedPositionProps,
  NativeBaseAcceptedShadowProps,
  NativeBaseAcceptedSpaceProps,
} from '../nativeBaseSupportedProps';

type NativeBaseAcceptedPressableProps = Extract<
  keyof InterfacePressableProps,
  | 'children'
  | 'onHoverIn'
  | 'onHoverOut'
  | 'onFocus'
  | 'onBlur'
  | '_hover'
  | '_pressed'
  | '_focus'
  | '_disabled'
  | 'isDisabled'
  | 'isHovered'
  | 'isPressed'
  | 'isFocused'
  | 'isFocusVisible'
  | '_focusVisible'
  | keyof NativePressableProps
>;
export interface PressableProps
  extends Pick<
    IPressableProps,
    | NativeBaseAcceptedPressableProps
    | NativeBaseAcceptedSpaceProps
    | NativeBaseAcceptedColorsProps
    | NativeBaseAcceptedBorderProps
    | NativeBaseAcceptedBorderRadiusProps
    | NativeBaseAcceptedPositionProps
    | NativeBaseAcceptedShadowProps
    | NativeBaseAcceptedLayoutProps
    | NativeBaseAcceptedFlexboxProps
  > {}

export const Pressable =
  NativeBasePressable as ForwardRefComponent<PressableProps>;
