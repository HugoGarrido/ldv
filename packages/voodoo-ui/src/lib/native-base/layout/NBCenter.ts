import type { ICenterProps } from 'native-base';
import { Center as NativeBaseCenter } from 'native-base';
import type { SafeAreaProps } from 'native-base/lib/typescript/components/types';
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

export interface CenterProps
  extends Pick<
    ICenterProps,
    | keyof NativeViewProps
    | keyof SafeAreaProps
    | NativeBaseAcceptedChildrenProp
    | NativeBaseAcceptedSpaceProps
    | NativeBaseAcceptedColorsProps
    | NativeBaseAcceptedBorderProps
    | NativeBaseAcceptedBorderRadiusProps
    | NativeBaseAcceptedPositionProps
    | NativeBaseAcceptedShadowProps
    | NativeBaseAcceptedLayoutProps
    | NativeBaseAcceptedFlexboxProps
  > {}

export const Center = NativeBaseCenter as ForwardRefComponent<CenterProps>;
